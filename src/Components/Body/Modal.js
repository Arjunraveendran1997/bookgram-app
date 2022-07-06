import React, { useContext } from 'react'
import { ApiContext } from '../../MainContext'
import './Modal.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro'


const Modal = ({item}) => {
    const {showModal, closeModalHandler } = useContext(ApiContext)

    if (!showModal) {
        return null
    }
    console.log("modal item"+item)
    let thumbnail = item.volumeInfo.imageLinks && item.volumeInfo.imageLinks.smallThumbnail;
    let author = item.volumeInfo.authors
    let title = item.volumeInfo.title
    if (thumbnail !== undefined && author !== undefined && title !== undefined) {
    return (
        <>

            <div className="overlay">
                <div className="overlay-inner">
                    <button className="close" onClick={closeModalHandler} ><FontAwesomeIcon style={{ marginLeft: '1rem' }} icon={solid('close')} /></button>
                    <div className="inner-box">
                        <img src={thumbnail} alt="" />
                        <div className="info">
                            <h1>{title}</h1>
                            <h3>{author}</h3>
                            <h4>{item.volumeInfo.publisher}<span>{item.volumeInfo.publishedDate}</span></h4><br />
                            <a href={item.volumeInfo.previewLink}><button>More</button></a>
                        </div>
                    </div>
                    <h4 className="description">{item.volumeInfo.description}</h4>
                </div>
            </div>


        </>

    )
    }
}

export default Modal;