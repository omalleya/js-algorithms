function mergesort(array){
  if(array.length === 1) {
    return [array[0]];
  }

  var mid = array.length >> 1;
  var left = mergesort(array.slice(0,mid));
  var right = mergesort(array.slice(mid,array.length));
  var joined = merge(left, right);

  return joined;

}

function merge(left, right){
  var n = left.length + right.length;
  var i = 0;
  var j = 0;
  var final = [];

  for(let k = 1; k <= n; k++) {

    if(j>right.length-1)
      final.push(left[i++]);

    else if(i>left.length)
      final.push(right[j++]);

    else if(left[i] < right[j])
      final.push(left[i++]);

    else
      final.push(right[j++]);

  }

  return final;

}

module.exports = {mergesort};
