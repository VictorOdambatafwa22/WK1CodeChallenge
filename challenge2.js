//Challenge 2: Speed Detector (Toy Problem)

let speed;
let speed_limit=70;
let demerit_Points;

function Car_speed(speed){

 demerit_Points=(speed-speed_limit)/5

if(demerit_Points >= 12 ){
    console.log("License suspended");
}


else {
    console.log(demerit_Points);
}

}

Car_speed(130);

