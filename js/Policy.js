/**
 * Created by Mpoe on 5/31/2016.
 */
var Policy ={
    policy:function(policy){
        var l = Game.nrgProduced.length-1;
        var p = Math.floor(Game.nrgProduced[l]-Game.nrgNeed);
        switch (policy)
        {
            case "balanced":
                var f = Game.nrgNeed*(Game.getRandomInt(95,105)/100);
                Game.nrgRequired.push(f);
                if(Game.nrgProduced[l] <f){// +-5% of nrgneed for the day
                    Game.trust-=40;
                }
                //Calculate profit/loss
                Policy.calcProfit(p);

                break;
            case "economic":
                var f = Game.nrgNeed+(Math.floor(Math.random()*Game.nrgNeed*0.1)+Math.floor(Math.random()*Game.nrgNeed*0.1))//nrgneed +10%+10%
                Game.nrgRequired.push(f);
                if(Game.nrgProduced[l] <f){
                    Game.trust-=40;
                }
                //Calculate profit/loss with a modifier +
                    Policy.calcProfit(p)*1.15;
                //Do something
                break
            case "green":
                var f = Game.nrgNeed;
                Game.nrgRequired.push(f);
                if(Game.nrgProduced[l] <Game.nrgNeed){
                    Game.trust-=40;
                }
                //Calculate profit/loss with a modifier -
                Policy.calcProfit(p)*0.9;
                break;
            default: // Same as balanced
                if(Game.nrgProduced[l] <Game.nrgNeed*(Game.getRandomInt(95,105)/100)){// +-5% of nrgneed for the day
                    Game.trust-=40;
                }
                //Calculate profit/loss
                Policy.calcProfit(p);
                break;
        }
    },
    changePolicy:function(newPolicy){
        switch (newPolicy)
        {
            case "balanced":
                Stage.policy1.alpha=1;
                Stage.policy2.alpha=0.7;
                Stage.policy3.alpha=0.7;
                break;
            case "economic":
                Stage.policy1.alpha=0.7;
                Stage.policy2.alpha=1;
                Stage.policy3.alpha=0.7;
                break;
            case "green":
                Stage.policy1.alpha=0.7;
                Stage.policy2.alpha=0.7;
                Stage.policy3.alpha=1;
                break;
            default:
                //Case is most likely "none"
                break;
        }
        //then update the game
        Game.policy = newPolicy;
    },
    calcProfit:function(p){
        var energyBought = Energy.energyProduced-parseInt(Game.input.value);
        Game.money+=0.04*energyBought;
        if(p>3500){
        }
        else if(p<0){//You lost money
            Game.money= Game.money +(p*2);
        }else{
            Game.money+=p*0.5;
        }
    }
}