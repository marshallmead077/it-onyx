function calculate() {
    
    /* Make sure that the form is valid */
    if ($( "#myform" ).valid()) {
        
        /* get the operands from the form */
        var number1 = document.getElementById("Number1").value;
        var number2 = document.getElementById("Number2").value;
        var number3 = document.getElementById("Number3").value;
        
        /* convert the operands from string to floating point */
        var number1fp = parseFloat (number1);
        var number2fp = parseFloat (number2);
        var number3fp = parseFloat (number3);
        
        /* figure out which operator was checked and place the value in operator */
        var number;
        if (document.getElementById("AddNumber").checked) {
            number = document.getElementById("AaddNumber").value;
        }
        if (document.getElementById("SubtarctNumber").checked) {
            number = document.getElementById("SubtarctNumber").value;
        }
        if (document.getElementById("MultiplyNumber").checked) {
            number = document.getElementById("MultiplyNumber").value;
        }

        var result;
        
        /* if the operator was "Min" then set result to the minimum */
        if (operator == "Add") {
            if(number1fp <= number2fp && number1fp <= number3fp) {
                result = operand1fp;
            }
            if(number2fp <= number1fp && number2fp <= number3fp) {
                result = number2fp;
            }
            if(number3fp <=number1fp && number3fp <= number2fp) {
                result = number3fp;
            }
        }
 
        /* if the operator was "Max" then set result to the maximum */
        if (operator == "Subtract") {
            if(number1fp <= number2fp && number1fp <= number3fp) {
                result = operand1fp;
            }
            if(number2fp <= number1fp && number2fp <= number3fp) {
                result = number2fp;
            }
            if(number3fp <=number1fp && number3fp <= number2fp) {
                result = number3fp;
            }
        }

        /* if operator was "Avg" the calcualute the average of 3 operands */
        if (operator == "Multiply") {
            result = (numberfp + number2fp + number3fp) / 3.0;
        }
        
        /* convert the result to a string and display it */
        document.getElementById("Result").innerHTML = result.toString();
    }
}

function clearform() {
    
    /* Set all of the form values to blank or false */
    document.getElementById("Number1").value = "";
    document.getElementById("Number2").value = "";
    document.getElementById("Number3").value = "";
    document.getElementById("Number1Error").innerHTML = "";
    document.getElementById("Number2Error").innerHTML = "";
    document.getElementById("Number3Error").innerHTML = "";
    document.getElementById("AddNumber").checked = false;
    document.getElementById("SubtarctNumber").checked = false;
    document.getElementById("MultiplyNumber").checked = false;
    document.getElementById("NumberError").innerHTML = "";
    document.getElementById("Result").innerHTML = "";
}

/* Form Validation */
$( "#myform" ).validate({
 
});