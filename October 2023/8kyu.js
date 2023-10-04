// Write function bmi that calculates body mass index (bmi = weight / height2).

// if bmi <= 18.5 return "Underweight"

// if bmi <= 25.0 return "Normal"

// if bmi <= 30.0 return "Overweight"

// if bmi > 30 return "Obese"

function bmi(weight, height) {
    if (bmi <= 18.5){
        return "Underweight"
    } else if (bmi <= 25.0) {
        return "Normal"
    } else if (bmi <= 25.0){
        return "Normal"
    } else if (bmi <= 30.0){
        return "Overweight"
    } else {
        return "Obese"
    }
}

// Alex just got a new hula hoop, he loves it but feels discouraged because his little brother is better than him

// Write a program where Alex can input (n) how many times the hoop goes round and it will return him an encouraging message :)

// If Alex gets 10 or more hoops, return the string "Great, now move on to tricks".
// If he doesn't get 10 hoops, return the string "Keep at it until you get it".

function encouragement(n){
    return n>=10 ? "Great, now move on to tricks" : "Keep at it until you get it";
}