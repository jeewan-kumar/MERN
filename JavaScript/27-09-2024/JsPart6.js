let hello = function(){
    console.log("hello");    
}

hello();

//Higher order functions

function oddOrEvenFactory(request) {
    if(request == "odd"){
        return function(n){
            console.log(!(n%2==0));
            
        }
    } else if (request == "even"){
        return function(n){
            console.log(n%2==0);
            
        }
    } else {
        console.log("Wrong request");
        
    }
}

let request = "odd";

let fun = oddOrEvenFactory(request);

fun(8);