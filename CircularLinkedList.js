/**
 * Created by lc on 2016/8/10.
 */
function CircularLinkedList(){
    function Node(element){
        this.element=element;
        this.next=null;
    }
    var length=0;
    var head=null;
    this.append= function (element) {
        var node=new Node(element);
        var current;
        var index=0;
        if(!head){
            head=node;
        }
        else{
            current=head;
            while(current.next){
                current=current.next;
            }
            current.next=node;
        }
        node.next=head;
        length++;
    };
    this.insert=function(element,position){

        if(position>=0&&position<length){
            var node=new Node(element);
            var current=head;
            var index= 0,previous;
            if(position===0){
                if(!head){
                    head=node;
                }
                else{

                    node.next=current;
                    head=node;
                    current.next=head;
                }
            }
            else if(position==length-1){
               while(current.next!=head){
                   current=current.next;
               }
                current.next=node;
                node.next=head;
            }
            else{
                while(index++<position){
                    previous=current;
                    current=current.next;
                }
                node.next=current;
                previous.next=node;
            }
            length++;
            return true;
        }
        else{
            return false;
        }
    };
    this.removeAt= function (position) {
        var current,index=0;
        var previous;
        if(position>=0&&position<length){
            if(position===0){
                while(current.next!=head){
                    current=current.next;
                }
                head=head.next;
                current.next=head;
            }
            else{
                while(index++<position){
                    previous=current;
                    current=current.next;
                }
                previous.next=current.next;
            }

            length--;
            return current.element;
        }
        else{
            return null;
        }
    };

    this.indexOf=function(element){
        var index=-1;
        var current=head;
        if(element==current.element){
            return 0;
        }
        while(current.next!=head){
            if(element==current.element){
                return index;
            }
            current=current.next;
            index++;
        }
        if(element==current.element){
            return index;
        }
        return -1;
    };
}