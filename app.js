console.log("yosss")

boxes = document.querySelectorAll(".bone-box")
var oldPos = 5

score = 0



function moveBone() {

    document.querySelector(".has-bone").classList.remove("has-bone")

    let box  = Math.floor(Math.random() * 9) + 1
    if (box == oldPos){
        box  = Math.floor(Math.random() * 9) + 1
    }
    boxes[box-1].classList.add("has-bone")
    oldPos = box
}

setInterval(moveBone, 700)


boxes.forEach(box => {
    box.addEventListener("click", () =>{
        if(box.classList.contains("has-bone")){
            
        }
    })
});