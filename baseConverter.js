/**
 * Created by lc on 2016/8/9.
 */
function baseConverter(decNumber,base){
    var remStack=new Stack();
    var rem,baseString='',digits='0123456789ABCDEF';
    while(decNumber>0){
        rem=Math.floor(decNumber%base);
        remStack.push(rem);
        decNumber=Math.floor(decNumber/base);
    }
    while(!remStack.isEmpty()){
        baseString+=remStack.pop().toString();
    }
    return baseString;
}