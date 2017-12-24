/**
 * Created by ThinkPad on 2017/7/12.
 */
function $(ele){
    var a=document.getElementById(ele);
    return a;
}
var li=$('nav').getElementsByTagName('li')[0];
li.setAttribute('onmouseover','dlShow(this)');
function dlShow(ele){
    ele.children[1].setAttribute('style','display:block')
}
var dd=$('nav').getElementsByTagName('dd');
var div=$('title').getElementsByTagName('div');
for(var i=0;i<dd.length;i++){
    dd[i].setAttribute('onmouseover','divShow('+i+')');
}
function divShow(num){
    $('title').setAttribute('style','display:block');
    for(var j=0;j<div.length;j++){
       div[j].setAttribute('style','display:none');
       dd[j].removeAttribute('style');
       dd[j].firstElementChild.removeAttribute('style');
    }
    div[num].setAttribute('style','display:block;background:#f9f9f9;');
    dd[num].setAttribute('style','background:#f9f9f9;');
    dd[num].firstElementChild.setAttribute('style','color:#000');
}
li.setAttribute('onmouseout','dlHide()');
function dlHide(){
    if(!$('title').hasAttribute('style')){
        li.children[1].removeAttribute('style');
    }else{
        $('title').onmouseout=function(){
            return 1;
        }
        if($('title').onmouseout){
            function a(){
                $('title').removeAttribute('style');
                li.children[1].removeAttribute('style');
            }
            a()
        }
    }
}







