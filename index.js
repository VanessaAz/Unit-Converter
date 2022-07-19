/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const lengthStr = document.getElementById('length')
const volumeStr = document.getElementById('volume')
const massStr = document.getElementById('mass')
const inputBox = document.getElementById('number')
const convertBtn = document.getElementById('convertor')


convertBtn.addEventListener('click', function(){
    let input = inputBox.value
    
    let lengthString = `${input} meters = ${(input * 3.281).toFixed(3)} feet | ${input} feet = ${(input / 3.281).toFixed(3)} meters `

    let volumeString = `${input} liters = ${(input * 0.264).toFixed(3)} gallons | ${input} gallons = ${(input / 0.264).toFixed(3)} liters `

    let massString = `${input} kilos = ${(input * 2.204).toFixed(3)} pounds | ${input} pounds = ${(input / 2.204).toFixed(3)} kilos `
    
    lengthStr.innerText = lengthString
    volumeStr.innerText = volumeString
    massStr.innerText = massString
})