import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import NotFound from '../NotFound/NotFound';
import './Comment.css'
const Comment = () => {
    const [comment, setComment] = useState([])
    const { id } = useParams()
    useEffect(() =>{
        fetch('https://jsonplaceholder.typicode.com/comments?postId='+id)
        .then(res => res.json())
        .then(data =>setComment(data))
    },[])
    return (
        <div>
            <h2>Comment</h2>
            {
                comment.map(cmnt=> <div className="comment-part">
                    <h4>{cmnt.email}</h4>
                    <hr/>
                    <p>{cmnt.body}</p>
                    </div>)
            }
            
        </div>
    );
};

export default Comment;