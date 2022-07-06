import React, { useContext } from 'react';
import { ApiContext } from '../../MainContext';
import BookCard from './BookCard';
import LoadedBooks from './LoadedBooks';


const Body = () => {

    const { showLoadedBooks }= useContext(ApiContext)
    
    return (
        <section style={{ backgroundColor: "#283618" }}  >
            <div className='container' >
                {
                    showLoadedBooks &&
                    <LoadedBooks />
                }
                
                <BookCard title={'Searched Books'} />      
                    
            </div>
        </section>
    )
}

export default Body;