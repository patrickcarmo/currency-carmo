import React, { Component } from 'react';
import CoinList from './CoinList';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { convertCurrencies } from '../actions'

class Form extends Component {
	constructor(props) {
		super(props);
		this.state = {
			from: '',
			to: '',
			amount: 0
		}

		this.onValueChange = this.onValueChange.bind(this);
		this.onValueFromChange = this.onValueFromChange.bind(this);
		this.onValueToChange = this.onValueToChange.bind(this);
		this.onButtonClick = this.onButtonClick.bind(this);
	}

	onValueChange(e) {
		this.setState({ amount: e.target.value });
	}

	onValueFromChange(e) {
		this.setState({ from: e.target.value });
	}

	onValueToChange(e) {
		this.setState({ to: e.target.value });
	}

	onButtonClick() {
		const data = {
			from: this.state.from,
			to: this.state.to,
			amount: this.state.amount

		}
		this.props.convertCurrencies(data);
	}

	render() {
		return (
			<form>
				
				<div className="input-group input-group-lg">
					<div className="input-group-prepend">
						<span className="input-group-text">$</span>
					</div>
					<input type="number" className="form-control" onChange={(e) => this.onValueChange(e)} />
				</div>
				
				
				<div className="row form-group">
					<div className="col-md-6">
						<label htmlFor="from">From:</label>
						<CoinList source ="from" onValueChange={this.onValueFromChange} />
					</div>
					<div className="col-md-6">
						<label htmlFor="to">To:</label>
						<CoinList source="to" onValueChange={this.onValueToChange} />
					</div>
				</div>
			
				<button type="button" className="btn btn-primary btn-lg btn-block" onClick={this.onButtonClick}>Converte</button>
			</form>
		)
	}	
}

const mapDispatchToProps = (dispatch) => {
	return bindActionCreators({convertCurrencies}, dispatch)
}
export default connect(null, mapDispatchToProps)(Form);