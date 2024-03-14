function setup(){
    canvas = createCanvas(500, 425);
    canvas.position(600, 150);
    video = createCapture(VIDEO);
    video.size(550, 500);
    posenet = ml5.poseNet(video, modelLoaded);
    posenet.on('pose', poseGotFunc)
}
function draw(){
    background("lightBlue");
    fill("orange");
    stroke("orange");
    square(noseX, noseY, difference);
}
function modelLoaded(){
    console.log("Posenet has been loaded successfully!");
}
noseX = 0;
noseY = 0;
leftWristX = 0;
rightWristX = 0;
difference = 0;
function poseGotFunc(results){
    if(results.length >= 0){
        console.log(results);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x;
        difference = leftWristX - rightWristX;
        console.log("The value of Nose X is " + noseX);
        console.log("The value of Nose Y is " + noseY);
        document.getElementById("sizeSquare").innerHTML = difference;
        
    }
}