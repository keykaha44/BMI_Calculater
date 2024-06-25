function bmiCalculater(weight, height) {
    var bmi = (weight / (Math.pow(height, 2)))
    return Math.round(bmi)    
}

var bmi = bmiCalculater(80, 1.75)
console.log(bmi)