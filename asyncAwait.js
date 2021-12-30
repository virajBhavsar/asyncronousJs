function getName(id){
	const x = {0:"viraj"};

	return new Promise((resolve,error)=>{
		setTimeout(()=>{
				resolve(x[id]);
			},2000);
	});
}

console.log("start");
async function fun() {
	console.log("getting data....")
	const name = await getName(0);
	console.log(name);
}

fun();
console.log("end");