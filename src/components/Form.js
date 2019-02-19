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
					<label htmlFor="from">From:</label>
					<CoinList source ="from" />
				</div>
				<div className="col-md-6">
					<label htmlFor="to">To:</label>
					<CoinList source="to" />
				</div>
			</div>
		
			<button type="submit" className="btn btn-primary btn-lg btn-block">Converte</button>
		</form>
	)
}

export default Form;