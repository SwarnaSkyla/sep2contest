import React,{useState} from 'react';


function SearchBar({fetchBooks}){

    const [searchQuery,setSearchQuery]=useState('');

    const handleSearch=()=>{
        fetchBooks(searchQuery);
    };




    return(
        <div className="search-bar">
            <input type="text" value={searchQuery}
            onChange={(e)=>setSearchQuery(e.target.value)}
            placeholder="Search Books ...."/>


            <button onClick={handleSearch}>Search</button>


        </div>
    );
}


export default SearchBar;