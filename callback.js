function getName(id,callback){
	const x = {0:"viraj"};
	
	setTimeout(()=>{
		callback(x[0]);
	},2000)
}

console.log("start");

let name = getName("viraj",(name)=>{
	console.log(`name : ${name}`);
});

console.log("end");