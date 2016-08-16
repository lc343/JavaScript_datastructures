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
//ð������
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
//�������������ֵ
    function swap(index1, index2) {
        var temp = array[index1];
        array[index1] = array[index2];
        array[index2] = temp;
    }

//�Ľ���ð������
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
//ѡ������
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
//��������
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



}