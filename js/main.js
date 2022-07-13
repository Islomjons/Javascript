var walkTime = document.querySelector("#walkTime");
var bakeTime = document.querySelector("#bakeTime");
var carTime = document.querySelector("#carTime");
var planeTime = document.querySelector("#planeTime");
var form = document.querySelector("#form");
var input = document.querySelector("#input");

form.addEventListener("submit", function(event){
    event.preventDefault();
    var inputValue = input.value    

    if(!isNaN(inputValue) && input.value <= 99999999999999 && input.value > 0){
        walkTime.textContent = (` ${Math.floor(inputValue /3.6).toFixed(0)}
        h ${((((inputValue / 3.6 ).toFixed(2)) % 1) * 60).toFixed(0)} min`);

        bakeTime.textContent = (` ${Math.floor(inputValue / 20.1).toFixed(0)}
        h ${((((inputValue / 20.1 ).toFixed(2)) % 1) * 60).toFixed(0)} min`);

        carTime.textContent = (` ${Math.floor(inputValue / 70).toFixed(0)}
        h ${((((inputValue / 70 ).toFixed(2)) % 1) * 60).toFixed(0)} min`);

        planeTime.textContent = (` ${Math.floor(inputValue / 800).toFixed(0)}
        h ${((((inputValue / 800 ).toFixed(2)) % 1) * 60).toFixed(0)} min`);
    }else{
        alert("Enter a number");
        console.log("Enter a number");
    }
})