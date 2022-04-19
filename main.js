function preload() {

}

function setup() {
    canvas = createCanvas(560, 400)
    canvas.position(110, 250)
    video = createCapture(VIDEO)
    video.hide()
    tint_color = ""
}

function draw() {
    image(video, 0, 0, 560, 400)
    fill("red")
stroke("red")
circle(40, 40, 80);

    fill("red")
    stroke("red")
circle(520, 40, 80);

fill("red")
stroke("red")
circle(520, 360, 80);

fill("red")
stroke("red")
circle(40, 360, 80);

fill("green")
stroke("green")
rect(10,80,60,239)


    fill("green")
    stroke("green")
rect(490,80,60,239)

fill("green")
stroke("green")
rect(80,10,400,60)

fill("green")
stroke("green")
rect(80,330,400,60)


}

function take_snapshot() {
    save("Photo.png")
}