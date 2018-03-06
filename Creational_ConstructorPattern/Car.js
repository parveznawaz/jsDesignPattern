function Car(model, color, year){
	this.model = model;
	this.color = color;
	this.year = year;

	// toString() method will be redefined multiple times for each Car object creation
	// this.toString = function(){
	// 	return this.model+ " "+this.year+" "+this.color;
	// }
}

//with prototype, a single instance of toString() will be shared between all Car objects 
Car.prototype.toString = function(){
		return this.model+ " "+this.year+" "+this.color;
	}

var fordCar = new Car("Ford","Silver", 2017)
console.log(fordCar.toString());
var hondaCar = new Car("Honda","Blue", 2018)
console.log(hondaCar.toString());