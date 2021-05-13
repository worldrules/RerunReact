import React from 'react';
import ReactDOM from 'react-dom';
import CommentDetail from "./CommentDetail";

const App = () => (
    <div className="ui container comments">
     <CommentDetail author="Sam"></CommentDetail>
     <CommentDetail author="Alex"></CommentDetail>
     <CommentDetail author="Jane"></CommentDetail>
    </div>
);

ReactDOM.render(<App/>,document.querySelector('#root')); 
 
;