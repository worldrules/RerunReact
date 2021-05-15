import React from 'react';
import ReactDOM from 'react-dom';
import CommentDetail from "./CommentDetail";
import  faker  from "faker";
import ApprovalCard from './ApprovalCard'


const App = () => {
    return (
        <div className="ui container comments">
            <ApprovalCard>
                <CommentDetail
                    author="Sam"
                    timeAgo="Today at 4:25PM"
                    content="Nice Blog Post  "
                    avatar={faker.image.avatar()}>
                </CommentDetail>
            </ApprovalCard>

            <ApprovalCard>
                <CommentDetail author="Alex"
                    timeAgo="Today at 2:00AM"
                    content="I Like It"
                    avatar={faker.image.avatar()}>

                </CommentDetail>
            </ApprovalCard>
           
            <ApprovalCard>
                <CommentDetail
                    author="Jane"
                    timeAgo="Yesterday at 5:00PM"
                    content="Monster Legends"
                    avatar={faker.image.avatar()}>

                </CommentDetail>
            </ApprovalCard>
        </div>
    );
};

ReactDOM.render(<App/>,document.querySelector('#root'));