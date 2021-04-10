class Game{
    constructor(){
    }
 getstate(){
    var gameStateref = database.ref('gameState')
    gameStateref.on("value", function(data){
        gameState = data.val();
    })


 }

update(state){
    database.ref('/').update({
        gameState: state 
    })


}

start(){
        if (gameState === 0){
            form = new Form()
            player = new Player()
            player.getCount()
            form.display()
        }
        car1=createSprite(100,200);
        car2=createSprite(300,200);
        car3=createSprite(500,200);
        car4=createSprite(700,200);
        cars=[car1,car2,car3,car4]
}

play(){
    form.hide();
    text("game start", 120,100)
    Player.getPlayerInfo();
    if(allPlayers!==undefined){
        var displayPosition = 130
        var index = 0;
        var x=0; 
        var y;
        for(var plr in allPlayers){
            index=index+1
            x=x+200
            y=displayHeight-allPlayers[plr].distance
            cars[index-1].x=x
            cars[index-1].y=y
           if (index === player.index){
            cars[index-1].shapeColor = "red"
            camera.position.x=displayWidth/2
            camera.position.y=cars[index-1].y
                 }
                     // text(allPlayers[plr].name+":" + allPlayers[plr].distance, 120,displayPosition)
        displayPosition+=20 
        }
    if(keyDown(UP_ARROW)&& player.index!== null){
        player.distance+=50;
        player.update();
        

    }
    drawSprites();
        
    }

}


}