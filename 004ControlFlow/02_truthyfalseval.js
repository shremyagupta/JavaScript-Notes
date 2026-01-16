// // fasle , 0  ,"", -0, BigInt(0n), null , undefined, NaN, ALL ARE FALSEY VALUE

// //  everything else is truthy value
// //TRUTHY VALUE
// //"0" ,"'FALSE", 'FALSE, " ", "",[],{}, FUNCTION(){}
// const userEmail = "hjubdf@.com"
// if(userEmail.length ===0){
//     console.log("arrya is empty");
// }


//nullish coalescing operator (??): null undefined
let val1;
val1 = 5 ?? 10
val1 = null ?? 10

console.log(val1);