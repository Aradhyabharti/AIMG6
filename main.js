nx = ""
ny = ""


function preload() {
	world_start = loadSound("world_start.wav");
	mario_jump = loadSound("jump.wav")
	mario_coin = loadSound("coin.wav")
	world_end = loadSound("gameover.wav")
	mario_kills = loadSound("kick.wav")
	mario_dies = loadSound("mariodie.wav")
	setSprites();
	MarioAnimation();
}

function setup() {
	canvas = createCanvas(1240, 336);
	canvas.parent('canvas')
	instializeInSetup(mario);
	video = createCanvas(VIDEO)
	video.size(600, 400)
	video.parent('game_console')
	posenet = ml5.poseNet(video, modelLoaded)
	posenet.on('pose', gotPoses)
}

function modelLoaded() {
	console.log("posenet is intialized")
}

function gotPoses(poses) {
	if (poses.length > 0) {
		console.log(poses)
		nx = poses[0].pose.nose.x
		ny = poses[0].pose.nose.y
	}
}

function draw() {
	game()
}






