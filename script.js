const buttons = document.querySelectorAll(".btn")
const img = document.querySelector(".img-container")


let counter = 0

//Array for photos//
const pictures = [
    "./img/1.png",
    "./img/2.png",
    "./img/3.png",
    "./img/4.png",
    "./img/5.png",
  ]
  

buttons.forEach(function (button) {
  button.addEventListener("click", function (e){
    if(button.classList.contains('btn-left')){
      counter--
      if(counter < 0) {
        counter = pictures.length - 1
      }
      img.style.background = `url('${pictures[counter]}')`
      img.style.backgroundRepeat = 'no-repeat'
      img.style.backgroundPosition = 'center'
      img.style.backgroundSize = 'cover'
    }
    if(button.classList.contains('btn-right')){
      counter++
      if(counter > pictures.length - 1) {
        counter = 0
      }
      img.style.background = `url('${pictures[counter]}')`
      img.style.backgroundRepeat = 'no-repeat'
      img.style.backgroundPosition = 'center'
      img.style.backgroundSize = 'cover'
    }
  })
})


