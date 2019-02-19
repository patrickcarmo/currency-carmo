import React from 'react';
import Form from './Form';

const Converter = props => {
	return (
		<div className="content">
			<div className="row justify-content-md-center">
				<div className="card text-center w-50">
					<div className="card-header bg-info text-white">
						Carmo's Currency
					</div>
					<div className="card-body">
						<Form />
					</div>
					<div className="card-footer text-light bg-dark">
						0.00
					</div>
				</div>
			</div>
		</div>
	)
}

export default Converter;