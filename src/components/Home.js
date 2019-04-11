import React, { Component } from 'react'
import { connect } from 'react-redux'

import { Info } from './Info'
import { makeReq } from '../actions' 

export class Home extends Component {
	constructor(props) {
    super(props)
  }
  componentDidMount(){
  	// this.makeReq()
  	console.log('home mount this', this)
  }

  componentDidUpdate(){
  	console.log('updated this', this)
  }
  render = () => {
		return (
			<div>
				<div className="row mx-2 h-100" >
					<div className="mt-4 col-12 col-md-4 mb-2 h"> 
		      	<div className="card h-100"> 
	          	<Info data = {'test'} />
	    		 	</div> 
	   			</div> 
	   			<div className="col-12 col-md-8 mt-4 mb-2">
	          <Info />
	   			</div>
				</div> 		
			</div>	
		)
	}	
}

// export default connect(reduxState => reduxState, { makeReq })(Home)

const mapStateToProps = reduxState => {
  const state = reduxState
  console.log('this home state', state)
  return state
}
export default connect(mapStateToProps)(Home)
// export default connect(mapStateToProps, { makeReq })( Home )
