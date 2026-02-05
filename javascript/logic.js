let boatPositions = document.querySelectorAll(".boat-position");
let boat = {
    direction: "left",
    freePlaces: 2,
    boatDiv: document.querySelector(".interactive-div")
}


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
    console.log(n)

    if (n > 6 && boat.direction === "left") return

    if(n < 6 && boat.direction === "right") return

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
    if (theresPassenger){
        if (boat.direction === "left"){
            boat.direction = "right"
            boat.boatDiv.style.left = "900px"
            document.querySelector(".pointer-left").style.display =  "inline-block"
            document.querySelector(".pointer-right").style.display =  "none"
            gameRules()

        }
        else if(boat.direction === "right"){
            boat.direction = "left"
            boat.boatDiv.style.left = "500px"
            document.querySelector(".pointer-left").style.display =  "none"
            document.querySelector(".pointer-right").style.display =   "inline-block"
            gameRules()
        }
    }


}

function cleanBoat(){
    console.log("start")
    bps = document.querySelectorAll(".boat-position")
    for (let i = 0; i < bps.length; i++){
        innerImage = bps[i].children 
        if (innerImage.length > 0){
            removeFromBoat(innerImage[0]) 
        }
    } 
}

function gameRules(){
    let gameOver = false
    let missInLeft = 0;
    let missInRight = 0;
    let caniInLeft = 0 ;
    let caniInRight = 0;

    let inEarth = document.querySelectorAll(".position")
    let inBoat = document.querySelectorAll(".boat-position")
    for (let i = 0; i < inEarth.length; i++){
       let children = inEarth[i].children
        if (i<=5){
            if (children.length > 0){
                if (children[0].className === "miss"){
                    missInLeft += 1
                } else{
                    caniInLeft += 1
                }
            }
        }
        else{
             if (children.length > 0){
                if (children[0].className === "miss"){
                    missInRight += 1
                } else{
                    caniInRight += 1
                }
            }
        }
    }

    for (let i = 0; i < inBoat.length; i++){
        let children = inBoat[i].children
        if (children.length > 0){
            if (boat.direction == "left"){
                if (children[0].className === "miss"){
                    missInLeft += 1
                } else{
                    caniInLeft += 1
                }
            }
            else{
                if (children.length > 0){
                if (children[0].className === "miss"){
                    missInRight += 1
                } else{
                    caniInRight += 1
                }
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
        document.querySelector(".fundo-go").style.display = "block"
    }
}

function closeWindow(){
    document.querySelector(".fundo-go").style.display = "none"
}

function resetGame(){
    location.reload()
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
    allPosition = document.querySelectorAll(".position")
    for (let i = 0; i < allPosition.length; i++){
        let n = allPosition[i].id.replace(/[^0-9]/g, "")
        if (e.key === n){
            children = allPosition[i].children
            for (let j = 0; j < children.length;j++){
                if (children[j].className != "tecla"){
                    placeInBoat(children[j])
                      
                }
            }
          
        }
    }
})