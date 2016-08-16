/**
 * Created by lc on 2016/8/13.
 */
function MinCoinChange(coins){
    var coins=coins;
    var cache={};
    this.lazyMakeChange=function(amount){
        var change=[];
        var total=0;
        for(var i=coins.length;i>=0;i--){
            var coin=coins[i];
            while(total+coin<=amount){
                change.push(coin);
                total+=coin;
            }
        }
        return change;
    };
    this.DPMakeChange=function(amount){

        var me=this;
        if(!amount){
            return [];
        }
        if(cache[amount]){
            return cache[amount];
        }
        var min=[],newMin,newAmount;
        for(var i=0;i<coins.length;i++){
            var coin=coins[i];
            newAmount=amount-coin;
            if(newAmount>=0){
                newMin=me.DPMakeChange(newAmount);
            }
            if(newAmount>=0&&(newMin.length<min.length-1||!min.length)&&(newMin.length||!newAmount)){
                min=[coin].concat(newMin);
                console.log('new Min'+min+'for'+amount);
            }
        }
        return (cache[amount]=min);
    };
}
