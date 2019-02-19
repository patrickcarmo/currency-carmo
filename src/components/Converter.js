import React from 'react';
import Form from './Form';
import { connect } from 'react-redux';

const Converter = props => {
	return (
		<div className="content">
			<div className="row justify-content-md-center">
				<div className="card text-center w-50">
					<div className="card-header bg-info text-white">
						Carmo's Currency
					</div>
					<div className="card-body">
						<Form  />
					</div>
					<div className="card-footer text-light bg-dark">
						{/* {
							props.converter.quotes && 
							props.converter.quotes[Object.keys(props.converter.quotes)[0]] * 10
						} */}
						{JSON.stringify(props.converter.quotes)}
					</div>
				</div>
			</div>
		</div>
	)
}

const mapStateToProps = (state) => {
	return {
		converter: state.converter
	};
}
export default connect(mapStateToProps, null)(Converter);