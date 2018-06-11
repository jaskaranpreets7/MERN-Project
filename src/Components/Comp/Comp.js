import React, { Component } from 'react'

const Comp = () => {
    return (
      <div>
        <div className='text'>{this.props.match.params.id}</div>
      </div>
    )
}
export default Comp;
