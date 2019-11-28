var Robot = function(name) {
    this.name = name;
    this.isFunctional = true;
}

Robot.prototype.sayHi = function (toWho) {
    if (this.isFunctional == true) {
        console.log("Robot " + name + " greets " + toWho);
    }
    else {
        console.log("Robot " + name + " is broken");
    }
};

Robot.prototype.changeName = function (newname) {
    console.log("Robot " + name + " changes name to " + newname);
    name = newname;
};

Robot.prototype.fixIt = function () {
    this.isFunctional = true;
    console.log("Robot " + name + " was fixed");
}

Robot1 = new Robot("Janusz");
Robot.prototype.sayHi("Michael");
Robot.prototype.changeName("Kozak");
Robot.prototype.fixIt();
Robot.prototype.sayHi("Michael");


