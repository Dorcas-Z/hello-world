/**
 * Created by ThinkPad on 2017/11/10.
 */
function Product(){
    //��Ʒ����
    this.name='';
    //��Ʒ�۸�
    this.price=0;
    //��Ʒ�ۿ�
    this.discount=0.5;
    //��ƷͼƬ
    this.image='';
}
/*ƴ��ʱ��*/
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
        str+='<i>������0��2ʱ19��6��</i>';
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

    //ajax��ȡ��̨����
    var products= [
        {name:'��Ʒ1',price:1111,discount:3.5,image:'img/boutque10_r2_c2.jpg'},
        {name:'��Ʒ2',price:1111,discount:3.5,image:'img/boutque06_r2_c2.jpg'},
        {name:'��Ʒ3',price:1111,discount:3.5,image:'img/boutque08_r2_c2.jpg'},
        {name:'��Ʒ4',price:1111,discount:3.5,image:'img/boutque09_r2_c2.jpg'},
        {name:'��Ʒ5',price:1111,discount:3.5,image:'img/boutque10_r2_c2.jpg'},
        {name:'��Ʒ6',price:1111,discount:3.5,image:'img/boutque11_r2_c2.jpg'}
    ];

   //���Ĳ� �������ݣ������ݰ���domԪ����
    var str='';
    for(var i=0;i<products.length;i++){
        var product=new Product();
        product.name=products[i].name;
        product.price=products[i].price;
        product.discount=products[i].discount;
        product.image=products[i].image;

        str+=product.bindDOM()
    }

    //չʾ��ҳ����

    var container=document.getElementById('container');
    container.innerHTML=str;

}