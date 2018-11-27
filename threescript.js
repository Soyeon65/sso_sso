function WaitForPrint(){
  setTimeout(function(){PrintDivOne();}, 1000);
}

function PrintDivOne(){
  document.getElementById("divone").innerHTML +="One DIV"
  setTimeout(function(){PrintDivTwo();}, 2000);
}

function PrintDivTwo(){
  document.getElementById("divtwo").innerHTML +="Two DIV"
  setTimeout(function(){WaitForPrint();}, 1000);
}

function SetInvisible(){
  document.getElementById("Invisible").style.visibility="hidden";
}
