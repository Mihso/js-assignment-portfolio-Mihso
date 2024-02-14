let value = "";
let amount = 0;
data = [];
let record = document.getElementById("table");

document.getElementById("sign").innerHTML = "+"

function tester(){
    value = document.getElementById("sign").innerHTML
    console.log(value)
    if(value == "+"){
        amount = Number(document.getElementById("number1").value) + Number(document.getElementById("number2").value);
    }
    else if(value == "-"){
        amount = Number(document.getElementById("number1").value) - Number(document.getElementById("number2").value);
    }
    else if(value == "x"){
        amount = Number(document.getElementById("number1").value) * Number(document.getElementById("number2").value);
    }
    else if(value == "/"){
        amount = Number(document.getElementById("number1").value) / Number(document.getElementById("number2").value);
    }
    else{
        return(0)
    }
    data.push(amount);
    var li = document.createElement('tr');
    var col1 = document.createElement('td');
    var col2 = document.createElement('td');
    col1.innerHTML = document.getElementById("number1").value + value + document.getElementById("number2").value;
    col2.innerHTML = amount;
    li.appendChild(col1);
    li.appendChild(col2);
    record.appendChild(li);
    return amount;
}
function amounter(){
    return amount
}
function add(){
    document.getElementById("sign").innerHTML = "+"
}
function subtract(){
    document.getElementById("sign").innerHTML = "-"
}
function multiply(){
    document.getElementById("sign").innerHTML = "x"
}
function divide(){
    document.getElementById("sign").innerHTML = "/"
}

