/**
 * Created by lc on 2016/8/9.
 */
function PriorityQueue(){
    var items=[];
   function QueueElement(element,priority){
       this.element=element;
       this.priority=priority;
   }
    this.enqueue=function(element,priority){
        var queueElement=new QueueElement();
        if(items.isEmpty()){
            items.push(queueElement);
        }
        else{
            var add=false;
            for(var i=0;i<items.length;i++){
                if(queueElement.priority<items[i].priority){
                    items.splice(i,0,queueElement);
                    add=true;
                    break;
                }
            }
            if(!add){
                items.push(queueElement);
            }

        }
    };
}