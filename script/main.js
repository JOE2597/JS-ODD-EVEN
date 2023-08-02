let userNumber = document.querySelector ("#userNumber");
let displayAns = document.querySelector ("#displayAns");

function checkAns (){

    let result = (userNumber.value % 2)

    if (userNumber.value == ''){
        displayAns.innerHTML = "Please input a number";
        console.log(userNumber.value)
    }
    else if (result == 1){
        displayAns.innerHTML = "Odd";
        console.log(result)
    }
    else if ( result == 0){
        displayAns.innerHTML = "Even";
        console.log(result)
    }
    else{
        displayAns.innerHTML = "Please input valid number";
    }
}

function erase (){
    displayAns.innerHTML = "Let's Start"
    userNumber.value = ""
}

