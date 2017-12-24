/**
 * Created by ThinkPad on 2017/11/10.
 */
function Product(){
    //产品名称
    this.name='';
    //产品价格
    this.price=0;
    //产品折扣
    this.discount=0.5;
    //产品图片
    this.image='';
}
/*拼接时代*/
/*'+ +'*/
Product.prototype={
    bindDOM:function(){
        var str='';
        str+='<dl>';
        str+='<dt><a href="javascript:;"><img src="'+this.image+'" width="384" height="225" /></a></dt>';
        str+='<dd>';
        str+='<span>';
        str+='<a href="javascript:;">';
        str+='<em>'+this.discount+'/</em>'+this.name+'';
        str+='</a>';
        str+='</span>';
        str+='</dd>';
        str+='<dd class="price">';
        str+='<em>'+this.price+'</em>';
        str+='<del>?198.00</del>';
        str+='<i>销量：0天2时19分6秒</i>';
        str+='</dd>';
        str+='</dl>';

        return str;
    }
}

window.onload=function () {
    //var product1 = new product();
    //var product2 = new product();
    //var product3 = new product();
    //var product4 = new product();
    //var products = [ product1, product2, product3, product4];

    //ajax获取后台数据
    var products= [
        {name:'产品1',price:1111,discount:3.5,image:'img/boutque10_r2_c2.jpg'},
        {name:'产品2',price:1111,discount:3.5,image:'img/boutque06_r2_c2.jpg'},
        {name:'产品3',price:1111,discount:3.5,image:'img/boutque08_r2_c2.jpg'},
        {name:'产品4',price:1111,discount:3.5,image:'img/boutque09_r2_c2.jpg'},
        {name:'产品5',price:1111,discount:3.5,image:'img/boutque10_r2_c2.jpg'},
        {name:'产品6',price:1111,discount:3.5,image:'img/boutque11_r2_c2.jpg'}
    ];

   //第四部 遍历数据，把数据绑定在dom元素中
    var str='';
    for(var i=0;i<products.length;i++){
        var product=new Product();
        product.name=products[i].name;
        product.price=products[i].price;
        product.discount=products[i].discount;
        product.image=products[i].image;

        str+=product.bindDOM()
    }

    //展示在页面中

    var container=document.getElementById('container');
    container.innerHTML=str;

}