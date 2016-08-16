/**
 * Created by lc on 2016/8/12.
 */
function ArrayList() {
    var array = [];
    this.insert = function (item) {
        array.push(item);
    };
    this.toString = function () {
        return array.join();
    };
//冒泡排序
    this.bubbleSort = function () {
        var length = array.length;
        for (var i = 0; i < length; i++) {
            for (var j = 0; j < length - 1; j++) {
                if (array[j] > array[j + 1]) {
                    swap(j, j + 1);
                }
            }
        }
    };
//交换数组的两个值
    function swap(index1, index2) {
        var temp = array[index1];
        array[index1] = array[index2];
        array[index2] = temp;
    }

//改进的冒泡排序
    this.modifiedBubbleSort = function () {
        var length = array.length;
        for (var i = 0; i < length; i++) {
            for (var j = 0; j < length - 1 - i; j++) {
                if (array[j] > array[j + 1]) {
                    swap(j, j + 1);
                }
            }
        }
    };
//选择排序
    this.selectionSort = function () {
        var length = array.length;
        for (var i = 0; i < length; i++) {
            var indexMin = i;
            for (var j = i; j < length; j++) {
                if (array[i] > array[j]) {
                    indexMin = j;
                }
            }
            if (indexMin !== i) {
                swap(i, indexMin);
            }
        }
    };
//插入排序
    this.insertSort = function () {
        var length = array.length;
        var i, j, temp;
        for (i = 1; i < length; i++) {
            j = i;
            temp = array[i];
            while (j > 0 && array[j - 1] > temp) {
                array[j] = array[j - 1];
                j = j - 1;
            }
            array[j] = temp;
        }
    };
//快速排序
    this.quickSort=function(){
        quickSortNode(array);
    };

    var quickSortNode = function (arr) {
        if (arr.length <= 1) {
            return arr;
        }
        var pivotIndex = Math.floor(arr.length / 2);
        var pivot = arr.splice(pivotIndex,1)[0];//把基准取出来,最后连回去
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



}