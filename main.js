noseX = 0;
noseY = 0; 
function preload(){
    clownNose = loadImage("https://i.postimg.cc/QNPN81dw/OIP-6-removebg-preview.png")
}

function setup(){
    canvas = createCanvas(400,400)
    canvas.center()
    video = createCapture(VIDEO);
    video.size(400,400)
    video.hide();
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function gotPoses(results){
    if(results.length>0){
        console.log(results);
        noseX = results[0].pose.nose.x
        noseY = results[0].pose.nose.y
        console.log("nose x = " + noseX);
        console.log("nose y = "+ noseY);
    }
}

function modelLoaded(){
    console.log("PoseNet is Initialized!");
}

function draw(){
    image(video,0,0,400,400);

    image(clownNose,noseX,noseY, 25,25)

}

function take_snapshot(){
    save("clown_Filter.png")
}