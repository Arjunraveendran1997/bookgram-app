import React, { useContext } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro'
import { ApiContext } from '../../MainContext';
import Tippy from '@tippy.js/react';
import 'tippy.js/dist/tippy.css'

function Favourites() {
    const { favItemsFromHome, remFromFavHome } = useContext(ApiContext)
    console.log(favItemsFromHome);
    const favLength=favItemsFromHome.length

    return (
        <section style={{ backgroundColor: "#283618", height: '100vh' }}>
            <div className="container" style={{ height: '100%', backgroundColor: "#283618" }}>
                <div className="row">
                    
                      {
                        favLength <= 0 &&
                        <h1 style={{ fontFamily: "Poppins,sans-serif", color: '#fb8500',textAlign:"center",marginTop:"10rem" }}>
                            No Favorite Book Found
                        </h1>
                      }
                    {
                        favItemsFromHome.map((item,index) => {
                            let thumbnail = item.volumeInfo.imageLinks && item.volumeInfo.imageLinks.smallThumbnail;
                            let author = item.volumeInfo.authors
                            let title = item.volumeInfo.title

                            if (thumbnail !== undefined && author !== undefined && title !== undefined) {

                                return (
                                    <>
                                        <Card key={index} style={{ height: "25rem", width: '12rem', marginTop: "1rem", marginRight: '2rem', marginBottom: '2rem', backgroundColor: "#f77f00" }}>
                                            <Card.Img style={{ marginTop: "1rem", height: "8rem", width: "10rem" }} variant="top" src={thumbnail} />
                                            <Card.Body>
                                                <Card.Title style={{ marginTop: "1rem", fontFamily: "Poppins,sans-serif", color: "red", fontSize: "12px" }}>{title}</Card.Title>
                                                <Card.Text style={{ fontFamily: "Manrope,sans-serif", fontSize: "10px", fontWeight: "bolder", color: 'black' }}>
                                                    {author}
                                                </Card.Text>
                                                <Button variant="primary" size='sm'>more...</Button>

                                               <Tippy content="Remove from Favourites">   
                                                <FontAwesomeIcon onClick={()=>remFromFavHome(item)} style={{ marginLeft: '1rem', color: 'red' }} icon={solid('heart')} />
                                                </Tippy>

                                            </Card.Body>
                                        </Card>
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


export default Favourites