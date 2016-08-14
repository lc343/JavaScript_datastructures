/**
 * Created by lc on 2016/8/9.
 */
function divideBy2(decNumber){
    var remStack=new Stack();
    var rem,binaryString="";
    while(decNumber>0){
        rem=Math.floor(decNumber%2);
        remStack.push(rem);
        decNumber=Math.floor(decNumber/2);
    }
    while(!remStack.isEmpty()){
        binaryString+=remStack.pop().toString();
    }
    return binaryString;
}