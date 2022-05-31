function ProductRow (props) {
    console.log(typeof props.inStock)
    console.log(props.inStock)
    const nameColor = props.inStock ? 'black' : 'red'
  
  return(
      <tr>
          <td className={nameColor}> {props.name} </td>
          <td>{props.price}</td>
      </tr>
  )
}

export default ProductRow