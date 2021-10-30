import React from 'react';
import 'tachyons'



const Searchbox = ({value, searchfield, searchChange}) => {
    return (
        <div className=''>
            <input 
            className='pa2 georgia ba b--green bg-lightest-blue' 
            placeholder="search robots" 
            type='search'
            onChange = {searchChange}
            />
            {/* <p>{`${value} looks good `}</p> */}
        </div>
        
    )
}

export default Searchbox;