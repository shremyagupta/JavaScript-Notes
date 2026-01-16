// // // function sayMyNmae(){
// // // console.log("h");
// // // console.log("t");
// // // console.log("w");
// // // }

// // // //  
// // // //basics
// // // // sayMyNmae()

// // // function addTwoNum(num1,num2){
// // //     return num1+num2;
// // // }
// // // const ans = addTwoNum(4,5);
// // // // console.log(ans);

// // // function addNum(n1 , n2){
// // //     // console.log(n1+n2);

// // // }

// // // const ans1 = addNum(2,3);
// // // //  console.log(ans1);

// // // function addTwoNumbers(n1 , n2){
// // //     return n1+n2
// // // }
// // // const result = addTwoNumbers(12,45)
// // // // console.log(result)
// // // //   login user message

// // function loginUserMessage(username){
// // 	if(username === undefined){
// // 		console.log("please enter a user name");
// // 		return;
// Basic function examples

function sayMyNmae() {
    console.log("h");
    console.log("t");
    console.log("w");
}

// sayMyNmae();

function addTwoNum(num1, num2) {
    return num1 + num2;
}

const ans = addTwoNum(4, 5);
console.log("addTwoNum(4,5):", ans);

function addNum(n1, n2) {
    console.log("addNum inside:", n1 + n2);
}

addNum(2, 3);

function addTwoNumbers(n1, n2) {
    return n1 + n2;
}

const result = addTwoNumbers(12, 45);
console.log("addTwoNumbers(12,45):", result);

// login user message

function loginUserMessage(username) {
    if (username === undefined) {
        console.log("please enter a user name");
        return;
    }
    return `${username} just logged in`;
}

console.log(loginUserMessage("hitesh"));

// Rest parameter example

function calculateArea(val1, val2, ...num) {
    return num;
}

console.log("calculateArea(5,10,12,234):", calculateArea(5, 10, 12, 234));

// objects as a function parameter

const user = {
    username: "hitesh",
    price: 1999,
};

function handleObject(anyobject) {
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
}

handleObject(user);
handleObject({
    username: "sam",
    price: 234342,
});