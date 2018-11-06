
function changeElements(){
  document.getElementById("one").style.color = "blue";
  document.getElementById("one").style.fontSize = "xx-large";
  document.getElementById("two").style.textAlign = "right";
  document.getElementById("two").style.color = "green";
  document.getElementById("two").style.fontSize = "10px";
  document.getElementById("three").style.color = "orange";
  document.getElementById("three").style.fontSize = "10px";
}

function numberPlus(variableName1, variableName2) {
  var total = variableName1 + variableName2;
    printOutput(total);
}
function numberMinus(variableName1, variableName2) {
  var total = variableName1 - variableName2;
  printOutput(total);
}
function numberMultiple(variableName1, variableName2) {
  var total = variableName1 * variableName2;
  printOutput(total);
}
function numberDivide(variableName1, variableName2) {
  var total = variableName1 / variableName2;
  printOutput(total);
}
function printOutput(newNumber){
    document.getElementById("output").innerHTML = newNumber;
}
