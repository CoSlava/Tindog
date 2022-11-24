import dogs from '/data.js'

class dogsObjects{
    constructor(data){
    Object.assign(this, data)
    }
    
    hasBeenSwiped = false
    hasBeenLiked = false
    
    getUserHtml(){
        const {name, avatar, age, bio} = this
        return `<img src="${avatar}">
                <h2>${name}, ${age}</h2>
                <p>${bio}?</p>`
    }
    
    getNopeBage(){
        return `<img class="badge-nope" id="badge-nope" src="/images/badge-nope.png">`
    }
    
    getLikeBage(){
        return `<img class="badge-like " id="badge-like" src="/images/badge-like.png">`
    }
}

export default dogsObjects