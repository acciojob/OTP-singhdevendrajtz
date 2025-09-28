//your JS code here. If required.
const boxes=document.querySelectorAll(".code")
boxes.forEach((x,y)=>{
	boxes[y].addEventListener('keyup',function(){
		if(boxes[y].length!=0 && y!=boxes.length-1)
		{
			boxes[y].nextElementSibling.focus()
		}
	})
});
boxes.forEach((x,y)=>{
	boxes[y].addEventListener('keyup',function(){
		let KeyID = event.keyCode;
		 if(KeyID==8 && y!=0)
		 {
			// boxes[y].value="";
		 	boxes[y].previousElementSibling.focus()
		 }
		//console.log(KeyID)
					
	})
});
 function focused(x)
 {
console.log(x.value)
 }