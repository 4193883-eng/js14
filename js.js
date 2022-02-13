function helloJS(obj){
    if (obj > 0){
    for(let i = 0; i < obj; i++){
        console.log("Privet")
    }
    }else{
    alert("ERORR")
    }
}    
helloJS(prompt("GIVE US NUMBER"))