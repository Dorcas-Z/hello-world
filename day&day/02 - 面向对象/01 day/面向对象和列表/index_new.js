/**
 * Created by 49924 on 2017/5/15.
 */
//写构造函数，首字母必须大写
//第一步构造函数，写共有属性
function Product(){
    this._init();
    this.name = '';
    this.price = '';
    this.description = '';
    this.groupPrice = '';
    this.image = '';
    this.soldAmount = '';
    this.discount = '';
}
//第二部写原型中的绑定方法，bindDOM  以真换假
Product.prototype = {
    _init: function(){

    },
    addToCart: function () {

    },
    //注意拼接方法 str = 空，str+= return str
    bindDOM: function () {
        var str = '';
        str += '<dl class="">';
        str += '<dt><a href="javascript:;"><img src="'+this.image+'" width="384" height="225" /></a></dt>';
        str += '<dd>';
        str += '<span>';
        str += '<a href="javascript:;">';
        str += '<em>'+this.discount+'折/</em>'+this.name+'';
        str += '</a>';
        str += '</span>';
        str += '</dd>';
        str += '<dd class="price">';
        str += '<em>'+this.groupPrice+'</em>';
        str += '<del>'+this.price+'</del>';
        str += '<i>销量：'+this.soldAmount+'0天2时19分6秒</i>';
        str += '</dd>';
        str += '</dl>';
        return str;
    }
};

window.onload = function () {
    //var product1 = new product();
    //var product2 = new product();
    //var product3 = new product();
    //var product4 = new product();
    //var products = [ product1, product2, product3, product4];

//这就是后台的json，以后常常要解析他们
//    第三部 拿到后台数据
    var products= [
        {name:'产品1',price:1111,groupPrice:1000,soldAmount:300,discount:3.5,image:'img/boutque10_r2_c2.jpg'},
        {name:'产品1',price:1111,groupPrice:1000,soldAmount:300,discount:3.5,image:'img/boutque06_r2_c2.jpg'},
        {name:'产品1',price:1111,groupPrice:1000,soldAmount:300,discount:3.5,image:'img/boutque08_r2_c2.jpg'},
        {name:'产品1',price:1111,groupPrice:1000,soldAmount:300,discount:3.5,image:'img/boutque09_r2_c2.jpg'},
        {name:'产品1',price:1111,groupPrice:1000,soldAmount:300,discount:3.5,image:'img/boutque10_r2_c2.jpg'},
        {name:'产品1',price:1111,groupPrice:1000,soldAmount:300,discount:3.5,image:'img/boutque11_r2_c2.jpg'},
    ];
    //将数据products【】解析并且通过bindDOM绑定到元素，积攒起来最后添加到页面，，for干苦力，关键是存储数据的str
    //第四部 遍历数据，把数据绑定在dom元素中
    var str = '';
    for( var i = 0; i < products.length; i++){
        var product = new Product();
        product.name = products[i].name;
        product.price = products[i].price;
        product.groupPrice = products[i].groupPrice;
        product.soldAmount = products[i].soldAmount;
        product.discount = products[i].discount;
        product.image = products[i].image;

        str += product.bindDOM();

    }
    //第五步，展示在页面中
    var container = document.getElementById("container");
    container.innerHTML = str;//要用jq的语法需要用$包裹起来啊！！


//1构造函数，2写原型中方法
//    3解析数据，4绑定数据到dom，5展示数据
}
