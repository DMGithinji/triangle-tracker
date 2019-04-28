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
function calculate (){
    var toRadians = function (degrees){
        return (degrees * Math.PI / 180);
    }
    var toAngle = function (radians){
       return (180 * radians / Math.PI);
    }

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
    //First, determine missing angle
    //Then calculate its angle using a function
    var aasAngle = function(angle1,angle2){
        return (180-(angle1+angle2));
    }

    //Then determine missing sides
    //Then determine the measure of the missing sides using sine rule
    var aasSides = function(knownSide,knownSideAngle,unknownSideAngle){
        return ((((Math.sin(toRadians(unknownSideAngle)))/(Math.sin( toRadians(knownSideAngle))))*knownSide));
    }
    
if (sides.length === 1){
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


//Scenario3 - 2 Sides, 1 Angle (SSA)
if (sides.length === 2){

    //Here there are two possible scenarios that might determine the formula to be used
    
    //1. When the missing side corresponds to the given angle
    //The missing side is first  determined using Law of Cosines
    var ssaSide1 = function(side2, side3, angle1){
        return Math.sqrt( ((side2*side2) + (side3*side3)) - (2*side2*side3 *(Math.cos(toRadians(angle1)))) );
    }
    //Then missing 2 angles determined using sine rule
    var ssaAngles = function(knownAngleSide, knownAngle, unknownAngleSide){
        return toAngle(  Math.asin( Math.sin(toRadians(knownAngle)) * unknownAngleSide / knownAngleSide) );
    }

    if ((a === 0) && (A !== 0)) {
        a = ssaSide1(b, c, A);
        B = ssaAngles(a,A,b);
        C = ssaAngles(a,A,c);
    }
    else if ((b === 0) && (B !== 0)){
        b = ssaSide1(a,b,C);
        C = ssaAngles(b,B,c);
        A = ssaAngles(b,B,a);
    }
    else if ((c === 0) && (C !== 0)){
        console.log(a,b,c);
        c = ssaSide1(a,b,C);
        A = ssaAngles(c,C,a);
        B = ssaAngles(c,C,b);

    }


}
   
console.log(a,b,c);
console.log(A,B,C);
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