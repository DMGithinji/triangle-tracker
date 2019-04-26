//Accept inputs from html page

sideA = parseInt(myform.sideA.value);
sideB = parseInt(myform.sideB.value);   
sideC = parseInt(myform.sideC.value);    
angleA = parseInt(myform.angleA.value);
angleB = parseInt(myform.angleB.value); 
angleC = parseInt(myform.angleC.value);


/*Checking for general triangle*/

//Check if inputs are exactly 3

//Check if of the three inputs, atleast one side has been included

//Then check for solvability given the fed inputs





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