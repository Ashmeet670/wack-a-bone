console.log("yosss")

boxes = document.querySelectorAll(".bone-box")
var scoreText = document.getElementById("score")
var timeText = document.getElementById("time")
// gameOver = document.getElementById("replay")
var oldPos = 5
var score = 0
var clicked = false

var time = 125
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

let interval = setInterval(moveBone, boneChanging)


boxes.forEach(box => {
    box.addEventListener("click", () =>{
        if(box.classList.contains("has-bone") && clicked == false && time>0){
            score++
            if(score%10 == 0 && boneChanging>400){
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



function timeReduce(){
    time--
    timeText.textContent = time + " seconds"

    if(time == 60){
        timeText.classList.remove("text-green")
        timeText.classList.add("text-yellow")
    }

    if(time == 0){
        clearInterval(timeInterval)
        clearInterval(interval)

        console.log("timeee upppppppp")
        gameOver.classList.remove("d-none")

    }
}

let timeInterval = setInterval(timeReduce,1000)



// function restart(){
//     location.reload()
// }