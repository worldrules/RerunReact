import React from 'react';
import ReactDOM from 'react-dom';
import CommentDetail from "./CommentDetail";
import  faker  from "faker";


const App = () => (
    <div className="ui container comments">
     <CommentDetail 
     author="Sam" 
     timeAgo="Today at 4:25PM" 
     content="Nice Blog Post  "
     avatar={faker.image.avatar()}>

     </CommentDetail>
     <CommentDetail author="Alex" 
     timeAgo="Today at 2:00AM" 
     content="I Like It"
     avatar={faker.image.avatar()}>

     </CommentDetail>
     <CommentDetail 
     author="Jane" 
     timeAgo="Yesterday at 5:00PM" 
     content="Monster Legends"
     avatar={faker.image.avatar()}>
         
     </CommentDetail>
    </div>
);

ReactDOM.render(<App/>,document.querySelector('#root')); 
 
;