import React, {Component} from 'react'

class AddItem extends Component{
  
  constructor(props){
    super(props)

    this.state = {
      product: props.products[0].id,
      newQty: 0
    }
  }

  handleSubmit = (event) => {
    event.preventDefault()
    if(this.state.newQty === 0) return
    const prod = this.props.products.find(x => x.id === this.state.product)
    const prodToAdd = {product: {prod}, quantity: this.state.newQty}
    this.props.addItemToCart(prodToAdd)
   
    this.setState({
      product: this.props.products[0].id,
      newQty: 0
    })
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name] : parseInt(event.target.value)
    })
  }
  
  render() {
    return (
      <form onSubmit={this.handleSubmit} >

      <div className="form-group row">
      <label for="pSelect" className="col-sm-2 col-form-label">Add Product</label>
        <select id="pSelect" name="product" className="custom-select col-sm-4" value={this.state.product} onChange={this.handleChange}>
            {this.props.products.map(prod => 
              <option value={prod.id}>{prod.name}</option>
            )}
          </select>
      </div>

      <div className="form-group row">
        <label for="qty" className="col-sm-2 col-form-label">Quantity</label>
        <input id='qty' type="number" name="newQty" className="form-control col-sm-3" value={this.state.newQty} onChange={this.handleChange}/>
      </div>
       
       <input type="submit" className="btn btn-primary"/>
      </form>
    )
  } 
}

export default AddItem

          /* <option value="grapefruit">Grapefruit</option> */