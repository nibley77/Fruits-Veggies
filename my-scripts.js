//set count in database
if(localStorage.getItem("count")== null){
localStorage.setItem("count",0)
}

//update html to match count
function update(){
	document.getElementById("count").innerHTML = localStorage.getItem("count")
}

update()

//add one to count
function plusOne(){
	localStorage.setItem("count",Number(localStorage.getItem("count")) + 1)
	update()
}

//reset button function
function reset(){
	if(confirm("Sigurado?")){
		localStorage.setItem("count",0)
		update()

	}
}