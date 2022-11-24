import dogsObject from '/dog.js'
import dogs from '/data.js'

const nopeBtn = document.getElementById("icon-cross")
const likeBtn = document.getElementById("icon-heart")

const nopeBadge = document.getElementById("badge-nope")
const likeBadge = document.getElementById("badge-like")

const userProfile = document.getElementById('main-container')

let usersOrder = [0, 1, 2, 0, 1, 2, 0, 1, 2]

function getUserCard(){
  const nextUserArray = dogs[usersOrder.shift()]
  return nextUserArray ? new dogsObject(nextUserArray) : {}
}

function renderNopeBage(){
    userProfile.innerHTML += userCard.getNopeBage()
}

function renderLikeBage(){
    userProfile.innerHTML += userCard.getLikeBage()
}

nopeBtn.addEventListener('click', function nopeBtnClick(){
    renderNopeBage()
    userCard = getUserCard()
    setTimeout(()=>render(), 1500)
})

likeBtn.addEventListener('click', function likeBtnClick(){
    renderLikeBage()
    userCard = getUserCard()
    setTimeout(()=>render(), 1500)
})

function render(){
    userProfile.innerHTML = userCard.getUserHtml()
}

let userCard = getUserCard()
render()