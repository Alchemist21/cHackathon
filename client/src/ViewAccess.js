import React from 'react';

class ViewAccess extends React.Component {
	componentDidMount() {
		const { drizzle, drizzleState } = this.props;
		console.log(drizzle);
		console.log(drizzleState);
	}

	render() {
		 return (
			              <div>Access Page</div>
			          )
		    }
}

export default ViewAccess;

