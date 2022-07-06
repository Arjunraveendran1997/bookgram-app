import React, { useContext,useState } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/esm/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid} from '@fortawesome/fontawesome-svg-core/import.macro'
import { ApiContext } from '../../MainContext';
import Modal from './Modal';


const BookCard = (props) => {
    const { bookData, modalSHowHandler }=useContext(ApiContext)
    const [modalItem, setModalItem] = useState()
   

    return (
        
        <section>
            <div className='container mt-3'>
                <div className='row'>
                    {
                        bookData.length > 0 && 
                        <h5 style={{ fontFamily: "Poppins,sans-serif" }}>{props.title}</h5>
                        
                    }
                    
                    {
                        bookData.map((item,index)=>{
                    
                            let thumbnail = item.volumeInfo.imageLinks && item.volumeInfo.imageLinks.smallThumbnail;
                            let author = item.volumeInfo.authors
                            let title = item.volumeInfo.title
                            if(thumbnail !== undefined && author !== undefined && title !== undefined){
                                
                                return (
                                    <>
                                    <Card onClick={modalSHowHandler} key={index} style={{ width: '10rem', marginRight: '2rem',marginBottom:'2rem' }}>
                                        <Card.Img variant="top" style={{ marginTop: "1rem", height: "10rem", width: "6rem" }} alt="Image Not Found" src={thumbnail} />
                                        <Card.Body>
                                            <Card.Title style={{ fontFamily: "Poppins,sans-serif",color:"red", fontSize:"1rem"}}>{title}</Card.Title>
                                            <Card.Text style={{ fontFamily: "Manrope,sans-serif" }}>
                                                {author}
                                            </Card.Text>
                                                <Button onClick={() => { modalSHowHandler(); setModalItem(item) } } variant="primary" size="sm">More...</Button> <FontAwesomeIcon style={{ marginLeft: '1rem' }} icon={solid('heart')} />
                                        </Card.Body>
                                    </Card>
                                    <Modal item={modalItem}/>
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

export default BookCard;