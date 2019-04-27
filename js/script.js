var sides = [];
var angles = [];
var a = 0;
var b = 0;
var c = 0;
var A = 0;
var B = 0;
var C = 0;

//Accept inputs from html page

function sidesAppendA(sideA){
    a = parseInt(sideA);
    sides.push(a);
    console.log(a);
    checker();
}
function sidesAppendB(sideB){
    b = parseInt(sideB);
    sides.push(b);
    console.log(b);
    checker();
}
function sidesAppendC(sideC){
    c = parseInt(sideC);
    sides.push(c);
    console.log(c);
    checker();
}

function anglesAppendA(angleA){
    A = parseInt(angleA);
    angles.push(A);
    console.log(A);
    checker();
}
function anglesAppendB(angleB){
    B = parseInt(angleB);
    angles.push(B);
    console.log(B);
    checker();
}
function anglesAppendC(angleC){
    C = parseInt(angleC);
    angles.push(C);
    console.log(C);
    checker();
}

/*Checking for general triangle*/

function checker(){
    console.log("Sum of inputs is: " + (angles.length) + (sides.length));
    console.log("Sum of input sides is: " + (sides.length));
    console.log("First input angle: " + angles[0]);
    console.log("Second input angle: " + angles[1]);
    console.log("Sum of angles: " + (angles[0] + angles[1]));
    console.log(a+b);

    //Check if inputs are exactly 3
    if ((angles.length) + (sides.length) !== 3){
        document.getElementById("warning1").innerHTML = "Enter exactly 3 inputs";
    }

    //Check if of the three inputs, atleast one side has been included
    else if ( sides.length === 0){
        document.getElementById("warning1").innerHTML = "Enter the length of atleast one side";
    }

    //Then check for solvability based on input length
    else if ( (((a+b) <= c) || ((a+c) <= b) || ((b+c) <= a))  && (sides.length === 3) ){
        document.getElementById("warning1").innerHTML = "The given values don't make a solvable triangle.<br>The sum of any two sides of a triangle must be greater than or equal to the remaining side.<br>Please clear and try again.";
    }

    //Then check for solvability based on given angles
    else if ( parseInt(angles[0]) + parseInt(angles[1]) >= 180 ){
        document.getElementById("warning1").innerHTML = "The given values don't make a solvable triangle.<br>The total degrees of all interior angles is always 180°.<br>Please clear and try again.";
    }

    //If all is good, calculate
    else{
        document.getElementById("warning1").innerHTML = "Calculate";
        calculate();
    }
}





/*Since it is solvable, calculate for the missing parameters*/

var toRadians = function (degrees){
    return (degrees * Math.PI / 180);
}
var toAngle = function (radians){
   return (180 * radians / Math.PI);
}


function calculate (){

//Scenario1 - All sides entered (SSS)

if (sides.length === 3){
   var sss = function (side1, side2, side3){
       return toAngle (Math.acos( ((side2*side2) + (side3*side3) - (side1*side1))/(2*side2*side3) ) ).toFixed(4);
   }
   A = sss(a,b,c);
   B = sss(b,a,c);
   C = sss(c,a,b);

   console.log(A, B, C);
}

//Scenario2 - 2 Angles and 1 Side (AAS)

if (sides.length === 1){

    //First, determine missing angle
    //Then calculate its angle using a function

    var aasAngle = function(angle1,angle2){
        return (180-(angle1+angle2));
    }

    if (A === 0){
        A = aasAngle(B,C);
    }
    else if (B === 0){
        B = aasAngle(A,C);
    }    
    else if (C === 0){
        C = aasAngle(A,B);
    }
    console.log(A,B,C);

    //Then determine missing sides
    //Then determine the measure of the missing sides
    
    var aasSides = function(knownSide,knownSideAngle,unknownSideAngle){
        return((((Math.sin(toRadians(unknownSideAngle)))/(Math.sin( toRadians(knownSideAngle))))*knownSide)).toFixed(4);
    }
    if (a !== 0){
        b = aasSides(a,A,B);
        c = aasSides(a,A,C);
    }
    if (b !== 0){
        a = aasSides(b,B,A);
        c = aasSides(b,B,C); 
    }        
    if (c !== 0){
        b = aasSides(c,C,B);
        a = aasSides(c,C,A);
    }
    console.log(a,b,c);

}


//Scenario2 - 2 Sides, 1 Angle (SSA)
//The formula for determining side3, is .... and angles is ...
//Possible scenarios are 9, given (a,b,A),(a,c,A),(a,b,B),(a,c,B),(a,b,C),(a,c,C),(b,c,A),(b,c,B),(b,c,C)
//To simplify, determine missing side and calculate specifically for it
//Then determine available angle, so as to calculate specifically for 2 missing angles


//Scenario3 - 1 Side, 2 Angles (ASA)
//The formula for determining angle 3 is (180-angle A and angle B) and formula for side 2 and three is .......
//Determine missing angle, and calculate for it
//Then determine available side, so as to specifically calculate for 2 missing sides 



/*Solving for other trianfgle parameters*/

//Output type of triangle based on sides

//Output type of triangle based on angles

//Calculate and return perimeter

//Calculate return area

//Calculate return h1, h2, h3

//Calculate return m1, m2, m3

//Calculate return r

//Calculate return R


}