import React,{useState,useEffect} from 'react';
import SearchBar from './Component/SearchBar';
import BookList from './Component/BookList';



const url='https://www.googleapis.com/books/v1/volumes';

function App(){

    const[books,setBooks]=useState([]);

    useEffect(()=>{
        fetchBooks('harry potter');
        fetchBooks('sherlock holmes');
    },[]);

    const fetchBooks=async(query)=>{
        try{
            const encodeQuery=encodeURIComponent(query);
            const response=await fetch(`${url}?q=${encodeQuery}`);
            const data=await response.json();
            if(data.items){
                setBooks(data.items);
            }

        }
        catch(error){
            console.error("Error:",error);
        };
    }


    return (
        <div className="App">
            <SearchBar fetchBooks={fetchBooks}/>
            <BookList books={books}/>

        </div>
    );
}


export default App;