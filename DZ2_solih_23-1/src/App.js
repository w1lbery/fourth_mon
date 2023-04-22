import React from "react";

class Square extends React.Component{
	render() {
		return <button className="square">{this.props.value}</button>
	}
}


class Board extends React.Component{
	renderSquare(i){
		return<Square value ={i}/>
	}
	render() {
		const status = "Next player : X"

		return(
		<div>
			<div className="status">{status}</div>
			<div className="board-row">
				{this.renderSquare(0)}
				{this.renderSquare(1)}
				{this.renderSquare(2)}
			</div>
			<div className="board-row">
				{this.renderSquare(4)}
				{this.renderSquare(3)}
				{this.renderSquare(5)}
			</div>
			<div className="board-row">
				{this.renderSquare(6)}
				{this.renderSquare(7)}
				{this.renderSquare(8)}
			</div>
		</div>
		)
	}
}

class Game extends React.Component {
	render() {
		return (
		<div className="game">
			<div className="game-board">
				<Board/>
			</div>
			<div className="game-info">
				<div></div>
				<ol></ol>
			</div>
		</div>
		)
	}
}

export default Game;


































// import { Remarkable } from "remarkable";

// class Plice extends React.Component {
// 	constructor(props) {
// 		super (props);
// 		this.hadleChange = this.hadleChange.bind(this)
// 		this.state = {value : "привет егор"}
// 	}

// 	hadleChange(e) {
// 		this.setState({value : e.target.value})
// 	}

// 	getRawMarkup() {
// 		const md = new Remarkable() 
// 		return {__html: md.render(this.state.value)}
// 	}

// 	render() {
// 		return (
// 			<div className="Plice">
// 				<h3>Входные данные</h3>
// 				<label htmlFor="markdown-content">
// 					Ввкдите что-то в формате Plice
// 				</label>
// 				<textarea id="markdown-content" onChange={this.hadleChange} defaultValue={this.state.value}/>
// 				<h3>Вывод</h3>
// 				<div className="content" dangerouslySetInnerHTML={this.getRawMarkup()}></div>
// 			</div>			
// 		)
// 		}
// }

