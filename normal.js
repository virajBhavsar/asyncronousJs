function getName(id){
	const x = {0:"viraj"};

	setTimeout(()=>{
		return x[0];
	},2000)
}

console.log("start");

let name = getName("viraj");
console.log(`name : ${name}`);

console.log("end");