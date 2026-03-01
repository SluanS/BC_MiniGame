let boat = {
    direction: "left",
    boatDiv: document.querySelector(".interactive-div")
}
let allPositions = document.querySelectorAll(".position")
let boatPositions = document.querySelectorAll(".boat-position")
let gameOver = false;

function placeInBoat(image){
    let parentId = image.parentElement.id
    let n = parentId.replace(/[^0-9]/g, "")
    const HALF = allPositions.length / 2

    if (n > HALF && boat.direction === "left") return

    if(n <= HALF && boat.direction === "right") return

    for (let i = 0; i < boatPositions.length; i++ ){
        let bp = boatPositions[i]
        let ch = bp.children
        if (ch.length === 0){
            image.remove()
            bp.appendChild(image)
        }
    }
}

function removeFromBoat(image){
    if (boat.direction === "left"){
        for (let i = 0; i < 6; i++){
            let position = allPositions[i]
            if(position.children.length === 1){
                image.remove()
                position.appendChild(image)
                return
            }
        }
    }
    else if (boat.direction == "right"){
        for (let i = 6; i < 12; i++){
            let position = allPositions[i]
            if(position.children.length === 1){
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
    if (theresPassenger){
        let rightId = document.querySelector("#interactive-div-right")
        let leftId = document.querySelector("#interactive-div-left")
        if (boat.direction === "left"){
            boat.direction = "right"
            let leftIdChild = leftId.children
            while (leftIdChild.length > 0){
                let node = leftIdChild[0]
                rightId.appendChild(node)
            }
            gameRules()

        }
        else if(boat.direction === "right"){
            boat.direction = "left"
            let rightIdChild = rightId.children
            while (rightIdChild.length > 0){
                let node = rightIdChild[0]
                leftId.appendChild(node)
            }
            
            gameRules()
        }
    }


}

function cleanBoat(){
    let bps = document.querySelectorAll(".boat-position")
    for (let i = 0; i < bps.length; i++){
        let innerImage = bps[i].children 
        if (innerImage.length > 0){
            removeFromBoat(innerImage[0]) 
        }
    } 
}

function gameRules(){
    let caniRight = 0;
    let caniLeft = 0;
    let missRight = 0;
    let missLeft = 0;
    let victory;
    for (let i = 0; i < allPositions.length; i++){
        let childrens = allPositions[i].children
        for (let c = 0; c < childrens.length; c++)
            if (i < 6){ 
                if (childrens[c].className === "cani"){
                    caniLeft += 1;
                }
                else if (childrens[c].className === "miss"){
                    missLeft += 1;
                }
            } else{
                   if (childrens[c].className === "cani"){
                    caniRight += 1;
                }
                else if (childrens[c].className === "miss"){
                    missRight += 1;
                }
            }
    }
    for (let bp = 0; bp < boatPositions.length; ++bp){
        let inBoat = boatPositions[bp].children
        if (inBoat.length > 0){
            if (boat.direction === "left"){
                if (inBoat[0].className === "cani"){
                    caniLeft += 1;
                } else if(inBoat[0].className === "miss"){
                    missLeft += 1;
                }
            }
            else if(boat.direction === "right"){
                  if (inBoat[0].className === "cani"){
                    caniRight += 1;
                } else if(inBoat[0].className === "miss"){
                    missRight += 1;
                }
            }
        }
    }
    
    let charatersInLeft = missLeft + caniLeft;
    let charatersInRight = missRight + caniRight;
    updateCounter(charatersInRight)
    if (missLeft > 0 && missRight > 0){
        if(charatersInLeft > 0 && charatersInRight > 0){
        if (missLeft < caniLeft || missRight < caniRight){
            gameOver = true
            boat.direction = "stopped"

        }
    }
    }
   
    if (gameOver){
        victory = false
        ShowgameOver(victory)

    } else if(charatersInRight === 6){
        victory = true
        boat.direction = "stopped"
        gameOver = true
        ShowgameOver(victory)
    }
}

function updateCounter(number){
    document.querySelector(".contador").innerHTML = `${number}/6`
}

function interactionCharInfo(){
    let charInfoElement = document.querySelector(".base-char-info-div")

    if (charInfoElement.style.display === "none"){
        charInfoElement.style.display = "flex" 
    }
     else if(charInfoElement.style.display === ""){
        charInfoElement.style.display = "flex" 
    }
    else{
        charInfoElement.style.display = "none" 
    }
}

function interactionMenu(){
    let menuElement = document.querySelector(".menu-base-div")
    if (menuElement.style.display === "none"){
        menuElement.style.display = "flex"   
    }
    else if(menuElement.style.display === ""){
        menuElement.style.display = "flex"      
    }
    else{
        menuElement.style.display = "none" 
    }
}

function closeWindow(){
    document.querySelector(".overlay-go").style.display = "none"
}

function resetGame(){
    location.reload()
}

function interactionGuide(){
    let guideStatus = document.querySelector(".guide")
    if(guideStatus.style.display === "none"){
        guideStatus.style.display = "block"
        
    } else if(guideStatus.style.display === ""){
        guideStatus.style.display = "block"
    }
    else{
        guideStatus.style.display = "none"
    }
}

function checkScreenWidth(){
    let screenWidht = window.innerWidth

    let gameBackground = document.querySelector(".background")
    let rotationBackground = document.querySelector(".rotation-screen")
    if (screenWidht > 632){
        gameBackground.style.display = "block"
        rotationBackground.style.display = "none"
    }
    else{
        rotationBackground.style.display = "block";
        gameBackground.style.display = "none";
} 
}

function ShowgameOver(victory){

    if (victory){
        let gameOverh1 = document.querySelector(".game-over h1")
        gameOverh1.innerHTML = "Você conseguiu!"
        gameOverh1.style.color = "green"
        gameOverh1.style.fontSize = "55px;"
        document.querySelector(".game-over h2").innerHTML = "Todos atrevessaram para a outra margem"
        document.querySelector(".game-over h3").innerHTML = "Deseja tentar mais uma vez?"
    }
    else{
        document.querySelector(".main-header").innerHTML = "Game Over"
    }
    document.querySelector(".controll").style.display = "none"
    document.querySelector(".overlay-go").style.display = "flex"

}

addEventListener("keydown", (e) => {
    
    if (e.key === "ArrowRight" || e.key=== "ArrowLeft"){
        sendBoat()
    }
    if (e.key === " "){
        cleanBoat()
    }

    let pressed = e.key
    if (!gameOver){
        if (parseInt(pressed) > 6){
                return
        }
        for (let i = 0; i < allPositions.length; i++){
            let n = allPositions[i].id.replace(/[^0-9]/g, "")
            if (boat.direction === "right"){
                pressed = parseInt(e.key) + 6;
            }
            if (pressed == n){
                let children = allPositions[i].children
                for (let j = 0; j < children.length;j++){
                    if (children[j].className != "tecla"){
                        placeInBoat(children[j])    
                    }
                }
            }
        }
    }
}
)
addEventListener("click", (e) => {
        let target = e.target
        if (boat.direction !== "stopped"){
            if (target.className === "cani" || target.className === "miss"){
                if (target.parentElement.className === "boat-position"){  
                    removeFromBoat(target)
                }
                else if (target.parentElement.className === "position") {
                    placeInBoat(target)
                }
            }
        }
        
    let content = 0;
    let classTarget = e.target.className
    let idTarget;
    if (e.target.parentElement.className === "box"){
         idTarget = e.target.parentElement.id
    }
    else if (classTarget === "box"){
         idTarget = e.target.id
    }
    if (idTarget !== undefined){
        let elementById = document.querySelector(`#${idTarget}`)
        let parent = elementById.parentElement
        let childrens = parent.children
        for (let i = 0; i < childrens.length; i++){
            if (childrens[i].className != "box"){
                content = childrens[i]
                break
            }
        }
        if (content != 0){
            if (content.style.height != "auto"){
                content.style.height = "auto"
                content.style.display = "block"
            } else{
                content.style.height = "0px"
                content.style.display = "none"
            }
        }
    }
})


setInterval(checkScreenWidth, 500)