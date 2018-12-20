import React from 'react'
import ReactDOM from 'react-dom'

class App extends React.Component {
	render() {
		return (
			<button
				className="prettier-class"
				id="prettier-id"
				onClick={this.handleClick}>
				Click Here
			</button>
		)
	}
}

export default App
