var Calculator = function() {
	this.history = [];
}

Calculator.prototype.add = function(num1, num2){
  this.result = num1 + num2;
  this.history.push("added " +num1+  " to " +num2+ " got " + this.result);
 
};

Calculator.prototype.multiply = function(num1, num2){
  this.result = num1 * num2;
  this.history.push("multiplied " +num1+  " by " +num2+ " got " + this.result);
   
};

Calculator.prototype.substract = function(num1, num2){
  this.result = num1 - num2;
  this.history.push("substracted " +num2+  " from " +num1+ " got " + this.result);
   
};

Calculator.prototype.divide = function(num1, num2){
  this.result = num1 / num2;
  this.history.push("divided " +num1+  " by " +num2+ " got " + this.result);
   
};

 Calculator.prototype.printOperations = function(){
   console.log("Operations performed: ", this.history);
 };

 Calculator.prototype.clearOperations = function(){
   this.history = [];
   console.log("Operations performed: ", this.history);
 };

