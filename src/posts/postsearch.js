import React, { useState } from 'react';
import ObjectData from '../data/users.json';
import '../App.css';

function PostSearch() {
  const [searchItem, setSearchItem] = useState("");

  const handleSearchChange = (event) => {
    setSearchItem(event.target.value.toLowerCase());
  };

  return (
    <div className="search-container">
      <input
        className='search-input'
        type="text"
        placeholder='Search here'
        value={searchItem}
        onChange={handleSearchChange}
      />

      <div className="results-container">
      {ObjectData.filter((val)=> {
                if (searchItem ==="") {
                    return "";
                }
                else if (val.name.toLowerCase().includes(searchItem)) {
                    return val;
                }
            }).map((object, index) => {
                        return (
                            <div>
                                <div> 
                                {object.name}, {object.email}
                                </div>
                            </div>
                        );
                    })}
      </div>
    </div>
  );
}

export default PostSearch;
