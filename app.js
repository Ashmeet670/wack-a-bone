console.log("yosss")

boxes = document.querySelectorAll(".bone-box")
var scoreText = document.getElementById("score")
var oldPos = 5
var score = 0
var clicked = false

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
        if(box.classList.contains("has-bone") && clicked == false){
            score++
            if(score%15 == 0 && boneChanging>240){
                boneChanging -= 40  //the bone change spositon 50ms faster every 15 time clicked upon....for graduall hardering diffuclty
                console.log(boneChanging)
                clearInterval(interval)
                interval = setInterval(moveBone, boneChanging)
            } 
            scoreText.textContent = "Score: "+score
            clicked = true
            console.log(score)
        }
    })
});

