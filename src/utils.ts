//! stable.js 0.1.5, https://github.com/Two-Screen/stable
//! © 2014 Angry Bytes and contributors. MIT licensed.

// A stable array sort, because `Array#sort()` is not guaranteed stable.
// This is an implementation of merge sort, without recursion.

export function stableSort(arr, comp) {
    var result = exec(arr, comp);

    // This simply copies back if the result isn't in the original array,
    // which happens on an odd number of passes.
    if (result !== arr) {
        pass(result, null, arr.length, arr);
    }

    return arr;
};

// Execute the sort using the input array and a second buffer as work space.
// Returns one of those two, containing the final result.
function exec(arr, comp) {
    if (typeof(comp) !== 'function') {
        comp = function(a, b) {
            return String(a).localeCompare(b);
        };
    }

    // Short-circuit when there's nothing to sort.
    var len = arr.length;
    if (len <= 1) {
        return arr;
    }

    // Rather than dividing input, simply iterate chunks of 1, 2, 4, 8, etc.
    // Chunks are the size of the left or right hand in merge sort.
    // Stop when the left-hand covers all of the array.
    var buffer = new Array(len);
    for (var chk = 1; chk < len; chk *= 2) {
        pass(arr, comp, chk, buffer);

        var tmp = arr;
        arr = buffer;
        buffer = tmp;
    }

    return arr;
}

// Run a single pass with the given chunk size.
var pass = function(arr, comp, chk, result) {
    var len = arr.length;
    var i = 0;
    // Step size / double chunk size.
    var dbl = chk * 2;
    // Bounds of the left and right chunks.
    var l, r, e;
    // Iterators over the left and right chunk.
    var li, ri;

    // Iterate over pairs of chunks.
    for (l = 0; l < len; l += dbl) {
        r = l + chk;
        e = r + chk;
        if (r > len) r = len;
        if (e > len) e = len;

        // Iterate both chunks in parallel.
        li = l;
        ri = r;
        while (true) {
            // Compare the chunks.
            if (li < r && ri < e) {
                // This works for a regular `sort()` compatible comparator,
                // but also for a simple comparator like: `a > b`
                if (comp(arr[li], arr[ri]) <= 0) {
                    result[i++] = arr[li++];
                }
                else {
                    result[i++] = arr[ri++];
                }
            }
            // Nothing to compare, just flush what's left.
            else if (li < r) {
                result[i++] = arr[li++];
            }
            else if (ri < e) {
                result[i++] = arr[ri++];
            }
            // Both iterators are at the chunk ends.
            else {
                break;
            }
        }
    }
};

export function assign(target, other) : any{
  if (target === undefined || target === null) {
	throw new TypeError('Cannot convert first argument to object');
  }

  var to = Object(target);
  for (var i = 1; i < arguments.length; i++) {
	var nextSource = arguments[i];
	if (nextSource === undefined || nextSource === null) {
	  continue;
	}
	nextSource = Object(nextSource);

	var keysArray = Object.keys(Object(nextSource));
	for (var nextIndex = 0, len = keysArray.length; nextIndex < len; nextIndex++) {
	  var nextKey = keysArray[nextIndex];
	  var desc = Object.getOwnPropertyDescriptor(nextSource, nextKey);
	  if (desc !== undefined && desc.enumerable) {
		to[nextKey] = nextSource[nextKey];
	  }
	}
  }
  return to;
}

export function aRemove(arr:any, obj:any) : boolean {
	var i = arr.indexOf(obj);
	if(i >= 0) {
		arr.splice(i, 1);

		return true;
	}

	return false;
}

declare global {
	interface Array<T> {
		stableSort(comp:Function);
		remove(obj:any):boolean;
	}
}

Array.prototype.stableSort = function(comp:Function) {
	stableSort(this, comp);
}

Array.prototype.remove = function(obj:any) {
	return aRemove(this, obj);
}

