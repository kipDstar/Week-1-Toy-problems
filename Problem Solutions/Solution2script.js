// speed detector
let speedOfCar = Number(prompt("Enter speed of vehicle: "));

function speedLimitChecker(speedOfCar) {
    switch (true) {
        case speedOfCar < 70:
            console.log("OK")
            break;
        case speedOfCar > 70:
            let demeritPoints = 0;
            for (let speed = 71; speed <= speedOfCar; speed += 5) {
                demeritPoints++;
            }
            if (demeritPoints > 12) {
                console.log("License suspended!");                
            } else {
                console.log(`Points: ${demeritPoints}`);                
            }
            break;
        default:
            console.log("Invalid speed: Please enter a valid speed!");
            break;
    }
     
}
speedLimitChecker(speedOfCar);