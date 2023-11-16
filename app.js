console.log("yosss")

boxes = document.querySelectorAll(".bone-box")
var scoreText = document.getElementById("score")
var timeText = document.getElementById("time")
var oldPos = 5
var score = 0
var clicked = false

var time = 120
let boneChanging = 700

function moveBone() {

    document.querySelector(".has-bone").classList.remove("has-bone")

    let box  = Math.floor(Math.random() * 9) + 1
    if (box == oldPos){
        box  = Math.floor(Math.random() * 9) + 1
    }
    boxes[box-1].classList.add("has-bone")
    clicked = false
    oldPos = box
}

// let interval = setInterval(moveBone, boneChanging)


boxes.forEach(box => {
    box.addEventListener("click", () =>{
        if(box.classList.contains("has-bone") && clicked == false && time>0){
            score++
            if(score%15 == 0 && boneChanging>240){
                boneChanging -= 40  //the bone change spositon 50ms faster every 15 time clicked upon....for graduall hardering diffuclty
                console.log(boneChanging)
                clearInterval(interval)
                interval = setInterval(moveBone, boneChanging)
            } 
            scoreText.textContent = score
            clicked = true
            console.log(score)
        }
    })
});



function timeReduce(){
    time--
    timeText.textContent = time + " seconds"

    if(time == 60){
        timeText.classList.remove("text-green")
        timeText.classList.add("text-yellow")
    }

    if(time == 0){
        clearInterval(timeInterval)
        console.log("timeee upppppppp")

    }
}

let timeInterval = setInterval(timeReduce,10)

