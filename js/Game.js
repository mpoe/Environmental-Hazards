/**
 * Created by Mpoe on 5/28/2016.
 */
var Game ={
    trust:0,
    money:0,
    policy:"",
    nrgNeed:0,
    nrgProduced:[],
    nrgRequired:[],
    turn:0,
    investCost:0,
    buildCost:0,
    input:document.querySelector('input'),
    stage:new createjs.Stage("canvas"),
    init:function(){
        Preloader.load()
    },
    setup:function(){
        Game.stage.removeAllChildren();
        Ticker.start();
        Splash.createMenu();
    },
    startGame:function(){
        Game.stage.removeAllChildren();
        
        Game.trust=100;
        Game.money=500;
        Game.policy="none";
        Game.nrgNeed=10000; // higher value = higher difficulty
        Game.turn=0;
        Game.investCost=1000;
        Game.buildCost=500;
        Energy.energyProduced=Game.nrgNeed*0.2;//20% of nrgNeed, increase for SHORTER games
        Game.input.classList.remove('hidden')
        Game.input.value=Energy.energyProduced;
        Stage.setupStage();
    },
    nextTurn:function(nrgprod){
        Game.turn++;
        Game.nrgProduced.push(nrgprod);

        Policy.policy(Game.policy);

        Stage.turnText.text= "turn: "+Game.turn;
        
        Game.nrgNeed=Game.nrgNeed*1.08; // 5% increase Increase for LONGER games, v2 = 10%

        if(Game.money<0){
            Game.trust-=10;
        }
        Stage.turnText.text  = "turn: " +Game.turn;
        Stage.moneyText.text = "Money: "+Math.floor(Game.money);
        Stage.trustText.text = "Trust: "+Game.trust+"%";
        Stage.nrgNeedText.text = "Need: "+Math.floor(Game.nrgNeed);
        Game.input.value = Energy.energyProduced;

        console.log(Game.nrgProduced);
        console.log(Game.nrgRequired);
        if( Game.trust<0){
            Splash.gameOver();
        }
        if(Game.money<=-5555){
            Splash.gameOver();
        }
    },
    getRandomInt:function(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    },
    gameOver:function(){
        Splash.gameOver();
    }
}