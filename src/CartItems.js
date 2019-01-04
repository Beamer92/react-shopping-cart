import React from 'react'
import CartItem from './CartItem'

function sum(a,b) { return a+b}

function subtotal({quantity, product: {priceInCents}}){
  return quantity * (priceInCents/100) 
}

function CartItems(props){

    return (
      <div>
        <h1>Cart Items</h1>
        <div className="list-group">
          <div className="list-group-item">
            <div className="row">
              <div className="col-md-8">Product</div>
              <div className="col-md-2">Price</div>
              <div className="col-md-2">Quantity</div>
            </div>
          </div>
          {
            props.cart.map(row => {
              return <CartItem key={row.id} name={row.product.name} price={row.product.priceInCents} quantity={row.quantity}/>
            })
            }
        </div>
        <div> Cart Total: ${props.cart.map(subtotal).reduce(sum)}
        </div>
      </div>
    )
}

export default CartItems