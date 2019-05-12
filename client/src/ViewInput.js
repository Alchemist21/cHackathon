import React from 'react';

class ViewInput extends React.Component {

  componentDidMount() {
    const { drizzle, drizzleState } = this.props;
    console.log(drizzle);
    console.log(drizzleState);
  }
  
  render() {
    return (
    	<div>Input Page</div>
    )
  }
}

export default ViewInput;
