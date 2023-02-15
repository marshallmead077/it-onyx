function calculate() {
    "use strict";
    
    /* Make sure that the form is valid */
    if ($( "#myform" ).valid()) {

    
        
        /* get the operands from the form */
        var FormValue = document.getElementById("FormValue").value;

        /* figure out which operator was checked and place the value in operator */
        var FromUnit;
        if (document.getElementById("cm").checked) {
            FromUnit = document.getElementById("cm").value;
        }
        if (document.getElementById("m").checked) {
            FromUnit = document.getElementById("m").value;
        }
        if (document.getElementById("km").checked) {
            FromUnit = document.getElementById("k").value;
        }
        if (document.getElementById("in").checked) {
            FromUnit = document.getElementById("in").value;
        }
        if (document.getElementById("ft").checked) {
            FromUnit = document.getElementById("ft").value;
        }
        if (document.getElementById("yd").checked) {
            FromUnit = document.getElementById("yd").value;
        }
        if (document.getElementById("mi").checked) {
            FromUnit = document.getElementById("mi").value;
        }
        var ToUnit;
        if (document.getElementById("tocm").checked) {
            ToUnit = document.getElementById("cm").value;
        }
        if (document.getElementById("tom").checked) {
            FromUnit = document.getElementById("m").value;
        }
        if (document.getElementById("tokm").checked) {
            ToUnit = document.getElementById("k").value;
        }
        if (document.getElementById("toin").checked) {
            ToUnit = document.getElementById("in").value;
        }
        if (document.getElementById("toft").checked) {
            ToUnit = document.getElementById("ft").value;
        }
        if (document.getElementById("toyd").checked) {
            ToUnit = document.getElementById("yd").value;
        }
        if (document.getElementById("tomi").checked) {
            ToUnit = document.getElementById("mi").value;
        }

        var FormValue = document.getElementById("FormValue").value;
    }
        CalculateResult(FormValue, FromUnit, ToUnit);{
            
        }
        async function CalculateResult(FormValue, FromUnit, ToUnit) {
        
        
    
    
        
        
        var myURL = "https://brucebauer.info/assets/ITEC3650/unitsconversion.php";

        myURL = myURL + "?FromValue=" + encodeURIComponent(FormValue) + "&FromUnit=" + encodeURIComponent(FromUnit) + "&ToUnit=" + encodeURIComponent(ToUnit);

        let myCalcObject = await fetch(myURL);
        let myResult = await myCalcObject.text();
        
        document.getElementById("Result").innerHTML = myResult; 
        }
    }
    
        
        function clearform() {
    
    /* Set all of the form values to blank or false */
    document.getElementById("FormValue").value = "";
    document.getElementById("FormValueError").innerHTML = "";
    document.getElementById("cm").checked = false;
    document.getElementById("m").checked = false;
    document.getElementById("km").checked = false;
    document.getElementById("in").checked = false;
    document.getElementById("ft").checked = false;
    document.getElementById("yd").checked = false;
    document.getElementById("mi").checked = false;
    document.getElementById("tocm").checked = false;
    document.getElementById("tom").checked = false;
    document.getElementById("tokm").checked = false;
    document.getElementById("toin").checked = false;
    document.getElementById("toft").checked = false;
    document.getElementById("toyd").checked = false;
    document.getElementById("tomi").checked = false;
    document.getElementById("Result").innerHTML = "";
}

/* Form Validation */
$( "#myform" ).validate({
 
});
