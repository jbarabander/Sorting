describe('Bubble Sort', function(){
  it('handles an empty array', function(){
    expect(bubbleSort([])).toEqual([]);
  })
  it('handles a one element array', function(){
    expect(bubbleSort([1])).toEqual([1]);
  })
  it('handles a multi-element array', function(){
    expect(bubbleSort([3,2,1])).toEqual([1,2,3]);
  })
  it('returns the correct number of comps and swaps', function(){
    swapCount = 0;
    compCount = 0;
    var x = [3,2,1];
    bubbleSort(x);
    expect(compCount).toEqual(6);
    expect(swapCount).toEqual(3);
  })
})
//count variable zeroed out before each call

describe('Merge Function', function(){
  it('is able to merge two sorted arrays', function(){
    var arr1 = [1,2,5];
    var arr2 = [3,7,8];
    expect(merge(arr1,arr2)).toEqual([1,2,3,5,7,8]);
  })
})

describe('Split Function', function(){
  it('is able to split one array into two roughly equal halves', function(){
    expect(split([3,4,5,2,1])).toEqual([[3,4,5],[2,1]]);
  })
})

describe('mergeSort Function', function(){
  it('it should be able to sort an arary', function(){
    expect(mergeSort([2,1])).toEqual([1,2]);
  })
})
