let boatPositions = document.querySelectorAll(".boat-position");
let boat = {
    direction: "left",
    freePlaces: 2,
    boatDiv: document.querySelector(".interactive-div")
}
let gameOver = false;

document.addEventListener("click", (e) => {

    let target = e.target
    if (boat.direction != "stoped"){
        if (target.className === "cani" || target.className === "miss"){
            if (target.parentElement.className === "boat-position"){  
                removeFromBoat(target)
            }
            else if (target.parentElement.className === "position") {
                placeInBoat(target)
            }
        }
    }
}
)

function placeInBoat(image){
    let parentId = image.parentElement.id
    let n = parentId.replace(/[^0-9]/g, "")

    if (n > 6 && boat.direction === "left") return

    if(n <= 6 && boat.direction === "right") return

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
            if(position.children.length === 1){
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
    bps = document.querySelectorAll(".boat-position")
    for (let i = 0; i < bps.length; i++){
        innerImage = bps[i].children 
        if (innerImage.length > 0){
            removeFromBoat(innerImage[0]) 
        }
    } 
}

function gameRules(){
    let caniInRight = 0;
    let caniInLeft = 0;
    let missInRight = 0;
    let missInLeft = 0;
    let allPositions = document.querySelectorAll(".position")
    let boatPositions = document.querySelectorAll(".boat-position")
    for (let i = 0; i < allPositions.length; i++){
        childrens = allPositions[i].children
        for (let c = 0; c < childrens.length; c++)
            if (i < 6){ 
                if (childrens[c].className === "cani"){
                    caniInLeft += 1;
                }
                else if (childrens[c].className === "miss"){
                    missInLeft += 1;
                }
            } else{
                   if (childrens[c].className === "cani"){
                    caniInRight += 1;
                }
                else if (childrens[c].className === "miss"){
                    missInRight += 1;
                }
            }
    }
    for (let bp = 0; bp < boatPositions.length; ++bp){
        inBoat = boatPositions[bp].children
        if (inBoat.length > 0){
            if (boat.direction === "left"){
                if (inBoat[0].className === "cani"){
                    caniInLeft += 1;
                } else if(inBoat[0].className === "miss"){
                    missInLeft += 1;
                }
            }
            else if(boat.direction === "right"){
                  if (inBoat[0].className === "cani"){
                    caniInRight += 1;
                } else if(inBoat[0].className === "miss"){
                    missInRight += 1;
                }
            }
        }
    }
    
    console.log("Missionários na esquerda: " + missInLeft)
    console.log("Canibais na esquerda: " + caniInLeft)
    console.log("Missionários na direita: " + missInRight)
    console.log("Canibais na direita: " + caniInRight)
    console.log("----------------------------------------")
    let CharatersInLeft = missInLeft + caniInLeft;
    let CharatersInRight = missInRight + caniInRight;
    document.querySelector(".contador").innerHTML = `${CharatersInRight}/6`
    if (missInLeft > 0 && missInRight > 0){
        console.log("primeira condicional")
        if(CharatersInLeft > 0 && CharatersInRight > 0){
        if (missInLeft < caniInLeft || missInRight < caniInRight){
            console.log("game-over")
            gameOver = true
            boat.direction = "stoped"
            document.querySelector(".main-header").innerHTML = "Game Over"
        }
    }
    }
   
    if (gameOver){
        document.querySelector(".controll").style.display = "none"
        document.querySelector(".fundo-go").style.display = "flex"
    }
}


function closeWindow(){
    document.querySelector(".fundo-go").style.display = "none"
}

function resetGame(){
    location.reload()
}

function interactionGuide(){
    let guideStatus = document.querySelector(".guide")
    if(guideStatus.style.display === "none"){
        guideStatus.style.display = "block"
    }else{
        guideStatus.style.display = "none"
    }
}

addEventListener("keydown", (e) => {
    if (e.key === "ArrowRight" || e.key=== "ArrowLeft"){
        sendBoat()
    }
})

addEventListener("keydown", (e)=> {
    if (e.key === " "){
        cleanBoat()
    }
})

addEventListener("keydown", (e) => {
    pressed = e.key
    if (!gameOver){
        allPosition = document.querySelectorAll(".position")
        if (parseInt(pressed) > 6){
                return
        }
            for (let i = 0; i < allPosition.length; i++){
                let n = allPosition[i].id.replace(/[^0-9]/g, "")
                if (boat.direction === "right"){
                    pressed = parseInt(e.key) + 6;
                }
                if (pressed == n){
                    children = allPosition[i].children
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
    checkScreenWidth()
    let content = 0;
    classTarget = e.target.className
    console.log(classTarget)
    if (classTarget === "box"){
        let idTarget = e.target.id
        let elementById = document.querySelector(`#${idTarget}`)
        let parent = elementById.parentElement
        console.log("parent id= " + parent.id)
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
                console.log("true")
                content.style.height = "0px"
                content.style.display = "none"
            }
        }
    }
})

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

setInterval(checkScreenWidth, 1)