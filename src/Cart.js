import React from 'react'

const Cart = (props) => {
// console.log(props.delc)

  return (
    <div style={{backgroundColor: "rgb(44, 198, 131)"}}>
        
        {props.cartLst.map((item, ind) => <div key={ind}> {item.desc}{" "}{item.price}
        <button onClick={()=>props.delc(ind)}>Delete</button>
        </div>)}

    </div>
  )
}

export default Cart