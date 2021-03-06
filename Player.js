class Player {
    constructor(){
        this.name = null
        this.index = null
        this.distance = 0
    }

getCount(){
    var playerCountref = database.ref('playerCount')
    playerCountref.on("value", function(data){
        playerCount = data.val();
    })
}

updateCount(count){
    database.ref('/').update({
        playerCount: count
    })
}

update(){
    var playerIndex = "players/player" + this.index;
    database.ref(playerIndex).set({
        name:this.name,
        distance:this.distance
        })
}
static getPlayerInfo(){
    var getPlayerInforef = database.ref('players')
    getPlayerInforef.on("value",  (data)=>{
        allPlayers = data.val();
    })
}
}