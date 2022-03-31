// javascript

let count = 25

const countEl = document.getElementById('count')
const lengthEl = document.getElementById('length')
const volumeEl = document.getElementById('volume')
const massEl = document.getElementById('mass')



countEl.textContent = count


function length(){
    let meters = count * 3.2
    let feet =  count / 3.2
    lengthEl.textContent = `${count} meters = ${meters} feet | ${count} feet = ${feet} meters`
}

function volume(){
    let litres = count / 3.78
    let gallon = count * 3.78
    volumeEl.textContent = `${count} litres = ${litres.toFixed(3)} gallons | ${count} gallons = ${gallon} litres`
}

function mass(){
    let kgs = count * 2.2
    let pounds = count / 2.2
    massEl.textContent = `${count} kilos = ${kgs.toFixed(3)} pounds | ${count} pounds = ${pounds.toFixed(3)} kgs`
}

length()
volume()
mass()


