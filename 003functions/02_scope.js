// // // // let a = 10 
// // // // const b = 20 
// // // // var c = 32
// // // // {}scope hota  hai 
// // // // var c = 233    // global scope
// // // let a =2344
// // // if(true){
// // //     let a = 10 // blocked scope
// // //     const b = 20 
// // //      console.log("Inner:" , a);
// // // }
// // // for(let i = 0 ; i<Array.length; i++){
// // //     const element = array[i];
// // // }

// // // console.log(a);
// // // // console.log(b);
// // // // console.log(c);
 

// // // nested function scope

// // function one(){
// //     const username = "shre"

// //     function two(){
// //         const website = "shrmhya.com"
// //         console.log(username);
// //     }
// //     // console.log(website);
// //     two()
    
// // }
// // one()

// if(true){
//     const username = "shremya"
//     if(username === "shremya"){
//         const website = "youtube"
//         console.log(username + website);
//     }
//         // console.log(website);
// }
// // console.log(username);

// /interesting part of scope

function addone(num){
    return num +1;


}
addone(5)

const addTwo = function(num){
    return num +2
}
addTwo(5)







