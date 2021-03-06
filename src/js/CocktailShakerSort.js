async function cocktailShakerSort(arr, swapFn, peekAt) {
	let left = -1, right = arr.length
	while (++left < --right) { // pointers havent collide
		for (let i = left; i < right; i++) { // move largest element to right
			if (await peekAt(i) > await peekAt(i+1)) await swapFn(i, i+1)
		}
		for (let i = right; i > left; i--) { // move smallest element to left
			if (await peekAt(i) < await peekAt(i-1)) await swapFn(i, i-1)
		}
	}
}

export default cocktailShakerSort
