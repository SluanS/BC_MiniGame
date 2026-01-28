let characters = document.getElementsByClassName("char")
let boatPositions = document.querySelectorAll(".boat-position");
let boat = {
    direction: "left",
    freePlaces: 2,
    boatDiv: document.querySelector(".interactive-div")
}


document.addEventListener("click", (e) => {

    let target = e.target
    if (target.className === "char"){
        if (target.parentElement.className === "boat-position"){  
            removeFromBoat(target)
        }
        else if (target.parentElement.className === "position") {
            placeInBoat(target)
           
        }
        
    }
})

function placeInBoat(image){
    for (let i = 0; i < boatPositions.length; i++ ){
        bp = boatPositions[i]
        let ch = bp.children
        if (ch.length === 0){
            image.remove()
            bp.appendChild(image)
        }
    }
}

function removeFromBoat(image){
    if (boat.direction == "left"){
        allPositions = document.querySelectorAll(".position")
        for (let i = 0; i < 6; i++){
            let position = allPositions[i]
            if(position.children.length === 0){
                image.remove()
                position.appendChild(image)
                return
            }
        }
    }
    else if (boat.direction == "right"){
        allPositions = document.querySelectorAll(".position")
        for (let i = 6; i < 12; i++){
            let position = allPositions[i]
            if(position.children.length === 0){
                image.remove()
                position.appendChild(image)
                return
            }
        }
    }
}

function sendBoat(){
    let theresPassenger = false
    for (let i = 0; i < boatPositions.length; i++){
        let position = boatPositions[i]
        if (position.children.length > 0){
            theresPassenger = true
        }
    }
    if (boat.direction === "left"){
        boat.direction = "right"
        boat.boatDiv.style.left = "900px"
        document.querySelector(".pointer-left").style.display =  "inline-block"
        document.querySelector(".pointer-right").style.display =  "none"

    }
    else{
        boat.direction = "left"
        boat.boatDiv.style.left = "500px"
        document.querySelector(".pointer-left").style.display =  "none"
        document.querySelector(".pointer-right").style.display =   "inline-block"
    }
    return theresPassenger;
}



