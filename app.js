console.log("yosss")

bones = document.querySelectorAll(".bone-box")

score = 0

bones.forEach(bone => {
    bone.addEventListener('mousedown', () => {
        bone.parentElement.innerHTMl = ""
        score++
    })


});



function moveBone(){
    newBox = Math.floor(Math.random() * 9) + 1
    
}