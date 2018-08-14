let newName = decodeURIComponent(window.location.search);
newName = newName.substring(1);
finalName = newName.replace('para1=','');

const finalNamePic = `
  <h1 id= "playName">${finalName}</h1>`
document.querySelector('#playName').innerHTML = finalNamePic

const finalNameScore = `
  <h3 id= "playScore">${finalName}'s Score:</h3>`
document.querySelector('#playScore').innerHTML = finalNameScore

let compScore = 0
let userScore = 0
let tie = 0

document.onkeyup = function play(event) {
  let gameChoices = ['r', 'p', 's']
  let compChoice = gameChoices[Math.floor(Math.random() * 3)]
  let userChoice = event.key
  
  let result = null
  let message = ''
  let playImg = document.getElementById('playPic');

  console.log(compChoice)
  switch (compChoice) {
    case 'r':
      compRock()
      break
    case 'p':
      compPaper()
      break
    case 's':
      compScissors()
      break
  }

  switch (userChoice) {
    case 'r':
      result = (compChoice === 'r' ? 0 : (compChoice === 'p' ? -1 : 1))
      playRock()
      break
    case 'p':
      result = (compChoice === 'p' ? 0 : (compChoice === 's' ? -1 : 1))
      playPaper()
      break
    case 's':
      result = (compChoice === 's' ? 0 : (compChoice === 'r' ? -1 : 1))
      playScissors()
      break
    default:
      result = null
      break
  }

  switch (result) {
    case 0:
      tie++
      message = `It's a tie!`
      break
    case -1:
      compScore++
      message = `You lose!`
      break
    case 1:
      userScore++
      message = `You Win!`
      break
    default:
      message = `Please choose a valid key!`
      break
  }

  let status = `
  <h1 id= "status">${message}</h1>`
  document.querySelector('#status').innerHTML = status

  let computerScore = `
  <h3 id= "compScore">Computer's Score: ${compScore}</h3>`
  document.querySelector('#compScore').innerHTML = computerScore

  let playerScore = `
  <h3 id= "playScore">Player's Score: ${userScore}</h3>`
  document.querySelector('#playScore').innerHTML = playerScore

  let ties = `
  <h3 id= "playScore">Ties: ${tie}</h3>`
  document.querySelector('#tie').innerHTML = ties

  function playRock (){
    document.querySelector('#playPic').src = "images/rock-player.png";
  }

  function playPaper (){
    document.querySelector('#playPic').src = "images/paper-player.png";
  }

  function playScissors (){
    document.querySelector('#playPic').src = "images/scissors-player.png";
  }

  function compRock (){
    document.querySelector('#compPic').src = "images/rock-computer.png";
  }

  function compPaper (){
    document.querySelector('#compPic').src = "images/paper-computer.png";
  }

  function compScissors (){
    document.querySelector('#compPic').src = "images/scissors-computer.png";
  }

}



