class Car {
  constructor(carModelName, carColor, carPrice, carSpeed) {
    this.carModelName = carModelName;
    this.carColor = carColor;
    this.carPrice = carPrice;
    this.carSpeed = carSpeed;
  }
  displaySpeed() {
    console.log("Current speed: " + this.carSpeed);
  }

  increaseSpeed(s) {
    this.carSpeed += s;
    console.log("Speed increased by " + s);
  }
  decreaseSpeed(s) {
    this.carSpeed -= s;
    console.log("Speed decreased by " + s);
  }
}

let myCar = new Car("Alto", "White", 300000, 100);
console.log(myCar);
console.log(myCar.carColor);
myCar.displaySpeed();
myCar.increaseSpeed(20);
myCar.decreaseSpeed(10);
myCar.displaySpeed();
