var canvas= new fabric.Canvas("myCanvas");
var block_width=30;
var block_height=30;

var player_x=10;
var player_y=10;

player_object="";
block_object="";

function player_update(){
    fabric.Image.fromURL("player(1).png",function(Img){
        player_object=Img;
        player_object.scaleToWidth(150);
        player_object.scaleToHeight(140);
        player_object.set({
        top:player_y,
        left:player_x
        });
        canvas.add(player_object);

        });
}
function object(get_Image){
    fabric.Image.fromURL(get_Image,function(Img){
        block_object=Img;
        block_object.scaleToWidth(block_width);
        block_object.scaleToHeight(block_height);
        block_object.set({
        top:player_y,
        left:player_x
        });
canvas.add(block_object);
});
}
window.addEventListener("keydown",my_keydown)

function my_keydown(e){
    keyPressed=e.keyCode;
    console.log(keyPressed);
    if(e.shiftKey==true && keyPressed=="80"){
        console.log("shift and p is pressed");
        block_height=block_height+10;
        block_width=block_width+10;
        document.getElementById("Width").innerHTML=block_width;
        document.getElementById("Height").innerHTML=block_height;
    }
    if(e.shiftKey==true && keyPressed=="77"){
        console.log("shift and m is pressed");
        block_height=block_height-10;
        block_width=block_width-10;
        document.getElementById("Width").innerHTML=block_width;
        document.getElementById("Height").innerHTML=block_height;
    }

    if(keyPressed=='38'){
        up();
        console.log("up");
    }
    if(keyPressed=='40'){
        down();
        console.log("down");
    }
    if(keyPressed=='37'){
        left();
        console.log("left");
    }
   if(keyPressed=='39'){
       right();
       console.log("right");
   }
   if(keyPressed=='39'){
    right();
    console.log("right");
}
if(keyPressed=='70'){
    object("face.png");
    console.log("f");
}
if(keyPressed=='66'){
    object("body.png");
    console.log("b");
}
if(keyPressed=='76'){
    object("legs.png");
    console.log("l");
}
if(keyPressed=='82'){
    object("right_hand.png");
    console.log("r");
}
if(keyPressed=='72'){
    object("left_hand.png");
    console.log("h");
}
}
function up(){
    if(player_y>=0){
        player_y=block_height-player_y;
        console.log("Block_height="+block_height);
        console.log("When Up Arrow Is Pressed X="+player_x+",Y="+player_y);
        canvas.remove(player_object);
        player_update();
    }
}
function down(){
    if(player_y=500){
        player_y=block_height+player_y;
        console.log("Block Height="+block_height);
        console.log("when down arrow is pressed x="+player_x+",Y="+player_y);
        canvas.remove(player_object);
        player_update();
    }
}
function left(){
    if(player_x>=0){
        player_x=block_width-player_x;
        console.log("Block Width="+block_width);
        console.log("When left arrow is pressed X="+player_x+",Y="+player_y);
        canvas.remove(player_object);
        player_update();
    }
}
function right(){
    if(player_x<=800){
        player_x=block_width+player_x;
        console.log("Block Width="+block_width);
        console.log("when right arrow is pressed X="+player_x+",Y="+player_y);
        canvas.remove(player_object);
        player_update();
    }
}