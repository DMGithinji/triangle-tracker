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
        calculate();
        console.log("Calculating");
        document.getElementById("warning1").innerHTML = triangleType1 + " " + triangleType2;
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

    //2. When the unknown side doesn't correspond with given angle
    //Find given angle of the input values
    //Then use for sine rule to detemine missing angle with corresponding given side
    //Then find third angle given all angles add to 180 degrees
    //Then use third angle to find missing side
    else if (A !== 0){
        if (b !== 0){
            B = ssaAngles(a,A,b);
            C = aasAngle(A,B);
            c = aasSides(b,B,C);
        }
        else if(c !== 0){
            C = ssaAngles(a,A,c);
            B = aasAngle(A,C);
            b = aasSides(c,C,B);
        }
    }
    else if (B !== 0){
        if (a !== 0){
            A = ssaAngles(b,B,a);
            C = aasAngle(B,A);
            c = aasSides(a,A,C);
        }
        else if(c !== 0){
            C = ssaAngles(b,B,c);
            A = aasAngle(C,B);
            a = aasSides(c,C,A);
        }
    }

    else if (C !== 0){
        if (a !== 0){
            A = ssaAngles(c,C,a);
            B = aasAngle(C,A);
            b = aasSides(a,A,B);
        }
        else if (b !== 0){
            B = ssaAngles(c,C,b);
            A = aasAngle(C,B);
            a = aasSides(b,B,A);
        }
    }
}
   
console.log(a,b,c);
console.log(A,B,C);

document.getElementById("a").innerHTML = a;
document.getElementById("b").innerHTML = b;
document.getElementById("c").innerHTML = c;

/*Solving for other trianfgle parameters*/

//Output type of triangle based on sides
if (a ==b==c){
document.getElementById("A").innerHTML = A;
document.getElementById("B").innerHTML = B;
document.getElementById("C").innerHTML = C;


/*Solving for other trianfgle parameters*/

//Output type of triangle based on sides
if (a == b && b==c){
    triangleType1 = "Equilateral";
}
else if (a == b || a ==c || b ==c){
    triangleType1 = "Isosceles";
}
else{
    triangleType1 = "Scalene";
}

//Output type of triangle based on angles
if ((A > 90) || (B > 90) || (C > 90)){
    triangleType2 = "btuse";
}
else if ((A === 90) || (B === 90) || (C === 90)){
    triangleType2 = "right-angle";
}
else {
    triangleType2 = "acute";
}
console.log("Triangle Type is " + triangleType1 + " " + triangleType2 );

//Calculate and return perimeter
perimeter = a+b+c;
console.log("Perimeter: " + perimeter);
document.getElementById("perimeter").innerHTML = perimeter;


//Calculate return area
semiPerimeter = perimeter/2;
area = Math.sqrt( semiPerimeter*(semiPerimeter-a)*(semiPerimeter-b)*(semiPerimeter-c) );
console.log("Area is: " + area);
document.getElementById("area").innerHTML = area;


//Calculate return h1, h2, h3
var traingleHeight = function(T,side){
    return 2*T/side;
}
ha=traingleHeight(area, a);
hb=traingleHeight(area, b);
hc=traingleHeight(area, c);

document.getElementById("ha").innerHTML = ha;
document.getElementById("hb").innerHTML = hb;
document.getElementById("hc").innerHTML = hc;



console.log("Heights = " + ha, hb, hc);

//Calculate return m1, m2, m3
var medians = function(side1,side2,side3){
    return (Math.sqrt(  2*side2*side2 + 2*side3*side3 -side1*side1 ))/2
}
ma=medians(a,b,c);
mb=medians(b,a,c);
mc=medians(c,b,a);

console.log("Medians = " + ma, mb, mc);
document.getElementById("ma").innerHTML = ma;
document.getElementById("mb").innerHTML = mb;
document.getElementById("mc").innerHTML = mc;

//Calculate return r
innerRadius = area/semiPerimeter;
console.log("Inner Radius is: " + innerRadius);
document.getElementById("innerRadius").innerHTML = innerRadius;


//Calculate return R
outerRadius = a/(2* Math.sin(toRadians(A)) );
console.log("Outer Radius is: " + outerRadius);
document.getElementById("outerRadius").innerHTML = outerRadius;

}