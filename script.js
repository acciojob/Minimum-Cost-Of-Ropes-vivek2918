const input = document.getElementById('rope-lengths');
const result = document.getElementById('result');
function calculateMinCost() {
	let sum = 0;
	let arr = [];
	let inputStr = input.value.split(',');
	for (let num of inputStr) {
		arr.push(parseInt(num));
	}

	while (arr.length > 1) {
		arr.sort(function(a, b){
			return a - b;
		});
		let mergedRope = arr[0] + arr[1];
		sum += mergedRope;
		arr.splice(0, 2);
		arr.push(mergedRope);
	}
	result.innerText = sum;
}  
