//Zadanie 0
var car = {
    brand: "bmw", color: "blue", numberOfKilometers: 0, printCarinfo() {
        console.log(this.brand);
        console.log(this.color);
        console.log(this.numberOfKilometers);
    }, drive(km){
        this.numberOfKilometers+=km;
        console.log(this.numberOfKilometers);
    }
};
car.printCarinfo();
car.drive(10);

//Zadanie 1
var car = {
    brand: "bmw", color: "blue", numberOfKilometers: 0, printCarinfo() {
        console.log(this.brand);
        console.log(this.color);
        console.log(this.numberOfKilometers);
    }, drive(km){
        this.numberOfKilometers+=km;
        console.log(this.numberOfKilometers);
    }, add(dane){
        tab.push(dane);
    }, return1(){
        for(let i = 0; i<tab.length; i++){
            console.log(tab[i]);
        }
    }  

     
};
var tab = [];
car.add(1992);
car.add(1993);
car.add(1995);
car.return1();

//Zadanie 2
var calculator = {
    save: function (newA, newB) {
        this.a = newA;
        this.b = newB;
        }, 
    sum: function() {
        var sum;
        sum = this.a + this.b;
        return sum;
        },
     multiply: function() {
        var multiply;
        multiply = this.a * this.b;
         return multiply;
        }
};

calculator.save(2, 3);
console.log(calculator.sum());
console.log(calculator.multiply());

//Zadanie 3
var stairs = 
{step: 0, 
up()
	{
	this.step+=1;
	},
down()
	{
	this.step-=1;
	},
printStep()
	{
	console.log(this.step);
	}
};

stairs.up();
stairs.up();
stairs.up();
stairs.down(); 
stairs.printStep();
