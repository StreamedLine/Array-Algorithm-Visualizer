import React from 'react';
import currentArray from '../state/currentArray';

class ArrayForm extends React.Component {
	constructor() {
		super();

		this.state = {
			valid: true,
			value: ''
		}
	}

	handleChange = (e) => {
		let str = e.target.value;
		const valid = !!str.match(/^[\d,]*$/);
		if (valid) {
			while (str.indexOf(',,') != -1) {
				str = str.slice(0, str.indexOf(',,')) + str.slice(str.indexOf(',,') + 1);
			}
		}
		this.setState({valid: valid, value: str});
	}

	render() {
		let className = this.state.valid ? '' : 'badInput';
		return (
			<div>
				<h3>Enter New Array Here</h3>
				<p>With comma separated number, like so: 9,1,3,2,6,0,2,5</p>
				<input type="text" className={className} onChange={this.handleChange} value={this.state.value} />
				<input type="submit" value="submit" />
			</div>
		)
	}
}

export default ArrayForm;