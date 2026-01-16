//IMMEDIATELY INVOKED FUNCTION EXPRESSION(IIFE)
(function chai(){
    console.log(`db`);
})();

( (name) => {
    console.log(`db name  ${name}`);
    
})(`shremya`)
