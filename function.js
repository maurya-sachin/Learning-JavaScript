function typeHello(name, useAlert){
    
    if(useAlert){
        alert("Hello, "+ name);
    }else{
        console.log("Hello, "+name);
    }
}


function randomNum(max){
    var rand = Math.random()* max;
    rand= Math.round(rand);
    return rand;
}

console.log(randomNum(50));