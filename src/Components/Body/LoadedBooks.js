import React, { useContext, useState } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/esm/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro'
import { ApiContext } from '../../MainContext';
import LoadedModal from './LoadedModal';
import Tippy from '@tippy.js/react';
import 'tippy.js/dist/tippy.css'

const LoadedBooks = () => {
    const { loadedBooks, loadedModalSHowHandler, modalItem, setModalItem, addtoFavHome, heartColor, heartColorHandler } = useContext(ApiContext)



    return (
        <section>
            <div className="container" style={{ marginLeft: '5rem' }}>
                <div className="row">
                    {
                        loadedBooks.map((loadedItem, index) => {
                            // console.log(loadedItem);
                            let thumbnail = loadedItem.volumeInfo.imageLinks && loadedItem.volumeInfo.imageLinks.smallThumbnail;
                            let author = loadedItem.volumeInfo.authors
                            let title = loadedItem.volumeInfo.title

                            if (thumbnail !== undefined && author !== undefined && title !== undefined) {
                                return (
                                    <>
                                        <Card key={index} style={{ height:"25rem", width: '10rem', marginTop: "1rem", marginRight: '2rem', marginBottom: '2rem', backgroundColor:"#f77f00" }}>
                                            <Card.Img variant="top" style={{ marginTop: "1rem", height: "7rem", width: "8rem" }} alt="Image Not Found" src={thumbnail} />
                                            <Card.Body>
                                                <Card.Title style={{ marginTop:"1rem", fontFamily: "Poppins,sans-serif", color: "red", fontSize: "12px" }}>{title}</Card.Title>
                                                <Card.Text style={{ fontFamily: "Manrope,sans-serif", fontSize:"10px", fontWeight:"bolder" }}>
                                                    {author}
                                                </Card.Text>

                                                <Button onClick={() => { loadedModalSHowHandler(); setModalItem(loadedItem) }} style={{bottom:"1rem"}} variant="primary" size="sm">More...</Button>

                                                <Tippy content="Add to Favourites">
                                                    
                                                    < FontAwesomeIcon onClick={() => { addtoFavHome(loadedItem); heartColorHandler(loadedItem)}} style={{ marginLeft: '1rem', color: heartColor ? 'red' : 'black' }} icon={solid('heart')} />                                                    
                                                </Tippy>

                                            </Card.Body>
                                        </Card>
                                        <LoadedModal modalItem={modalItem} />
                                    </>
                                )
                            }
                        })
                    }



                </div>
            </div>
        </section>
    )
}

export default LoadedBooks;