var inputField = document.getElementById("inputField");

function inputVal(val) {
  inputField.value += val;
}

function equSol() {
  try {
    if (inputField.value) {
      inputField.value = eval(inputField.value);
    }

  }
  catch (err) {
    alert("Invalid Input");
  }
}


function clr() {
  inputField.value = inputField.value.slice(0, -1);;
}

function allClear() {
  inputField.value = "";
}

var tempLength = 0;

function perSol() {
  if (inputField.value) {
    var floatVal = parseFloat(inputField.value)
    var secVal = inputField.value.split("-").slice(-1)[0]
    var result = floatVal / 100 * secVal;
    tempLength = floatVal.toString().length + 1;
    inputField.value = eval(inputField.value.slice(0, tempLength) + result);
  }

}