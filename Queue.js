/**
 * Created by lc on 2016/8/9.
 */
function Queue(){
    var items=[];
    this.enqueue=function(element){
        items.push(element);
    };
    this.dequeue=function(){
      return items.shift();
    };
    this.font=function(){
        return items[0];
    };
    this.isEmpty=function(){
        return items.length==0;
    };
    this.size=function(){
      return items.length;
    };
    this.clear=function(){
       items=[];
    };
    this.print=function(){
        console.log(items.toString());
    };
}

