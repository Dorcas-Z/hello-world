/**
 * Created by ThinkPad on 2017/11/11.
 */
window.onload=function() {
    var product = new Product;
    product.name = '玫瑰金iphone9';
    /*购买人数*/
    product.saled = 8888;
    /* 原价*/
    product.oldPrice = 6000;
    /* 现价*/
    product.nowPrice = 2222;
    /* 产品描述*/
    product.des = '完美的高像素高清拍照，一键通话，兼容更多的应用';
    /* 尺寸*/
    product.size = ['4.5英寸', '5英寸', '5.5英寸', '6英寸', '6.5英寸'];
    /*长度*/
    product.long = ['128mm', '168mm'];
    /*图片*/
    product.images = [
        {small: 'images/s11.jpg', big: 'images/s11.jpg'},
        {small: 'images/s12.jpg', big: 'images/s12.jpg'},
        {small: 'images/s13.jpg', big: 'images/s13.jpg'}
    ];



    product.bindDOM();

    /*初始化购物车*/
    var cart=new Cart();
    cart.bindBasic();
    cart.bindList();

    $('#btnaddcart').click(function(){
        /*更新产品列表*/
        cart.products.push(product);
        /*更新基本信息*/
        cart.bindBasic();
        /*更新列表*/
        cart.bindList();
        $(window).scrollTop(0);
    })

}
