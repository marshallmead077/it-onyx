/* The following should be a file in your js or script folder */

$( "#CircleForm" ).validate({

});

function displayCircle() {
    // if the form is valid, then make the calculations
    if ($("#CircleForm").valid()) {
        
         document.getElementById("diameter").innerHTML = "";

         var radius; // string representation of the radius
         var radius1fp; // floating point value of radius
         
         var diameter;  // floating point diameter
         var circumference;  // floating point circumference
         var area;  // floating point area
         var result; // displayable result

         // read in the legs as a string
         radius = document.getElementById("radius").value;
         circumference = document.getElementById("circumference").value;
         area = document.getElementById("area").value;

         // Convert numbers from strings to Floating Point
         radiusfp = parseFloat( radius ); 
         

         // calculate the diameter
         diameter = calcDiameter(radius);

          // calculate the circumference
          circumference = calcCircumference(radius);

           // calculate the area
         area = calcArea(radius);


         // display the diameter
         document.getElementById("diameter").innerHTML = diameter.toString();

         // display the circumference
         document.getElementById("circumference").innerHTML = circumference.toString();

         // display the diameter
         document.getElementById("area").innerHTML = area.toString();
         
    }
}

  function calcDiameter (radius)
  // returns the diameter
  // 2 times the radius
  {
      return 2 * radius;
  }

  function calcCircumference (radius)
  // returns the circumeference 
  // 2 times the radius
  {
      return 2 * Math.PI * radius;
  }

  function calcArea (radius)
  // returns the area
  // 2 times the radius
  {
      return Math.PI * radius * radius;
  }
  
  function clearForm() 
{
    document.getElementById("radius").value = "";
    document.getElementById("radiuserror").innerHTML = "";
    document.getElementById("circumference").innerHTML = "";
    document.getElementById("area").innerHTML = "";
    document.getElementById("diameter").innerHTML = "";
   
}

