let input = document.getElementById('rope-length');
let ans = document.getElementById('result');

function calculateMinCost() {
  //your code here
  let sum = 0;
	let arr = [];
	let str = input.value.split(',');
	for(let num of str){
		arr.push(parseInt(num));
	}

	while(arr.length > 1){
		arr.sort(function(x,y)){
			return a - b;
		}
		let merge = arr[0] + arr[1];
		sum += merge;
		arr.splice(0,2);
		arr.push(merge);
	}
    ans.innerText = sum;
}  
