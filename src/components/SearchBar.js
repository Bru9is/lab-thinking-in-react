import React, { useState } from 'react';

function SearchBar (props) {
  const {filteredItem} = props
  const [term, setTerm] = useState('')

  const handleSearch = e => {
    filteredItem(e.target.value)
    setTerm(e.target.value)
  }
      
    return(
        <div>
          <input 
            type="text" 
            placeholder="search.." 
            value={term}
            onChange={handleSearch} />
        </div>    
    )
  }
  
  export default SearchBar