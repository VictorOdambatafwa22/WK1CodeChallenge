//Challenge 2: Speed Detector (Toy Problem)

let speed;// Declaring variables globally
let speed_limit=70;
let demerit_Points;

function Car_speed(speed){// Function declaration with the parameter

 demerit_Points=(speed-speed_limit)/5

if(demerit_Points >= 12 ){// Conditional statements
    console.log("License suspended");
}


else {
    console.log(demerit_Points);
}

}

Car_speed(80);// Calling function and passing value as an argument to be received by the parameter.

