getHistory = () => {
  return document.getElementById("history-value").innerText;
};

printHistory = num => {
  document.getElementById("history-value").innerText = num;
};

getOutput = () => {
  return document.getElementById("output-value").innerText;
};

printOutput = num => {
  if (num == "") {
    document.getElementById("output-value").inputText = num;
  } else {
    document.getElementById("output-value").innerText = getFormattedNumber(num);
  }
};
getFormattedNumber = num => {
  var n = Number(num);
  var value = n.toLocaleString("en");
  return value;
};

reverseNumberFormat = num => {
  return Number(num.replace(/,/g, ""));
};

var operator = document.getElementsByClassName("operator");
for (var i = 0; i < operator.length; i++) {
  operator[i].addEventListener("click", function() {
        if(this.id=="clear") {
            printHistory(" ");
            printOutput(" ");
        }
        if(this.id=="backspace") {
            var output = reverseNumberFormat(getOutput).toString();
                if(output) {
                    output = output.substr(0,output.length-1);
                    printOutput(output);
                }
        }
        else {
            var output=getOutput();
            var history=getHistory();
            if(output!="") {
              output=reverseNumberFormat(output);
              history=history+output;
              if(this.id=="=") {
                var result=eval(history);
                printOutput(result);
                printHistory(" ");
              }
            }
        }
  });
}

var number = document.getElementsByClassName("number");
for (var i = 0; i < number.length; i++) {
  number[i].addEventListener("click", function() {
      var output = reverseNumberFormat(getOutput());
      if(output!=NaN) {
          output = output + this.id;
          printOutput(output);
      }
  });
}
