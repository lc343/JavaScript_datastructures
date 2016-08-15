/**
 * Created by lc on 2016/8/10.
 */
function Set(){
    var items={};
    var length;
    this.has=function(value){
        return value in items;
    };
    this.has1=function(value){
        return items.hasOwnProperty(value);
    };
    this.add=function(value){
        if(!this.has(value)){
            items[value]=value;
            return true;
        }
        return false;
    };
    this.remove=function(value){
      if(this.has(value)){
          delete items[value];
          return true;
      }
        return false;
    };

    this.size=function(){
        return length;
    };
    this.size1=function(){
      var count=0;
        for(var prop in items){
            if(items.hasOwnProperty(prop)){
                ++count;
            }
        }
        return count;
    };
    this.size2=function(){
       return Object.keys(items).length;
    };
    this.values=function(){
        return Object.keys(items); //此方法是返回一个包含给定对象可枚举的自身属性的数组
    };
    this.valuesLegacy=function(){
        var keys=[];
        for(var key in items){
            keys.push(key);
        }
        return keys;
    };
    this.union=function(otherSet){
        var unionSet=new Set();
        var values=this.values();
        for(var i=0;i<values.length;i++){
            unionSet.add(values[i]);
        }
        values=otherSet.values();
        for(var i=0;i<values.length;i++){
            unionSet.add(values[i])
        }
        return unionSet;
    };

    this.insertSection=function(otherSet){
        var values=this.values();
        var insertSectionSet=new Set();
        for(var i=0;i<values.length;i++){
            if(insertSectionSet.has(values[i])){
                insertSectionSet.add(values[i]);
            }
        }
        return insertSectionSet;
    };
    this.difference= function (otherSet) {
       var differenceSet=new Set();
       var values=this.values();
        for(var i=0;i<values.length;i++){
            if(!otherSet.has(values[i])){
                differenceSet.add(values[i]);
            }
        }
        return differenceSet;
    };
    this.subSet=function(otherSet){
      var subSet=new Set();
        var values=this.values();
        if(this.size()>otherSet.size()){
            return false;
        }
        else{
            for(var i=0;i<values.length;i++){
                if(!otherSet.has(values[i])){
                    return false;
                }
            }
            return true;
        }
    };
}
