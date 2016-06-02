/**
 * Created by Mpoe on 5/30/2016.
 */
"use strict"
var Stage ={
    moneyText:"",
    turnText:"",
    policy1:"",
    policy2:"",
    policy3:"",
    nrgNeedText:"",
    nrgProducedText:"",
    setupStage:function(){
        var bg = new createjs.Bitmap(Preloader.queue.getResult("img/bg.jpg"));
        Game.stage.addChild(bg);

        var xpos=10;
        var textWidth =Game.stage.canvas.width/3;
        this.turnText = new createjs.Text("", "40px Courier New", "#000");
        this.turnText.text= "turn: "+Game.turn;
        this.turnText.x=xpos;
        this.turnText.y=15;
        xpos+=textWidth;
        Game.stage.addChild(this.turnText);

        this.moneyText = new createjs.Text("", "40px Courier New", "#000");
        this.moneyText.text= "Money: "+Game.money;
        this.moneyText.x=xpos;
        this.moneyText.y=15;
        xpos+=textWidth;
        Game.stage.addChild(this.moneyText);

        this.trustText = new createjs.Text("", "40px Courier New", "#000");
        this.trustText.text = "Trust: "+Game.trust+"%";
        this.trustText.x=xpos;
        this.trustText.y=15;
        Game.stage.addChild(this.trustText);

        this.nrgNeedText = new createjs.Text("", "40px Courier New", "#000");
        this.nrgNeedText.text = "Need: "+Game.nrgNeed;
        this.nrgNeedText.x=10;
        this.nrgNeedText.y=90;
        Game.stage.addChild(this.nrgNeedText);

        this.nrgProducedText = new createjs.Text("", "40px Courier New", "#000");
        this.nrgProducedText.text = "Produced: "+Energy.energyProduced;
        this.nrgProducedText.x=Game.stage.canvas.width/2+10;
        this.nrgProducedText.y=90;
        Game.stage.addChild(this.nrgProducedText);

        // END OF TEXT

        Stage.policy1 = new createjs.Bitmap(Preloader.queue.getResult("img/balanced.jpg"));
        Stage.policy1.x=25;
        Stage.policy1.y=Game.stage.canvas.height-200;
        Stage.policy1.p="balanced";
        Stage.policy1.addEventListener("click",function(){
            Policy.changePolicy(Stage.policy1.p)
        });
        Game.stage.addChild(Stage.policy1);

        Stage.policy2 = new createjs.Bitmap(Preloader.queue.getResult("img/greedy.jpg"));
        Stage.policy2.x=135;
        Stage.policy2.y=Game.stage.canvas.height-200;
        Stage.policy2.p="economic";
        Stage.policy2.addEventListener("click",function(){
            Policy.changePolicy(Stage.policy2.p)
        });
        Game.stage.addChild(Stage.policy2);

        Stage.policy3 = new createjs.Bitmap(Preloader.queue.getResult("img/green.jpg"));
        Stage.policy3.x=245;
        Stage.policy3.y=Game.stage.canvas.height-200;
        Stage.policy3.p="green";
        Stage.policy3.addEventListener("click",function(){
            Policy.changePolicy(Stage.policy3.p)
        });
        Game.stage.addChild(Stage.policy3);

        var invest = new createjs.Bitmap(Preloader.queue.getResult("img/invest.jpg"));
        invest.x = 585;
        invest.y=Game.stage.canvas.height-200;
        invest.addEventListener("click",Energy.invest)
        Game.stage.addChild(invest);

        var build = new createjs.Bitmap(Preloader.queue.getResult("img/build.jpg"));
        build.x = 475;
        build.y=Game.stage.canvas.height-200;
        build.addEventListener("click",Energy.buildGreen);
        Game.stage.addChild(build);

        var turn = new createjs.Bitmap(Preloader.queue.getResult("img/turn.jpg"))
        turn.x = Game.stage.canvas.width-152;
        turn.y=180;
        turn.addEventListener("click",function(){
            Game.nextTurn(parseInt(Game.input.value));
        });
        Game.stage.addChild(turn)
    },
    update:function(){
        this.trustText.text = "Trust: "+Game.trust+"%";
        this.moneyText.text= "Money: "+Math.floor(Game.money);
        this.turnText.text= "day: "+Game.turn;
        this.nrgNeedText.text = "Need: "+Game.nrgNeed;
        this.nrgProducedText.text = "Produced: "+Energy.energyProduced;
    }
}