/**
 * Created by lc on 2016/8/13.
 */
function ArrayList(){
    var array=[];
    this.toString=function(){
      return array.join();
    };
    this.insert=function(item){
        array.push(item);
    };
    //��������
    this.quickSort=function(){
        quickSortNode(array);
    };

    var quickSortNode = function (arr) {
        if (arr.length <= 1) {
            return arr;
        }
        var pivotIndex = Math.floor(arr.length / 2);
        var pivot = arr.splice(pivotIndex,1)[0];//�ѻ�׼ȡ����,�������ȥ
        var left = [];
        var right = [];


        for (var i = 0; i < arr.length; i++) {
            if (arr[i] < pivot) {
                left.push(arr[i]);
            }
            else {
                right.push(arr[i]);
            }
        }
        return quickSortNode(left).concat(pivot, quickSortNode(right));
    }

    //˳������
    this.sequentialSearch=function(item){
        for(var i=0;i<array.length;i++){
            if(item===array[i]){
                return i;
            }
        }
        return -1;
    };
    //��������
    this.binarySearch=function(item){
        this.quickSort();
        var low=0;
        var high=array.length-1;
        var mid,element;

        while(low<=high){
            mid=Math.floor((low+high)/2);
            element=array[mid];
            if(item>element){
                low=mid+1;
            }
            else if(item <element){
                high=mid-1;
            }
            else{
                return mid;
            }
        }
        return -1;
    };
}