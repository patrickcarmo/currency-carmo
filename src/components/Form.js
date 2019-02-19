import React from 'react';
import CoinList from './CoinList';

const Form = props => {
	return (
		<form>
			
			<div className="input-group input-group-lg">
				<div className="input-group-prepend">
					<span className="input-group-text">$</span>
				</div>
				<input type="number" className="form-control" />
			</div>
			
			
			<div className="row form-group">
				<div className="col-md-6">
					<label htmlFor="formSelectFrom">From:</label>
					<CoinList source ="" />
				</div>
				<div className="col-md-6">
					<label htmlFor="formSelectTo">To:</label>
					<CoinList source="" />
				</div>
			</div>
		
			<button type="button" className="btn btn-primary btn-lg btn-block">Converte</button>
		</form>
	)
}

export default Form;