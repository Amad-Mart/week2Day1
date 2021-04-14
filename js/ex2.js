//takes user input and print numbers to the page
function printNumbers(){
    let startNum = parseInt(document.getElementById("numOne").value);
    let endNum = parseInt(document.getElementById("numTwo").value);
    let numbers = getRange(startNum, endNum);
    //  displayData(startNum, endNum);
    //keep business logic from display logic
}

//gets the range of numbers
function getRange(start, end){
    let numberArray = [];
    for (let index = start; index < end; index++) {
        numberArray.push(index);
    }
    return numberArray;
}

//displays numbers on the page
function displayData(){

}