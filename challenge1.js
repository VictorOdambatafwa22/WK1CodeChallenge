//Challenge 1: Student Grade Generator (Toy Problem)
//A > 79, B - 60 to 79, C -  59 to 49, D - 40 to 49, E - less 40.

let marks;
function Student_Grade(marks){


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

else {
    console.log("E");
}

}

Student_Grade(90);


