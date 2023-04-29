import React from "react";

class Form extends React.Component{
	constructor(props){

		super(props);
		this.state = {value: ""}
		
		this.handleChange = this.handleChange.bind(this)
		this.handleSubmit = this.handleSubmit.bind(this)
	}


	handleChange(e){
		this.setState({value: e.target.value})
	}

	handleSubmit(e){
		alert("Email address : " + this.state.value).input.value = ""
		e.preventDefault();
	}

	render(){
		return (
			<div className="center">
				<h1>Authorization</h1>
				<form onSubmit={this.handleSubmit}>
					<div className="inputBox">
						<input type="email" required="required" className="input" value={this.state.value} onChange={this.handleChange}/>
						<span>Email</span>
					</div>
					<div className="inputBox">
						<input type="password" required="required" className="input"/>
						<span>Password</span>
					</div>
					<div className="btn">
						<input type="submit" value="submit" className="submit"/>
					</div>
				</form>
			</div>	
		)
	}
}


export default Form;

// class EssayForm extends React.Component{
// 	constructor(props){
// 		super(props)
// 		this.state = {
// 			value: "Please, write Essay on your favorite work"
// 		}
		
// 		this.handleChange = this.handleChange.bind(this)
// 		this.handleSubmit = this.handleSubmit.bind(this)
// 	}
	
// 	handleChange(event){
// 		this.setState({value: event.target.value})
// 	}
// 	handleSubmit(event){
// 		alert("Отправленное Эссе : " + this.state.value)
// 		event.preventDefault();
// 	}
	
// 	render(){
// 		return (
// 			<form onSubmit={this.handleSubmit}>
// 				<label>
// 					Эссе: 
// 					<textarea
// 						type="text" 
// 						value={this.state.value} 
// 						onChange={this.handleChange}
// 					/>
// 				</label>
// 				<input type="submit" value="submit"></input>
// 			</form>		
// 		)
// 	}
// }
// class Form extends React.Component{
// 	constructor(props){
// 		super(props)
		
// 		this.state = {value: ""}
		
// 		this.handleChange = this.handleChange.bind()
// 		this.handleSubmit = this.handleSubmit.bind()
// 	}
// 	handleChange(e){
// 		this.setState({value: e.target.value})
// 	}
// 	handleSubmit(e){
// 		alert("Write your company: " + this.state.value)
// 		e.preventDefault();
// 	}
// 	render(){
// 		return(
// 			<form onSubmit={this.handleSubmit}>
// 				<label>
// 					Company: 
// 					<textarea
// 					type="text"
// 					value={this.state.value}
// 					onChange={this.handleChange}
// 					/>
// 				</label>
// 				<input type="submit" value="submit"></input>
// 			</form>
// 		)
// 	}
// }
// export default Form;