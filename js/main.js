// GO!

// TASK 1 -- Show/Hide Nav

let containerNav = document.querySelector("nav")
const btnNav = document.querySelector("#hide-nav button")

btnNav.addEventListener("click", hide)

function hide(){
	console.log("damian")
	containerNav.classList.toggle("nav-menu-hidden")

}


/*

 document.querySelector(".onlyAdmin").classList.add("show")
  }else{
    document.querySelector(".onlyAdmin").classList.remove("show")

*/

//


// TASK 2 -- Select an Icon
const changeBox = document.querySelectorAll(".wish-list .option")
const arrayColor = [...changeBox]
for(let i = 0; i < arrayColor.length; i++){
	arrayColor[i].addEventListener("click", changeColor)
}

function changeColor(event) {
	//console.log("Damian")

	const item = event.currentTarget
	item.classList.toggle("selected")
}

// TASK 3 -- Move Item From List to List

const itemPlus = document.querySelectorAll(".point")
const result = document.querySelector(".total-points")
let resultNum = parseInt(result.textContent)



const arryPoints = [...itemPlus]

for(let i = 0; i < arryPoints.length; i++ ){
	arryPoints[i].addEventListener("click", plus)

}

function plus (event){
	let num = parseInt(event.target.textContent)

	//console.log("Damian")
	result.textContent = resultNum += num
}

// TASK 4 -- Add Guest to List
const listUl = document.querySelectorAll("#list-2-list ul") 
const arrayListUl = [...listUl]

const good = arrayListUl[0]
const probation =  arrayListUl[1]

const list = document.querySelectorAll("#list-2-list li") 
const arrayList = [...list]
//console.log(arrayList)
for(let i = 0; i < arrayList.length; i++ ){
	//console.log(arrayList[i])
	const item = arrayList[i]
	

	item.addEventListener("click", cambio)
	//console.log(item.parentNode)
	//const nameClass = item.parentNode.classList
}



function cambio(event){
	var item = event.target
	//console.log(item.parentNode.nodeName)
	//var className = ""
	
	//console.log(item.parentNode.classList)
		//console.log(item.parentNode.classList)

		if(item.parentNode === good) {
			//console.log("DAmian")
			probation.appendChild(item);
			//let aparence = item.parentNode = probation
			//item.parentNode.appendChild(probation)
		}else if(item.parentNode === probation) {
			good.appendChild(item);
			//console.log("ssssssss")
			//let aparence = item.parentNode = good
			//item.parentNode.appendChild(good)
		}
	
	//document.querySelector("ul." + className).appendChild(item)
	//element.classList por sí mismo es de sólo lectura, aunque puede ser modificado usando los métodos add() y remove().


}



// TASK 5 -- (Adventure Mode)-- Add + Remove Item From List
