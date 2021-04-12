//This will print numbers for startNum to endNum
function printNumbers() {
    let startNum = parseInt(document.getElementById("numOne").value);
    let endNum = parseInt(document.getElementById("numTwo").value);
    let result = "";

    //loop over values from start to end
    for (let i = startNum; i <= endNum; i++) {
        result += `${i} `;
    }

    document.getElementById("result").innerHTML = result;
}