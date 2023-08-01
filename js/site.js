


//get the values from the page
//start or controller function
function getValues(){
    //get values from page
let startValue = document.getElementById("startValue").value;
let endValue = document.getElementById("endValue").value;

    //call generateNumbers
let numbers = generateNumbers(startValue,endValue);
    //call displayNumbers
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
function displayNumbers(){

}