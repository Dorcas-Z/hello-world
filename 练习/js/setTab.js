/**
 * Created by Administrator on 2017/7/15.
 */
function $(id){
    return document.getElementById(id);
}
window.onload=function(){
    $('addbtn').onclick=showDiv;
    $('quxiao').onclick=hiddenDiv;
    $('queren').onclick=addTr;
}
function showDiv(){
    $('box').setAttribute('class','show');
}
function hiddenDiv(){
    $('box').setAttribute('class','hide');
}
function addTr(){
    var arrTr=[];
    var tr=document.createElement('tr');
    var td1=document.createElement('td');
    td1.innerHTML='<button id="set">修改</button><button id="del">删除</button>'
    $('tab').appendChild(tr);
    var arrObj=$('content').getElementsByTagName('input');
    for(var i=0;i<arrObj.length;i++){
        if(!arrObj[i].checked){
            arrTr.push( arrObj[i].value)
        }
    }
    for(var j in arrTr){
        var td=document.createElement('td');
        td.setAttribute('class','tdbg');
        td.innerHTML=arrTr[j];
        tr.appendChild(td);
    }
    tr.appendChild(td1);
    $('box').setAttribute('class','hide');
    $('set').onclick=xiuGai;
    $('del').onclick=delTr;
}
function delTr(){
    $('tab').removeChild(this.parentNode.parentNode);
}
function xiuGai(){
    var tr=this.parentNode.parentNode;
    var td=tr.querySelectorAll('.tdbg');/*前几个td*/
    if(td[0].children.length<1){
        for(var i=0;i<td.length;i++){
            var val=td[i].innerHTML;
            td[i].innerHTML='<input type="text" value="'+val+'"/>';
        }
    }else{
        for(var j=0;j<td.length;j++){
            td[j].innerHTML=td[j].firstElementChild.value;
        }
    }
}





