

let numberOfPeopleDiv = document.querySelector('#numberOfPeople')
let perPersonTotal = document.querySelector('#perPersonTotal')

let tipPercentage = document.querySelector('#tipInput').value / 100
let realBill = Number(document.querySelector('#billTotalInput'))
let totalTip = tipPercentage * realBill

let fullTotal = Number(totalTip + realBill)



let numberOfPeople = Number(numberOfPeopleDiv.textContent)

const calculateBill = () => {

  let realBill = Number(billTotalInput.value)
 
  let tipPercentage = tipInput.value / 100

  let totalTip = tipPercentage * realBill

  let fullTotal = Number(totalTip + realBill)

  
  const totalPerPerson = Math.floor(fullTotal / numberOfPeople) 

  let newPerPersonTotal = document.querySelector('#perPersonTotal').innerHTML = totalPerPerson

}

const increasePeople = () => {

  numberOfPeople += 1

  numberOfPeopleDiv.innerText = numberOfPeople

  calculateBill()
}

const decreasePeople = () => {

  if (numberOfPeople <= 1) {

    return numberOfPeople
  }
  numberOfPeople -= 1

  numberOfPeopleDiv.innerText = numberOfPeople

  calculateBill()
}
 
