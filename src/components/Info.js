import React, { useState } from 'react'

export function Info(props){
  console.log(props)
  return (
    <div className="card border-0" style={{height: '500px'}}>
      <div className="row no-gutters">
        <div className="col">
          <div className= "card bg-warning" style={{height: '500px'}}>
            <div className="card-header">
              <h5>FDRA 1</h5> 
            </div>
            <div className="card-body">
              <h5 className="card-title">Fire Danger Level: text</h5>
              <p className="card-text">Precautionary Actions: text</p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className= "card bg-warning" style={{height: '500px'}}>
            <div className="card-header">
              <h5>FDRA 2</h5>
            </div>
            <div className="card-body">
              <h5 className="card-title">Fire Danger Level: text</h5>
              <p className="card-text">Precautionary Actions: text</p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className= "card bg-warning" style={{height: '500px'}}>
            <div className="card-header">
              <h5>FDRA 3</h5>
            </div>
            <div className="card-body">
              <h5 className="card-title">Fire Danger Level: text</h5>
              <p className="card-text">Precautionary Actions: text </p>
            </div>
          </div>
        </div>  
      </div>  

    </div>        
  )
}



