/*
ASSIGNMENT RULES
- All the answers must be written in JavaScript
- You can ask for help, reach the Teaching Assistants if needed
- You can Google / use StackOverflow BUT only when you think you need something we didn't cover during lessons yet
- You can test your code in a separate file or de-commenting the single exercises in this one.
- You can use the bash terminal, the VSCode terminal or the one embedded in your Operating System if you're using macOS or Linux.
- The solution must be available for the tutors by the end of the day (5PM CET)
*/

/* EXERCISE 1
 Create a variable and assign to it an array containing the first 5 positive numbers.
*/

let positiveNumbers = [0, 1, 2, 3, 4];
console.log(positiveNumbers);

/* EXERCISE 2
 Create a variable and assign to it an object containing your name, surname, email address and age.
*/

const userProfile = {
        name: "Nikolai", 
        surname: "Niklaus",
        email: "nik@puzzle.vc",
        age: 29
    };    
console.log(userProfile);

/* EXERCISE 3
 Add to the previously created object a property with a boolean value to rappresent wheter you have or not a driving license.
*/

userProfile.hasDriverLicense = true;
console.log(userProfile.hasDriverLicense);

/* EXERCISE 4
 Remove from the previously created object the age property.
*/


delete userProfile.age;
console.log(userProfile);

/* EXERCISE 5
 Create a second object with another name, surname, email address and verify that this object has a different email address than the previous one.
*/

const userProfile2 = {
        name: "Joe", 
        surname: "Doe",
        email: "joe@doe.com",
        age: 29
    }

if (userProfile.email !== userProfile2.email) {
    console.log("not the same email");
} else {
    console.log("same email");
}



/* EXERCISE 6
 You are working on an e-commerce website. In the variable totalShoppingCart you are storing the total amount spent by the current user.
 Currently you have a promotion: if the customer's shopping cart total is more than 50, the user is eligible for free shipping (otherwise it costs 10).
 Write an algorithm that calculates the total cost to charge the user with.
*/

let totalShoppingCart = 60;

let getDiscount = totalShoppingCart > 50 ? 0 : 10;
console.log(getDiscount);



/* EXERCISE 7
 You are working on an e-commerce website. Today is Black Friday and everything has a 20% discount at the end of the purchase.
 Modify the previous answer inserting this information and, applying the same rules for the shipping cost, calculate the totalCost.
*/


let totalCost = (totalShoppingCart + getDiscount) * 0.8;
console.log("$",totalCost);


/* EXERCISE 8
 Create a variable and assign to it an object representing a car, with properties like brand, model and licensePlate.
 Then clone it 5 times, and change the licensePlate for each cloned car without affecting the original one.
*/


let car = {
    brand: "BMW",
    model: "abc",
    licensePlate: "1092WE",
}
console.log(car);

let car1 = Object.assign({}, car);
car1.licensePlate = "ajfldfk"; 
console.log(car1);

let car2 = Object.assign({}, car);
car2.licensePlate = "aldkjföa"; 
console.log(car2);

let car3 = Object.assign({}, car);
car3.licensePlate = "xxxxxx"; 
console.log(car3);

let car4 = Object.assign({}, car);
car4.licensePlate = "999999"; 
console.log(car4);

let car5 = Object.assign({}, car);
car5.licensePlate = "00000"; 
console.log(car5);




/* EXERCISE 9
 Create a variable called carsForRent and assign to it an array containing all the cars from the previous exercise.
*/


let carsForRent = [car, car1, car2, car3, car4, car5]; 
console.log(carsForRent);


/* EXERCISE 10
 Remove the first and the last car from the carsForRent array.
*/


carsForRent.splice(0, 1);
carsForRent.splice(4, 1);
console.log("new", carsForRent);


/* EXERCISE 11
 Print to the console the type of the car variable you created before, as well as the types of its licensePlate and brand properties.
*/

console.log(typeof car);
console.log(typeof car.licensePlate);
console.log(typeof car.brand);



/* EXERCISE 12
 Create a new variable called carsForSale assigning to it an empty array, and then insert 3 cars into it.
 Create a new variable called totalCars and assign to it the total number of cars present in the carsForSale and carsForRent arrays.
*/


let carsForSale = [];

let car6 = {
    brand: "BMW",
    model: "abc",
    licensePlate: "10923333WE",
}

let car7 = {
    brand: "BMW",
    model: "abc",
    licensePlate: "1231",
}

let car8 = {
    brand: "BMW",
    model: "abc",
    licensePlate: "1091232WE",
}

carsForSale.push(car6, car7, car8)
console.log("cars for sale", carsForSale);

let totalCars = carsForRent.concat(carsForSale);
console.log("all cars", totalCars);


/* EXERCISE 13
 Using a loop, print to the console all the data for each car in the carsForSale array.
*/


for (let index = 0; index < carsForSale.length; index++) {
    console.log(
        "Brand: ",carsForSale[index].brand);
    console.log(
        "Model: ",carsForSale[index].model);    
    console.log(
        "Licence Plate: ",carsForSale[index].licensePlate);
}
