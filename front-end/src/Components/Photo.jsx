import React from 'react'
import '../CSS/Photo.css'

function Photo(props) {
    let {url, caption} = props

    return (
        <div className='meme' style={{backgroundImage: `url('${url}')`}}>
            <p className='top p' >{caption}</p>
            {/* <p className='bottom p'>meme meme meme</p> */}
        </div>
    )
}


export default Photo