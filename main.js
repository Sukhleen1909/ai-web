song="";
song1="";
leftWristX=0;
leftWristY=0;
rightWristX=0;
rightWristY=0;
scorerightwrist=0;
scoreleftWrist="";

function preload() {
    song=loadSound("chittakurta.mp3");
    song1=loadSound("terijatti.mp3");
}
function setup() {
    canvas=createCanvas(600,500);
    canvas.center();
    video=createCapture(VIDEO);
    video.hide();
    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
}

function modelLoaded() {
    console.log('Posenet is Initialized');
}
function draw() {
     image(video, 0, 0, 600, 500);
      song1_status = song1.isPlaying(); 
      song2_status = song2.isPlaying();
       fill("#FF0000");
        stroke("#FF0000"); 
        if(scoreRightWrist > 0.2)
         { 
            circle(rightWristX,rightWristY,20);
             song2.stop(); 
             if(song1_status == false)
              { 
                song1.play();
                 document.getElementById("song").innerHTML = "Playing - Teri Jatti Song" } 
                } 
                if(scoreLeftWrist > 0.2)
                 { 
                    circle(leftWristX,leftWristY,20); 
                    song1.stop();
                     if(song2_status == false) 
                     { 
                        song2.play();
                         document.getElementById("song").innerHTML = "Playing - Chitta Kurta Song" }
                     }
                        }


function gotPoses(results) {
    if (results.length>0){
        console.log(results);
        scoreleftWrist=results[0].pose.keypoints[9].score;
        scorerightwrist=results[0].pose.keypoints[10].score;
        console.log("scoreleftWrist = "+scoreleftWrist+"scorerightwrist = "+scorerightwrist);
        leftWristX=results[0].pose.leftWrist.x;
        leftWristY=results[0].pose.leftWrist.y;
        console.log("leftWristX = "+leftWristX +"leftWristY = "+leftWristY);
        rightWristX=results[0].pose.rightWrist.x;
        rightWristY=results[0].pose.rightWrist.y;
        console.log("rightWristX = "+rightWristX +"rightWristY = "+rightWristY);
    }
}