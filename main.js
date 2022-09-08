canvas = document.getElementById('myCanvas')
ctx = canvas.getContext("2d")
roverwidth = 100
roverheight = 90
roverx = 10
rovery = 10
backgoundImg = "mars.jpg"
roverImage = "rover.png"

function add(){
    var backgoundImageTag = new Image()
    backgoundImageTag.onload = uploadBackGround
    backgoundImageTag.src = backgoundImg 

    roverImgTag = new Image()
    roverImgTag.onload = uploadrover
    roverImgTag.src = roverImage
}

function uploadBackGround(){
    ctx.drawImage(backgoundImageTag,0,0,canvas.width,canvas.height)

}
function uploadrover(){
    ctx.drawImage (roverImgTag,roverx,rovery,roverwidth,roverheight)
}