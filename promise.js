function getName(id){
	const x = {0:"viraj"};

	return new Promise((resolve,error)=>{
		setTimeout(()=>{
				resolve(x[id]);
			},2000);
	});
}

console.log("start");

getName(0).then((name)=>{
	console.log(name);
});


console.log("end");