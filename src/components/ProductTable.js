import ProductRow from "./ProductRow"
import productsPage from "./productsPage"

function ProductTable (props) {

  return(
      <div>ProductTable
        <table>
          <tr>
              <th>Name</th>
              <th>Price</th>
          </tr>
          {props.Products.map( (product)=> {
              return(
              <ProductRow name={product.name} 
                          price={product.price} 
                          key={product.id}
                          inStock={product.inStock}
                          />
              )
          })}
        </table>
      </div>    
  )
}
  
  export default ProductTable