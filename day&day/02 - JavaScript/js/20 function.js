/**
 * Created by ThinkPad on 2017/12/2.
 */
//元素选择
function $(id){
    return document.getElementById(id);
}
//scrolltop封装

function scroll(){
    if(window.pageYOffset!=null){
        return {
            left:window.pageXOffset,
            top:window.pageYOffset
        }
    }else if(document.compatMode=='CSS1Compat'){
        return {
            left:document.documentElement.scrollLeft,
            top:document.documentElement.scrollTop
        }
    }
    return {
        left:document.body.scrollLeft,
        top:document.body.scrollTop
    }
}

//动画封装

function animate(obj,json,fn){
    clearInterval(obj.timer);
    obj.timer=setInterval(function(){
        var flag=true;
        for(var attr in json){
            //    动画原理：元素现在的属性current + 步长step
            var current=0;
            if(attr=='opacity'){
                current=parseInt(getStyle(obj,attr)*100)
            }else{
                current=parseInt(getStyle(obj,attr));
            }
            var step=(json[attr]-current)/10;
            //判断step是正还是负，调整
            step= step>0?Math.ceil(step):Math.floor(step);

            //每一步step后的属性状态
            if(attr=='opacity'){    //opacity属性浏览器的设置
                if('opacity' in obj.style){
                    obj.style.opacity=(current+step)/100;
                }else{
                    obj.style.filter="alpha(opacity="+(current+step)+")";
                }
            }else if(attr=='zIndex'){    //zIndex设置
                obj.style.zIndex=json[attr];
            }else{                          //其他
                obj.style[attr]=current+step+'px';
            }

            //只要有一个不停止 就不停止定时器
            if(current!=json[attr]){
                flag=false;
            }
        }

        //定时器都到达json的位置时 结束定时器
        if(flag){
            clearInterval(obj.timer);
            if(fn){
                fn();   //回调函数
            }
        }

    },10)
}

    //获取css样式封装
function getStyle(obj,attr){     //获取某元素的css属性
    if(obj.currentStyle){           //ie浏览器
        return obj.currentStyle[attr];
    }else{
        return window.getComputedStyle(obj,null)[attr];   //w3c浏览器
    }
}