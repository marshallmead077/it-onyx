/* The following should be a file in your js or script folder */

$( "#CirlceForm" ).validate({

});

function displayCircle() {
    // if the form is valid, then make the calculations
    if ($("#CircleForm").valid()) {
        
         document.getElementById("diameter").innerHTML = "";
         document.getElementById("circumference").innerHTML = "";
         document.getElementById("area").innerHTML = "";

         var radius; // string representation of the leg1
         var radiusfp; // floating point value of leg1

         var diameter; // string representation of the leg1
         var circumference; // floating point value of leg1
         var area;  // floating point hypotenuse
         var result; // displayable result

         // read in the legs as a string
         radius = document.getElementById("radius").value;
         circumference = document.getElementById("circumference").value;
         area = document.getElementById("area").value;

         // Convert numbers from strings to Floating Point
         radiusfp = parseFloat( radiusfp ); 
        

         // calculate the diamater
         diameter = calcDiameter(radiusfp);
         circumference = calcCirumference(radiusfp);
         area= calcArea(radiusfp)


         // display the hypotenuse
         document.getElementById("diameter").innerHTML = hypotenuse.toString();
         document.getElementById("circumference").innerHTML = hypotenuse.toString();
         document.getElementById("aera").innerHTML = hypotenuse.toString();


    }
}

  function calcDiameter (r)
  function calcCirumference (r)
  function area (r)
  // returns hypotenuse of a right triangle
  // square root of leg1 squared plus leg2 squared
  {
      return 2 * r;
  }
  
  function clearForm()
{
    document.getElementById("leg1").value = "";
    document.getElementById("leg1error").innerHTML = "";
    document.getElementById("leg2").value = "";
    document.getElementById("leg2error").innerHTML = "";
    document.getElementById("hypotenuse").innerHTML = "";
}
