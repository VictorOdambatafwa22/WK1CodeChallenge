//Challenge 1: Student Grade Generator (Toy Problem)
//A > 79, B - 60 to 79, C -  59 to 49, D - 40 to 49, E - less 40.

let marks;// Declaring variable globally so as to be accessible through out the program
function Student_Grade(marks){// Function declaration having a single parameter

//Conditional statements
if(marks > 79 && marks <= 100 ){
    console.log("A");
}

else if(marks > 60 && marks <= 79 ){
    console.log("B");
}

else if(marks > 50 && marks <= 60 ){
    console.log("C");
}

else if(marks >= 40 && marks <= 50 ){
    console.log("D");
}

else if(marks >= 0 && marks <= 40 ){
    console.log("E");
}


else {
    console.log("Invalid entry");
}

}

Student_Grade(-1); // calling function and passing value as an argument to the function to be received by the parameter


