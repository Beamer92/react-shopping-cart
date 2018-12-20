import React from 'react'

function AddItem(props){
  function handleSubmit(event){
    event.preventDefault()
  }
  
  return (
    <form onSubmit={this.handleSubmit}>
      <input type="number">Quantity</input>
     <select>
       
     </select>
     <input type="submit">Add To Cart</input>
    </form>
  )
}

export default AddItem