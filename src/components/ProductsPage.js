import SearchBar from './SearchBar';
import ProductTable from './ProductTable';

import { useState } from 'react';
import jsonData from './../data.json';

function ProductsPage () {
  const [products, setProducts] = useState(jsonData)
  
  
  const filterItem = term => {
  
    const filtered = products.filter(product => {
      return product.name.toLowerCase().includes(term.toLowerCase)
    })
    
    setProducts([...filtered])
  }
    
  
  return(
      <div>
        <h1>IronStore</h1>
        <SearchBar filteredItem={filterItem}/>
        <ProductTable products={products}/>
      </div>    
  )
}

export default ProductsPage