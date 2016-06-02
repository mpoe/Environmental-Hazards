/**
 * Created by Mpoe on 5/28/2016.
 */
var Preloader ={
    queue: new createjs.LoadQueue(true),
    loadText: new createjs.Text("", "50px Courier New", "#000"),
    load:function(){
        Game.stage.addChild(this.loadText);
        this.queue.on("progress", this.progress, this);
        this.queue.on("complete", Game.setup, Game);
        this.queue.loadManifest([
            "js/Ticker.js", "js/Game.js", "js/Stage.js", "js/Splash.js", "js/Policy.js", "js/Energy.js",
            "img/start.jpg","img/instructions.jpg","img/game_instructions.jpg","img/inst_img.jpg",
            "img/balanced.jpg","img/green.jpg","img/greedy.jpg",
            "img/bg.jpg","img/bg_empty.jpg","img/build.jpg","img/invest.jpg","img/turn.jpg"
        ])
    },
    progress:function(e){
        this.loadText.text=Math.round(e.progress*100)+"% done";
        Game.stage.update();
    }
}