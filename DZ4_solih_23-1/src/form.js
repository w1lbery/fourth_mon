// import React from "react";

// class Name extends React.Component{
// 	constructor(props){

// 		super(props);
// 		this.state = {value: ""}
		
// 		this.handleChange = this.handleChange.bind(this)
// 		this.handleSubmit = this.handleSubmit.bind(this)
// 	}


// 	handleChange(e){
// 		this.setState({value: e.target.value})
// 	}

// 	handleSubmit(e){
// 		alert("Email address : " + this.state.value).input.value = ""
// 		e.preventDefault();
// 	}

// 	render(){
// 		return (
// 			<form onSubmit={this.handleSubmit}>
// 				<h1>Authorization</h1>
// 					<div className="center">
// 					<div className="inputBox">
// 						<input type="name" required="required" className="input" value={this.state.value} onChange={this.handleChange}/>
// 						<span>Name</span>
// 					</div>
// 					<div className="inputBox">
// 						<input type="name" required="required" className="input"/>
// 						<span>Surname</span>
// 					</div>
// 			</div>	
// 				</form>
// 		)
// 	}
// }


// export default Name;