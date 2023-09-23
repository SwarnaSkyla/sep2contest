import React,{useState} from 'react';


function BookItem({book}){
    const [expand,setExpand]=useState(false);

    const handelExpand=()=>{
        setExpand(!expand);
    };

    const handleRead=()=>{
        window.open(book.volumeInfo.previewLink,'_blank');
    };

    const handleMore=()=>{
        window.open(book.volumeInfo.infoLink,'_blank');
    };

    return(
        <div className={`book-item ${expand ? 'expand':''}`}>
           <img src={book.volumeInfo.imageLinks.thumbnail} alt={book.volumeInfo.title}/>
           <h3>{book.volumeInfo.title}</h3>
           {
            expand && (
                <div className="detailss">
                    <p>{book.volumeInfo.description}</p>
                    <button onClick={handleRead}>Read Now</button>
                    <button onClick={handleMore}>More Info</button>
                </div>
            )
           }

           <button onClick={handelExpand}>{expand?'close':'Expand'}</button>
        </div>
    );
}


export default BookItem;