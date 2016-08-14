/**
 * Created by lc on 2016/8/11.
 */
function HashCollisionSeparateChaining(){
    var table=[];
    var ValuePair=function(key,value) {
        this.key = key;
        this.value = value;

        this.toString = function () {
            return '[' + this.key + '-' + this.value + ']';
        };
    }
    this.put=function(key,value){
            var position=loseloseHashCode(key);
        if(table[position]==undefined){
            table[position]=new LinkedList();
        }
        table[position].append(new ValuePair(key,value));
       var current=table[position].getHead();
        while(current.next){
            if(current.element.key===key){
                return current.element.value;
            }
            current=current.next;
        }
        if(current.element.key===key){
            return current.element.value;
        }
    };
    this.remove=function(key) {
        var position = loseloseHashCode(key);
        if (table[position] !== undefined) {
            var current = table[position].getHead();
            while (current.next) {
                if (current.element.key === key) {
                    table[position].remove(current.element);
                    if (table[position].isEmpty()) {
                        table[position] = undefined;
                    }
                }
                return true;
            }
            current = current.next;


            if (current.element.key === key) {
                table[position].remove(current.element);
                if (table[position].isEmpty()) {
                    table[position] = undefined;
                }
                return true;
            }
        }
     return false;
    };

}