


//get the values from the page
//start or controller function
function getValues() {
    //get values from page
let startValue = document.getElementById("startValue").value;
let endValue = document.getElementById("endValue").value;
let numbers = [];
//We need to validate our input
//parse into integers
startValue = parseInt(startValue);
endValue = parseInt(endValue);

if (Number.isInteger(startValue) && Number.isInteger(endValue)){

    //call generateNumbers
    let numbers = generateNumbers(startValue,endValue);
    }else{
alert("You must enter intgers");

    }


    //call displayNumbers
    displayNumbers(numbers);
}

//generate numbers from the startValue to the endValue
//logic functions
function generateNumbers(sValue, eValue){
    let numbers = [];

    //we want to get all numbers from start to end
for (let index = sValue; index <= eValue; index++) {
    //this will execute in a loop until index = eValue
    numbers.push(index);
}
    return numbers;
}

//display the numbers and mark the even numbers bold
//display or view functions
function displayNumbers(numbers){
let templateRows = "";
    for (let index = 0; index < numbers.length; index++) {
        let number = numbers[index];
        templateRows += `<tr><td>${number}</td></tr>`;
    }
document.getElementById('results').innerHTML = templateRows

}