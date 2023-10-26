music="";
song="";
function preload()  {
    music= loadSound("Shiv Tandav Stotram.mp3");
    song= loadSound("English song.mp3");
}
function setup()    {
    canvas= createCanvas(600,600);
    canvas.center();

    video= createCapture(VIDEO);
    video.hide();
}
function draw() {
    image(video,0,0,600,600);
}