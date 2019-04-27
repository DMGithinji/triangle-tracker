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
    a = sideA;
    sides.push(sideA);
    console.log(sides);
    checker();
}
function sidesAppendB(sideB){
    b = sideB;
    sides.push(sideB);
    console.log(sides);
    checker();
}
function sidesAppendC(sideC){
    c = sideC;
    sides.push(sideC);
    console.log(sides);
    checker();
}

function anglesAppendA(angleA){
    A = angleA;
    angles.push(angleA);
    console.log(angles);
    checker();
}
function anglesAppendB(angleB){
    B = angleB;
    angles.push(angleB);
    console.log(angles);
    checker();
}
function anglesAppendC(angleC){
    C = angleC;
    angles.push(angleC);
    console.log(angles);
    checker();
}

/*Checking for general triangle*/

function checker(){
    console.log("Sum of inputs is: " + (angles.length) + (sides.length));
    console.log("Sum of input sides is: " + (sides.length));
    console.log("First input angle: " + parseInt(angles[0]));
    console.log("Second input angle: " + parseInt(angles[1]));
    console.log("Sum of angles: " + (parseInt(angles[0]) + parseInt(angles[1])));

    //Check if inputs are exactly 3
    if ((angles.length) + (sides.length) !== 3){
        document.getElementById("warning1").innerHTML = "Enter exactly 3 inputs";
    }

    //Check if of the three inputs, atleast one side has been included
    else if ( sides.length === 0){
        document.getElementById("warning1").innerHTML = "Enter the length of atleast one side";
    }

    //Then check for solvability based on input length
    else if ( (a+b < c || a+c < b || b+c < a)  && (sides.length === 3) ){
        document.getElementById("warning1").innerHTML = "The given values don't make a solvable triangle.<br>The sum of any two sides of a triangle must be greater than or equal to the remaining side.<br>Please clear and try again.";
    }

    //Then check for solvability based on given angles
    else if ( parseInt(angles[0]) + parseInt(angles[1]) >= 180 ){
        document.getElementById("warning1").innerHTML = "The given values don't make a solvable triangle.<br>The total degrees of all interior angles is always 180°.<br>Please clear and try again.";
    }
    
    //If all is good, calculate
    else{
        document.getElementById("warning1").innerHTML = "Calculate";
    }
}





/*Since it is solvable, calculate for the missing parameters*/
/*Starting with missing sides and angles
The scenarios can be categorised into three in general*/

//Scenario1 - All sides entered (SSS)
//The formula to determine angles on this scenario is ...



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