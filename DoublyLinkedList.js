/**
 * Created by lc on 2016/8/9.
 */
function DoublyLinkedList(){
    var Node=function(element){
      this.element=element;
        this.next=null;
        this.prev=null;
    };
    var length=0;
    var head=null;
    var tail=null;
    var index=0;

    this.insert=function(position,element){
        if(position>=0&&position<length){
            var node=new Node(element);
            var current=head;
            var previous;
            if(position===0){
                if(!head){
                    head=node;
                    tail=node;
                }
                else{
                    node.next=current;
                    current.prev=node;
                    head=node;
                }
            }
            else if(position===length-1){
                current=tail;
                node.prev=current;
                current.next=node;
                tail=node;
            }
            else{
                while(index++<position){
                    previous=current;
                    current=current.next;
                }
                node.next=current;
                node.prev=previous;
                previous.next=node;
                current.prev=node;
            }
            length++;
            return false;
        }
        else{
            return false;
        }
    };
    this.removeAt=function(position){
        if(position>=0&&position<length){
            var current=head;
            var previous;
            if(position==0){
                head=current.next;
                if(length==1){
                    tail=null;
                }
                else{
                    head.prev=null;
                }
            }
            else if(position==length-1){
                    current=tail;
                    tail=current.prev;
                    tail.next=null;
                }
            else {
                    while (index++ < position) {
                        previous = current;
                        current = current.next;
                    }
                    previous.next = current.next;
                    current.next.prev = previous;
                }
            length--;
            return true;

        }
        else{
            return false;
        }
    };
    this.indexOf= function (element) {
        var current=head;
        var index=-1;
        if(element==current.head){
            index=0;
        }
        while(current!=head){
            if(element===current.element){
                return index;
            }
            index++;
            current=current.next;
        }
        if(element===current.element){
            return index;
        }
        return -1;
    };
    this.toString=function(){
        var current=head;
        var s=current?current.element:"";
        while(current.next){
            current=current.next;
            s=","+current.element;

        }
        return s;
    };
    this.inverseToString=function(){
        var current=tail;
        var s=current?current.element:"";
        while(current.prev){
            current=current.prev;
            s=","+current.element;
        }
        return s;
    };
    this.remove=function(element){
        var index=this.indexOf(element);
        return this.removeAt(index);
    };
    this.isEmpty=function(){
        return length==0;
    };
    this.size=function(){
        return length;
    };
    this.print=function(){
        console.log(this.toString())
    };
    this.printInverseString=function(){
        console.log(this.toString());
    };
    this.getHead=function(){
        return head;
    };
    this.getTail=function(){
        return tail;
    };

}