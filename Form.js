class Form {
    constructor(){
        this.input = createInput("name")
        this.button = createButton('ENTER');
        this.greeting = createElement('h3');
    }
display(){

var title = createElement('h2');
title.html('racing form');
title.position(displayWidth/2,0);

this.input.position(displayWidth/2,displayHeight/2+80);

this.button.position(displayWidth/2,displayHeight/2+100);

this.button.mousePressed(()=>{
    this.input.hide();
    this.button.hide();
    player.name = this.input.value();
    playerCount +=1

    player.index=playerCount;

    player.update();

    player.updateCount(playerCount);
    this.greeting.html("hello" + player.name);
    this.greeting.position(displayWidth/2,displayHeight/2+80);
});


}

hide(){
this.input.hide();
this.button.hide();
this.greeting.hide();




}


}   