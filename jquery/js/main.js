/**
 * Created by ThinkPad on 2017/12/22.
 */

$(function(){
//   当文档加载完成才执行
    function resize(){
        //    获取屏幕宽度
        var windowWidth=$(window).width();
//    判断是否属于小屏幕
        var isSmallScreen=windowWidth<768;
//    根据大小为界面每一张轮播图设置背景

        $('#main-sl>.carousel-inner>.item').each(function(i,item){

            var $item=$(item);   //因为拿到的是DOM对象，转换为jquery对象
            var imgSrc=$item.data(isSmallScreen?'image-sm':'image-lg');
            $item.css('background-image','url("'+imgSrc+'")');
            if(isSmallScreen){
                $item.html('<img src="'+imgSrc+'"/> ')
            }else{
                $item.html('');
            }
        });
    }

    $(window).on('resize',resize).trigger('resize');

});