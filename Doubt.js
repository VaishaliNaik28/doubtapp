import {useState,useRef} from "react";
import emailjs from "@emailjs/browser";

function  Doubt()
{
	const rName = useRef();
	const rDoubt = useRef();

	const[name,setName]= useState("");
	const[doubt,setDoubt]= useState("");
	const[msg,setMsg]= useState("");
	
	const hName = (event) => {setName(event.target.value);}
	const hDoubt = (event) => {setDoubt(event.target.value);}

	const sm = (event) => {
		event.preventDefault();
		let data = {name,doubt};
		emailjs.send("service_1234","template_1234",data,"EtGYL-qqxsFxpX-sr")
		.then(res => {
			setMsg("We will get back to u");
			setName("");
			setDoubt("");
			rName.current.focus();
	})
	.catch(err => console.log("issue " + err));
}

return(
	<>
	<center>
	<h1> Ask Your Doubt </h1>
	<form onSubmit={sm}>
	<input type="text" placeholder="enter your name" onChange={hName} ref={rName}  	value={name}/>
	<br/><br/>
	<textarea placeholder="enter your doubt" rows={5} cols={30} onChange={hDoubt} 	ref={rDoubt} 	value={doubt}></textarea>
	<br/><br/>
	<input type="submit" class="button button1"/>
	</form>
	<h2> {msg} </h2>
	</center>
	</>
);
}
export default Doubt;