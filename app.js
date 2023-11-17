console.log("yosss")

boxes = document.querySelectorAll(".bone-box")
var scoreText = document.getElementById("score")
var timeText = document.getElementById("time")
var button = document.getElementById("start-replay")
var oldPos = 5 
var score = 0
var clicked = false
var game = "pause"

var time = 125
let boneChanging = 800

function moveBone() {

    document.querySelector(".has-bone").classList.remove("has-bone")

    let box = Math.floor(Math.random() * 9) + 1
    if (box == oldPos) {
        box = Math.floor(Math.random() * 9) + 1
    }
    boxes[box - 1].classList.add("has-bone")
    clicked = false
    oldPos = box
}




boxes.forEach(box => {
    box.addEventListener("click", () => {
        if (box.classList.contains("has-bone") && clicked == false && time > 0) {
            score++
            if (score % 15 == 0 && boneChanging > 500) {
                boneChanging -= 40
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



function timeReduce() {
    time--
    timeText.textContent = time + " seconds"

    if (time == 60) {
        timeText.classList.remove("text-green")
        timeText.classList.add("text-yellow")
    }

    if (time == 0) {
        game = "over"
        clearInterval(timeInterval)
        clearInterval(interval)

        console.log("timeee upppppppp")
        button.textContent = "Replay"
        
    }
}

let timeInterval;
let interval;

function start() {
    if(time == 0 && game == "over"){
        time = 125
        game = "pause"
    }

    if(time > 0 && game == "pause"){
        
        interval = setInterval(moveBone, boneChanging)
        timeInterval = setInterval(timeReduce, 1000)
        score = 0
        scoreText.textContent = score
        game = "play"
    }
    
}

