import React from "react";
import { Remarkable } from "remarkable";

class Plice extends React.Component {
	constructor(props) {
		super (props);
		this.hadleChange = this.hadleChange.bind(this)
		this.state = {value : "привет егор"}
	}

	hadleChange(e) {
		this.setState({value : e.target.value})
	}

	getRawMarkup() {
		const md = new Remarkable() 
		return {__html: md.render(this.state.value)}
	}

	render() {
		return (
			<div className="Plice">
				<h3>Входные данные</h3>
				<label htmlFor="markdown-content">
					Ввкдите что-то в формате Plice
				</label>
				<textarea id="markdown-content" onChange={this.hadleChange} defaultValue={this.state.value}/>
				<h3>Вывод</h3>
				<div className="content" dangerouslySetInnerHTML={this.getRawMarkup()}></div>
			</div>			
		)
		}
}


// function Welcome(props) {
//   return (
//     <h1>Hi, {props.name}</h1>
//   );
// }

// function App() {
//   return(
//     <div>
//       <Welcome name="Sara"/>
//       <Welcome name="Marlen"/>
//       <Welcome name="Eric"/>
//     </div>
//   )
// }

// // class Welcome extends React.Component {
// //   render() {
// //     return <h1>Hi, {this.props.name}</h1>
// //   }
// // }

export default Plice;
