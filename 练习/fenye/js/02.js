/**
 * Created by Administrator on 2017/8/12.
 */

var arrTable=[];
$(function(){
    var div=$('#box');
    div.css('height','200px')
    $.getJSON('http://127.0.0.1/4.php?searchText=999&callback=?',function(data){
        var arrAll=JSON.parse(data);
        for(var i=0;i<arrAll.length;i+=5){
            var arr=arrAll.slice(i,i+5);
            arrTable.push(arr);
        }
        $.each(arrTable,function(i){
            var table=$(`
                <table border="1" align="center" width="800">
                    <tr>
                        <th>名称</th>
                        <th>类型</th>
                        <th>金额</th>
                        <th>面值</th>
                        <th>描述</th>
                        <th>数量</th>
                        <th>日期</th>
                        <th>操作</th>
                    </tr>
                </table>
            `);
            div.append(table);
            $.each(arrTable[i],function(j){
                var tr=$('<tr></tr>');
                table.append(tr);
                $.each(arrTable[i][j],function(q){
                    var td=$('<td>'+arrTable[i][j][q]+'</td>');
                    tr.append(td);
                })
                var date=new Date().toTimeString();
                var s=date.slice(0,date.indexOf(' '));
                var td1=$('<td>'+s+'</td>');
                tr.append(td1);
                var td2=$('<td><button class="del">删除</button></td>');
                tr.append(td2);
            })
        })
        $('table').eq(0).show().siblings('table').hide();

        var preBtn=$('<button>上一页</button>');
        $('body').append(preBtn)
        var span=$('<span></span>');
        span.html('<span id="sp">1</span>/'+'<span id="leng">'+ $("table").length+'</span>' )
        var nextBtn=$('<button>下一页</button>');
        span.appendTo('body');
        $('body').append(nextBtn);
        nextBtn.click(nex);
        preBtn.click(pre);
        $('.del').click(removeTr);
    })
})
function removeTr(){
    var oldTab=$(this).parents('table');
    if(oldTab.find('tr').length<3){
        oldTab.prev().show();
    }
    var nextAllTab=$(this).parents('table').nextAll('table');
    $.each(nextAllTab,function(){
        var tr=$(this).find('tr').eq(1)
        $(this).prev('table').append(tr);
    })
    $(this).parents('tr').remove();
    $('#box table').each(function(){
        var trAll= $(this).find('tr');
        if(trAll.length<2){
            $(this).remove();
        }
    })
    $('#leng').html($('#box table').length);
    $('#sp').html($('table:visible').index('table')+1);
}
function nex(){
    var n=$('table:visible').index('table');
    n++;
    if(n>$('table').length-1){
        return false;
    }
    $('#sp').html(n+1);
    $('table').eq(n).show().siblings('table').hide();
}
function pre(){
    var n=$('table:visible').index('table');
    n--;
    if(n<0){
        return false;
    }
    $('#sp').html(n+1);
    $('table').eq(n).show().siblings('table').hide();
}