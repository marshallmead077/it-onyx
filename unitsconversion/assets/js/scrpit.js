function calculate() {
    "use strict";
    
    /* Make sure that the form is valid */
    if ($( "#myform" ).valid()) {

    
        
        /* get the operands from the form */
        var FromValue = document.getElementById("FromValue").value;

        /* figure out which operator was checked and place the value in operator */
        var FromUnit;
        if (document.getElementById("cm").checked) {
            FromUnit = document.getElementById("centimenters").value;
        }
        if (document.getElementById("m").checked) {
            FromUnit = document.getElementById("meters").value;
        }
        if (document.getElementById("km").checked) {
            FromUnit = document.getElementById("kilometers").value;
        }
        if (document.getElementById("in").checked) {
            FromUnit = document.getElementById("inches").value;
        }
        if (document.getElementById("ft").checked) {
            FromUnit = document.getElementById("feet").value;
        }
        if (document.getElementById("yd").checked) {
            FromUnit = document.getElementById("yards").value;
        }
        if (document.getElementById("mi").checked) {
            FromUnit = document.getElementById("miles").value;
        }
        var ToUnit;
        if (document.getElementById("tocm").checked) {
            ToUnit = document.getElementById("centimenters").value;
        }
        if (document.getElementById("tom").checked) {
            FromUnit = document.getElementById("meters").value;
        }
        if (document.getElementById("tokm").checked) {
            ToUnit = document.getElementById("kilometers").value;
        }
        if (document.getElementById("toin").checked) {
            ToUnit = document.getElementById("inches").value;
        }
        if (document.getElementById("toft").checked) {
            ToUnit = document.getElementById("feet").value;
        }
        if (document.getElementById("toyd").checked) {
            ToUnit = document.getElementById("yards").value;
        }
        if (document.getElementById("tomi").checked) {
            ToUnit = document.getElementById("miles").value;
        }

        var FromValue = document.getElementById("FromValue").value;
    }
        CalculateResult(FromValue, FromUnit, ToUnit);{
            
        }
        async function CalculateResult(FromValue, FromUnit, ToUnit) {
        
        
    
    
        
        
        var myURL = "https://brucebauer.info/assets/ITEC3650/unitsconversion.php";

        myURL = myURL + "?FromValue=" + encodeURIComponent(FromValue) + "&FromUnit=" + encodeURIComponent(FromUnit) + "&ToUnit=" + encodeURIComponent(ToUnit);

        let myCalcObject = await fetch(myURL);
        let myResult = await myCalcObject.text();
        
        document.getElementById("Result").innerHTML = myResult; 
        }
    }
    
        
        function clearform() {
    
    /* Set all of the form values to blank or false */
    document.getElementById("FromValue").value = "";
    document.getElementById("FromValueError").innerHTML = "";
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
