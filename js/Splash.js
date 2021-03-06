/**
 * Created by Mpoe on 5/30/2016.
 */
var Splash = {
    createMenu:function(){
        // Add elements to gameMenu
        var bg = new createjs.Bitmap(Preloader.queue.getResult("img/bg_empty.jpg"));
        Game.stage.addChild(bg);

        var startbtn = new createjs.Bitmap(Preloader.queue.getResult("img/start.jpg"));
        startbtn.x = Game.stage.canvas.width-400; //300 - 100 padding
        startbtn.y = 150;
        startbtn.addEventListener("click",Game.startGame);
        Game.stage.addChild(startbtn);

        var instbtn = new createjs.Bitmap(Preloader.queue.getResult("img/instructions.jpg"));
        instbtn.x = 100;
        instbtn.y = 150;
        instbtn.addEventListener("click", Splash.createInstructions);
        Game.stage.addChild(instbtn);
    },
    createInstructions:function(){
        Game.stage.removeAllChildren()
        var inst = new createjs.Bitmap(Preloader.queue.getResult("img/game_instructions.jpg"));
        inst.x= 50;
        inst.y=50;
        inst.addEventListener("click",Game.startGame);
        Game.stage.addChild(inst)

        var inst2 = new createjs.Bitmap(Preloader.queue.getResult("img/inst_img.jpg"));
        inst2.x= Game.stage.canvas.width-375;
        inst2.y= Game.stage.canvas.height-410;
        Game.stage.addChild(inst2);

    },
    gameOver:function(){
        window.removeAllEventListeners;
        Game.input.classList.add('hidden')
        Game.stage.removeAllChildren();
    },
    gameWin:function(){
        
    }
}