//Zadanie 0
function Basket(){
    this.products= [];
    this.sum= 0;
    this.addProduct=function(name, price){
        this.products.push(name);
        this.sum+=price;
    };
    this.showBasket=function(){
        for(let i = 0; i<this.products.length; i++){
            console.log(this.products[i]);
        }
        console.log(this.sum);
    };
}
var aliceBasket = new Basket();
aliceBasket.addProduct("pomidor",10);
aliceBasket.addProduct("arbuz",40);
aliceBasket.showBasket();

var bruceBasket = new Basket();
bruceBasket.addProduct("rice", 10);
bruceBasket.addProduct("grzyby mun",50);
bruceBasket.addProduct("tofu",20);
bruceBasket.showBasket();






