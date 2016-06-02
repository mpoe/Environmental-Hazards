/**
 * Created by Mpoe on 5/29/2016.
 */
var Ticker ={
    start:function(){
        createjs.Ticker.setFPS(60);
        createjs.Ticker.on("tick", this.tock);
    },
    tock:function(e){
        Game.stage.update(e);
    }
}