/**
 * Created by ThinkPad on 2017/8/11.
 */
var arr=[0,1,2];
var n=11;
$('section div').each(function(){
    var close=$('<button>删除</button>');
    $(this).append(close);
    close.css({
        position:'absolute',
        top:'350px',
        right:'10px'
    })
})
$('button:contains("下一页")').click(function(){
    $('button:contains("上一页")').show();
    $.each(arr,function(i){
        if(arr[2]!=n){
            $('section div').eq(arr[i]).removeClass('show').addClass('hide');
            arr[i]+=3;
            $('section div').eq(arr[i]).removeClass('hide').addClass('show');
        }
        if(arr[2]==n){
            $('button:contains("下一页")').hide();
        }
    })
    $('.page').val(arr[0]/3+1);
})
$('button:contains("上一页")').click(function(){
    $('button:contains("下一页")').show();
    $.each(arr,function(j){
        if(arr[2]!=2){
            $('section div').eq(arr[j]).removeClass('show').addClass('hide');
            arr[j]-=3;
            $('section div').eq(arr[j]).removeClass('hide').addClass('show');
        }
        if(arr[2]==2){
            $('button:contains("上一页")').hide();
        }
    })
    $('.page').val(arr[0]/3+1);
})
$('button:contains("首页")').click(function(){
    if(arr[2]!=2){
        $.each(arr,function(j){
            $('section div').eq(arr[j]).removeClass('show').addClass('hide');
            arr[j]=j;
            $('section div').eq(arr[j]).removeClass('hide').addClass('show');
        })
    }
    $('.page').val(arr[0]/3+1);
})
$('.switch').change(function(){
    var val=$(this).val();
    if(val!=(arr[0]/3+1)){
        $.each(arr,function(j){
            $('section div').eq(arr[j]).removeClass('show').addClass('hide');
            arr[j]=(val-1)*3+j;
            $('section div').eq(arr[j]).removeClass('hide').addClass('show');
        })
    }
    if(arr[2]==2){
        $('button:contains("上一页")').hide();
        $('button:contains("下一页")').show();
    }
    if(arr[2]==11){
        $('button:contains("下一页")').hide();
        $('button:contains("上一页")').show();
    }
    $('.page').val(arr[0]/3+1);
})
$('button:contains("删除")').click(function(){
    $(this).parent().remove();
    n=(Math.ceil($('section div').length/3)-1)*3+2;
    $.each(arr,function(i){
            $('section div').eq(arr[i]).removeClass('hide').addClass('show');
    })

    if(arr[2]==2){
        $('button:contains("上一页")').hide();
        $('button:contains("下一页")').show();
    }

    if(n<arr[2]){
        $.each(arr,function(i){
            arr[i]-=3;
            $('section div').eq(arr[i]).removeClass('hide').addClass('show');
        })
    }
    if(arr[2]==n){
        $('button:contains("下一页")').hide();
        $('button:contains("上一页")').show();
    }


})