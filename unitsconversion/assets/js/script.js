function calculate() {
    "use strict";

    // Get a reference to the form - Use the ID of the form
    var form = $( "#myform" );
    
    // If all of the form elements are valid, the get the form values
    if (form.valid()) {
        
        // Operand 1
        var fromvalue = document.getElementById("FromValue").value;

        // Operator
        // Get the value associated with the operator that was checked
        var FromUnit;
        if (document.getElementById("FromCentimeters").checked) {
            FromUnit = document.getElementById("FromCentimeters").value;
        }
        if (document.getElementById("FromMeters").checked) {
            FromUnit = document.getElementById("FromMeters").value;
        }
        if (document.getElementById("Fromkilometers").checked) {
            FromUnit = document.getElementById("Fromkilometers").value;
        }
        if (document.getElementById("FromInches").checked) {
            FromUnit = document.getElementById("FromInches").value;
        }
        if (document.getElementById("FromFeet").checked) {
            FromUnit = document.getElementById("FromFeet").value;
        }
        if (document.getElementById("FromYards").checked) {
            FromUnit = document.getElementById("FromYards").value;
        }
        if (document.getElementById("FromMiles").checked) {
            FromUnit = document.getElementById("FromMiles").value;
        }
        
        var ToUnit;
        if (document.getElementById("ToCentimeters").checked) {
            ToUnit = document.getElementById("ToCentimeters").value;
        }
        if (document.getElementById("ToMeters").checked) {
            ToUnit = document.getElementById("ToMeters").value;
        }
        if (document.getElementById("Tokilometers").checked) {
            ToUnit = document.getElementById("Tokilometers").value;
        }
        if (document.getElementById("ToInches").checked) {
            ToUnit = document.getElementById("ToInches").value;
        }
        if (document.getElementById("ToFeet").checked) {
            ToUnit = document.getElementById("ToFeet").value;
        }
        if (document.getElementById("ToYards").checked) {
            ToUnit = document.getElementById("ToYards").value;
        }
        if (document.getElementById("ToMiles").checked) {
            ToUnit = document.getElementById("ToMiles").value;
        }
        
        CalculateResult(fromvalue, FromUnit, ToUnit);
    }
}

async function CalculateResult(fromvalue, fromUnit, toUnit) {
        
        // URL and method used with AJAX Call
        var myURL = "https://brucebauer.info/assets/ITEC3650/unitsconversion.php";

        /* AJAX calculator requires Operand1, Operator, and Operand2 */
        myURL = myURL + "?FromValue=" + encodeURIComponent(fromvalue) + "&FromUnit=" + encodeURIComponent(fromUnit) + "&ToUnit=" + encodeURIComponent(toUnit);

        /* fetch the results */
        let myCalcObject = await fetch(myURL);
        let myResult = await myCalcObject.text();
        
        document.getElementById("Result").innerHTML = myResult;
}

function clearform() {
    "use strict";
    
    /* Set all of the form values to blank or false */
    document.getElementById("FromValue").value = "";
    document.getElementById("FromValueMsg").innerHTML = "";
    document.getElementById("FromUnitMsg").innerHTML = "";
    document.getElementById("ToUnitMsg").innerHTML = "";
    document.getElementById("FromCentimeters").checked = false;
    document.getElementById("FromMeters").checked = false;
    document.getElementById("Fromkilometers").checked = false;
    document.getElementById("FromInches").checked = false;
    document.getElementById("FromFeet").checked = false;
    document.getElementById("FromYards").checked = false;
    document.getElementById("FromMiles").checked = false;
    document.getElementById("ToCentimeters").checked = false;
    document.getElementById("ToMeters").checked = false;
    document.getElementById("Tokilometers").checked = false;
    document.getElementById("ToInches").checked = false;
    document.getElementById("ToFeet").checked = false;
    document.getElementById("ToYards").checked = false;
    document.getElementById("ToMiles").checked = false;
    document.getElementById("Result").innerHTML = "";
}

$( "#myform" ).validate({

});
