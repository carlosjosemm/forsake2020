import { Avatar } from '@material-ui/core';
import React, { useState } from 'react'
import './MessagePoster.css';
import VideocamIcon from "@material-ui/icons/Videocam";
import PhotoLibraryIcon from "@material-ui/icons/PhotoLibrary";
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon";
import { useStateValue } from './StateProvider';
import db from "./firebase";
import firebase from "firebase";

function MessagePoster() {
    const [input, setInput] = useState("");
    const [imageURL, setImageURL] = useState("");
    const [{user}, dispatch] = useStateValue();

    const handleSubmit = (e) => {
        e.preventDefault();
        
        db.collection('posts').add({
            message: input,
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            profilePic: user.photoURL,
            username:user.displayName,
            image: imageURL,
        })

        setImageURL("");
        setInput("");
    }
    return (
        <div className='messagePoster'>
            <div className='messagePoster__top'>
                <Avatar src={user.photoURL}/>
                <form>
                    <input 
                    value={input} 
                    onChange={(e) => setInput(e.target.value)} 
                    className="messagePoster__input" type="text" placeholder={`What's on your mind, ${user.displayName}?`} />
                    
                    <input 
                    value={imageURL}
                    onChange={(e) =>setImageURL(e.target.value)}
                    className="messagePoster__imgurl" placeholder="Image URL (optional)" type="text" />
                    
                    <button onClick={handleSubmit} type="submit">hidden submit</button>
                </form>
            </div>   

            <div className='messagePoster__bottom'>
                <div className="messagePoster__option">
                    <VideocamIcon style={{color: "red"}} />
                    <h3>Live Video</h3>
                </div>

                <div className="messagePoster__option">
                    <PhotoLibraryIcon style={{color: "green"}} />
                    <h3>Photo/Video</h3>
                </div>

                <div  className="messagePoster__option">
                    <InsertEmoticonIcon style={{color: "orange"}} />
                    <h3>Felling/Activity</h3>
                </div>
            </div>
        </div>
    )
}

export default MessagePoster
