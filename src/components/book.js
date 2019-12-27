import React from "react";


export default class Book extends React.Component{
    render() {
        return(
            <div className='StyleBook'>
                <p>id: {this.props.book.id}</p>
                <p>title: {this.props.book.title}</p>
                <p>author: {this.props.book.author} </p>
                <p>description: {this.props.book.description} </p>
                <p>published: {this.props.book.published} </p>
                <button className='StyleButton' onClick={()=>this.props.edit(this.props.book.id)}>Edit</button>
            </div>
        )
    }
};
