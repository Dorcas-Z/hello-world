/**
 * Created by Administrator on 2017/7/20.
 */
var timg;
var speed=5
var box=document.getElementById('box');
var btnL=document.getElementById('btn-l');
var btnR=document.getElementById('btn-r');
var li=box.getElementsByTagName('li');
var ul=box.getElementsByTagName('ul')[0];
ul.innerHTML+=ul.innerHTML;/*复制一份内容*/
ul.style.width=li[0].offsetWidth*li.length+'px';
timg=setInterval(fn1,20);
function fn1(){
    ul.style.left=ul.offsetLeft-speed+'px';
    if(ul.offsetLeft<-ul.offsetWidth/2){
        ul.style.left='0px';
    }
    if(ul.offsetLeft>0){
        ul.style.left=-ul.offsetWidth/2+'px';
    }
}
btnL.onclick=function(){
    speed=Math.abs(speed);
}
btnR.onclick=function(){
    if(speed>0){
        speed=-speed;
    }
}
box.onmouseover=function(){
    clearInterval(timg);
}
box.onmouseout=function(){
    timg= setInterval(fn1,20);
}


