var video;
var socket;

function setup(){
    createCanvas(320, 240);
    background(51);
    video = createCapture(VIDEO);
    video.size(320, 240);

    socket = io.connect('http://127.0.0.1:3000');

    socket.on('mouse', newDrawing);
}

function newDrawing(data){
    noStroke();
fill(255,0,100);
ellipse(data.x, data.y, 6, 6);

}

function mouseDragged(){
    console.log("Sending: "+mouseX + "," +mouseY);

    var data = {
        x: mouseX,
        y: mouseY
    }   

    socket.emit('mouse', data);

noStroke();
fill(255);
ellipse(mouseX, mouseY, 6, 6);
}

function draw(){

}