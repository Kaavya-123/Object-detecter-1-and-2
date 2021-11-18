status = "";
objects= [];

function preload()
{
    img = loadImage('first img');
}

function setup()
{
    canvas = createCanvas(640, 420);
    canvas.center();
    objectDetecter = ml5.objectDetecter('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status = Detecting Objects";
}
function modelLoaded()
{
    console.log("Model loaded");
    status = true;
    objectDetecter.detect(img , gotResults);
}
function gotResults()
{
    if (error) 
    {
        console.error(error);
    }
    console.log(gotResults);
    objects = results;
}

function back() {
    window.location.href = 'hi!.html';
}

function draw()
    {
        if(status != "")
        {
           for(i=0;i<objects.length;i++)
           {
               
           }
        }
    }
