/**
 * Created by lc on 2016/8/11.
 */
function HashTable(){
    var table=[];
    var loseloseHashCode=function(key){
        var hash=0;
        for(var i=0;i<key.length;i++){
            hash+=key.charCodeAt(i);
        }
        return hash;
    };
    this.put=function(key,value){
        var position=loseloseHashCode(key);
        console.log(key+'-'+position);
        table[position]=value;
    };
    this.get=function(key){
        var position=loseloseHashCode(key);
        return table[position];
    };
    this.remove=function(key){
      var position=loseloseHashCode(key);
        table[position]=undefined;
    };
    this.print=function(){
      for(var i=0;i<table.length;i++){
          if(table[i]!==undefined){
              console.log(i+"i"+table[i]);
          }
      }
    };

}