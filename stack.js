/**
 * Created by lc on 2016/8/9.
 */
function Stack(){
    var items=[];
    this.push=function(element){
        items.push(element);
    };
    this.pop=function(){
        return items.pop();
    };
    this.peek=function(){
        return items[items.length-1];
    };
    this.isEmpty=function(){
        return items.length==0;
    };
    this.size=function(){
      return items.length;
    };
    this.clear=function(){
      return items=[];
    };
    this.print= function () {
      console.log(items.toString());
    };
}

