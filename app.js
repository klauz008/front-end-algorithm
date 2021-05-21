// A function that converts Degree Farenheit to Degree Celsius

function convertFahrToCelsius (degF) {
    let actualDegF = Number(degF)
    let degC = (actualDegF - 32) * 5/9;
    result = degC
    updatedTemp = degC.toFixed(4)
    
}
convertFahrToCelsius("25")
console.log(updatedTemp)
