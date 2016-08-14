/**
 * Created by lc on 2016/8/9.
 */
function LinkedList(){
    var Node=function(element){
      this.element=element;
        this.next=null;
    };
    var length=0;
    var head=null;
    this.append=function(element){
      var node=new Node(element);
        var current;

        if(head==null){
            head=node;
        }
        else{
            current=head;
            while(current.next){
                current=current.next;
            }
            current.next=node;
        }
        length++;
    };
    this.removeAt=function(position){
      if(position>-1 && position<length){
          var current=head;
          var previous,index=0;
          if(position===0){
              head=current.next;
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
    this.insert=function(position,element){
        if(position>=0&&position<=length){
            var node=new Node(element);
            var current=head,previous,index=0;
            if(position==0){
                node.next=current;
                head=node;
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
    this.toString=function(){
      var current=head;
        var string='';
        while(current){
            string=current.element;
            current=current.next;
        }
        return string;
    };
    this.indexOf=function(element){
        var current=head;
        var index=-1;
        while(current){
            if(current.element===element){
                return index;
            }
            index++;
            current=current.next;
        }
        return -1;
    };
    this.remove=function(element){
        var index=this.indexOf(element);
        return this.removeAt(index);
    };
    this.getHead=function(){
        return head;
    }
}

var list=new LinkedList();
list.append(15);
list.append(10);