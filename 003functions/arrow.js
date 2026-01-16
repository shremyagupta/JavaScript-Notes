// Arrow function practice file

// Simple arrow function
const sayHello = () => {
	console.log("Hello from arrow function");
};

// Arrow function with one parameter
const square = (num) => {
	return num * num;
};

// Arrow function with implicit return (no curly braces)
const addTwo = (num1, num2) => num1 + num2;

// Arrow function returning an object
const createUser = (username, price) => ({
	username: username,
	price: price,
});

// Using the arrow functions
sayHello();
console.log("square(5):", square(5));
console.log("addTwo(3, 4):", addTwo(3, 4));
console.log("createUser('hitesh', 999):", createUser("hitesh", 999));
