var canvas=new fabric.Canvas("myCanvas");

hero_x=10;
hero_y=10;
hero_image_width=30;
hero_image_height=30;

var her0_object="";


function hero_update(){
    fabric.Image.fromURL("player.png",function(Img){
        hero_object=Img;
        heroo_object.scaleToWidth(150);
        hero_object.scaleToHeight(140);
        hero_object.set({
            top:hero_y,
            left:hero_x

    });
    canvas.add(hero_object);
    });

   
}

