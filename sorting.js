var swapCount = 0;
var compCount = 0;

function bubbleSort(arr) {
  do {
    var sorted = true;
    for(var i = 1; i < arr.length; i++){
      if(arr[i] < arr[i-1]) {
        swapCount++;
        var temp = arr[i];
        arr[i] = arr[i-1];
        arr[i-1] = temp;
        sorted = false;
      }
      compCount++;
    }
  }while(!sorted);
  return arr;
}

function merge(arr1, arr2) {
  var newArr = [];
  while(arr1.length || arr2.length) {
    var elementToPush = arr1[0] <= arr2[0] ? arr1.shift() : arr2.shift();
    newArr.push(elementToPush);
  }
  return newArr.concat(arr1).concat(arr2);
}

function split(arr) {
  
}
