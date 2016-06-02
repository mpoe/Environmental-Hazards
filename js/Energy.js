/**
 * Created by Mpoe on 5/31/2016.
 */
var Energy={
    windmills:10,
    energyProduced:0, // From green energy
    timesInvested:0,
    invest:function(){
        if(Game.money>Game.investCost){
            Energy.energyProduced= Math.floor(Energy.energyProduced*=1.1);//10% increase
            Game.money = Math.floor(Game.money - Game.investCost);
            Game.investCost*=1.5; // Increase for longer games
            Energy.timesInvested++;
            Stage.moneyText.text = "Money: "+Game.money;
            Stage.nrgProducedText.text = "Produced: "+Energy.energyProduced;
            if(Energy.energyProduced > Game.nrgNeed){
                console.log("YOU WIN!!!")
                Splash.gameWin();
            }
        }
        else{
            console.log("not enough money")
        }
1   },
    buildGreen:function(){
        if(Game.money>=Game.buildCost){
            Energy.windmills++;
            Energy.energyProduced+=Math.floor(250*(1+((Energy.timesInvested/100))*1.05));
            Game.money = Math.floor(Game.money - Game.buildCost);
            Game.buildCost*=1.1; // Increase for slower games
            Stage.moneyText.text = "Money: "+Game.money;
            Stage.nrgProducedText.text = "Produced: "+Energy.energyProduced;
            if(Energy.energyProduced > Game.nrgNeed){
                console.log("YOU WIN!!!")
                Splash.gameWin();
            }
        }else{
            console.log("not enough money")
        }
    }
}