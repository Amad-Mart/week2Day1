//takes user input and print numbers to the page
//keep business logic from display logic
function printNumbers() {
    let startNum = parseInt(document.getElementById("numOne").value);
    let endNum = parseInt(document.getElementById("numTwo").value);
    let numbers = getRange(startNum, endNum);
    displayData(numbers);
}

//gets the range of numbers
function getRange(start, end) {
    let numberArray = [];
    for (let index = start; index < end; index++) {
        //fizzbuzz go here
        numberArray.push(index);
    }
    return numberArray;
}

//use this for fizbuzz and morage calc
//displays numbers on the page
function displayData(numbers) {
    const rowTemplate = document.getElementById("Data-Template");
    const resultsBody = document.getElementById("resultsBody");

    // this makes display numbers truly dynamic 
    //creates a clone of content in rowTemplate, selects all td elements, then gets length number
    let colCount = rowTemplate.content.cloneNode(true).querySelectorAll("td").length;
    //ImportNode does same as cloneNode except import can reach outside of file (if you have template file)

    //clears the table resultsBody
    resultsBody.innerHTML = "";

    // loops over rows
    for (let rowIndex = 0; rowIndex < numbers.length; rowIndex += colCount) {
        let dataRow = rowTemplate.content.cloneNode(true);
        //returns an array of columns from the template
        let cols = dataRow.querySelectorAll("td");
        // loop over columns
        for (let colIndex = 0; colIndex < array.length; colIndex++) {
            let value = numbers[rowIndex + colIndex];
            if (typeof value === "undefined") {
                value = "";
            }
            //major hint for fizzbuzz
            //makes even numbers bold
            else if(value % 2 == 0){
                cols[colIndex].classList.add("boldIt");
            }
            // sets td's content 
            cols[colIndex].textContent = value;
        }
        //add the row to the page
        resultsBody.appendChild(dataRow);
    }
}