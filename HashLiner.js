/**
 * Created by lc on 2016/8/11.
 */
function HashLiner(){
    var table=[];
    function ValuePair(key,value){
        this.key=key;
        this.value=value;

        this.toString=function(){
          return '['this.key+'-'+this.value+ ']';
        };
    }
    this.put=function(key,value){
        var position=loseloseHashCode(key);
        if(table[position]==undefined){
            table[position]=new ValuePair(key,value);
        }
        else{
            var index=++position;
            while(table[index]!=undefined){
                index++;
            }
            table[index]=new ValuePair(key,value);
        }
    };
    this.get=function(key){
      var position=loseloseHashCode(key);
        if(table[position]!==undefined){
            if(table[position].key===key){
                return table[position].value;
            }
            else{
                var index=++position;
                while(table[index]===undefined||table[index].key!==key){
                    index++;
                }
                if(table[index].key===key){
                    return table[index].value;
                }
            }
        }
       return undefined;
    };
    this.remove=function(key){
        var position=loseloseHashCode(key);
        if(table[position]!==undefined){
            if(table[position].key===key){
               table[position].value==undefined;
            }
            else{
                var index=++position;
                while(table[position]==undefined||table[index].key!==key){
                    index++;
                }
                if(table[index].key===key){
                    table[index].value==undefined;
                }
            }
        }
    }
}