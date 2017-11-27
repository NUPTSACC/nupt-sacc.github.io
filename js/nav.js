let wheel = {
	pre_wheel: 0, //Previous wheel position
	cur_wheel: 0, //Current wheel position
	wheel_time: false, //Whether to load an animation
	on_top: false, //Wheel at the top
	on_bottom: false //Wheel at the bottom
}

let navscroll =() =>{
	let header = document.getElementById("hea_pc")
	wheel.cur_wheel = document.body.scrollTop
	if(wheel.cur_wheel>wheel.pre_wheel){
		header.style.cssText = "animation: header_shrink 1s forwards;"
		wheel.wheel_time=false
	} else{
		if(!wheel.wheel_time){
		header.style.cssText = "animation: header_expand 1s forwards;"
		wheel.wheel_time=true
		setTimeout(()=>{
			header.style.cssText = "animation: header_shrink 1s forwards;"
			wheel.wheel_time=false
		}, 5000)
		}
	}
	wheel.pre_wheel=wheel.cur_wheel
}

//When the page is refreshed , determine the wheel positon 
let navload =() => {
	let header = document.getElementById("hea_pc")
	header.onmouseover=()=>{
		header.style.cssText = "background: rgba(83,83,83,0.5);"
	}
	header.onmouseout=()=>{
		setTimeout(()=>{
			header.style.cssText = "animation: header_shrink 1s forwards;"
		}, 2000)
	}
    if (document.body.scrollTop === 0) {
		wheel.on_top = true
	} else {
		wheel.on_top = false
	}
    if (!(wheel.on_top)) {
		setTimeout(()=>{
			header.style.cssText = "animation: header_shrink 1s forwards;"
		}, 5000)
	} else {
		header.style.cssText = "background: rgba(83,83,83,0);"
	}
	if (document.body.scrollTop + window.screen.height >= document.body.scrollHeight) {
		wheel.on_bottom = true
	} else {
		wheel.on_bottom = false
	}
}
window.onload = ()=>{
	navload()
}
window.onscroll = ()=>{
	navscroll()
}
