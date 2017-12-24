/**
 * Created by ThinkPad on 2017/7/15.
 */
window.onload=function(){
    function $(ele){
        return document.getElementById(ele);
    }
    $('add').onclick=fnShow;
    $('cancel').onclick=fnHide;
    function fnShow(){
        $('content').setAttribute('class','show');
    }
    function fnHide(){
        $('content').setAttribute('class','hide');
    }
    $('confirm').onclick=addtr;
    function addtr(){
        var input=$('content').getElementsByTagName('input');
        var emp=[];
        for(var i=0;i<input.length;i++){
           if(!input[i].checked){
               emp.push(input[i].value);
           }
        }
        var tr=document.createElement('tr');
        for(var j=0;j<emp.length;j++){
            var td=document.createElement('td');
            td.innerHTML=emp[j];
            tr.appendChild(td);
            td.setAttribute('class','bg');
        }
        var td1=document.createElement('td');
        td1.innerHTML='<button id="set">修改</button><button id="del">删除</button>';
        tr.appendChild(td1);
        $('tab').appendChild(tr);
        fnHide();
        $('set').onclick=set;
        $('del').onclick=del;
    }
    function del(){
        $('tab').removeChild(this.parentNode.parentNode);
    }
    function set(){
        var tr=this.parentNode.parentNode;
        var td=tr.querySelectorAll('.bg');
        for(var i=0;i<td.length;i++){
            var val=td[i].innerHTML;
            td[i].innerHTML='<input type="text" value="'+val+'">';
        }
        console.log(td[0].children.length);
    }
    }
