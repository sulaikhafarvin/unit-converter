
let convertBtnEl = document.getElementById("convert-btn")
let resetBtnEl = document.getElementById("reset-btn")
let inputEl = document.getElementById("input-text")
let lengthEl = document.getElementById("length-el")
let volumeEl = document.getElementById("volume-el")
let massEl = document.getElementById("mass-el")

const meterToFeet =  3.281
const literToGallon =  0.264
const kiloToPound =  2.204

convertBtnEl.addEventListener("click" , function() {
    convertLength()
    convertVolume()
    convertMass()   
})

resetBtnEl.addEventListener("click" , function(){
    inputEl.value = ""
    
    lengthEl.textContent = `0 meters = 0.000 feet | 
     0 feet = 0.000 meters  ` 
     
     volumeEl.textContent = 
    `0 liters = 0.000 gallons |
     0 gallons = 0.000 liters `
     
     massEl.textContent = `0 kilos = 0.000 pounds | 
     0 pounds = 0.000 kilos  ` 
})

function convertLength() {
     
    let baseValue = inputEl.value 
    lengthEl.textContent = `${baseValue} meters = ${(baseValue * meterToFeet).toFixed(3)} feet | 
     ${baseValue} feet = ${(baseValue / meterToFeet).toFixed(3)} meters  ` 
} 

function convertVolume() {
     
    let baseValue = inputEl.value 
    volumeEl.textContent = 
    `${baseValue} liters = ${(baseValue * literToGallon).toFixed(3)} gallons |
     ${baseValue} gallons = ${(baseValue / literToGallon).toFixed(3)} liters `     
} 

function convertMass() {
     
    let baseValue = inputEl.value 
    massEl.textContent = `${baseValue} kilos = ${(baseValue * kiloToPound).toFixed(3)} pounds | 
     ${baseValue} pounds = ${(baseValue / kiloToPound).toFixed(3)} kilos  `    
     
}

 






