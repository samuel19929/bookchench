import React from "react";

export default class Book extends React.Component{
    render() {
        return(
            <div>
                <p> {this.props.book.id}</p>
                <p> {this.props.book.title}</p>
                <p>{this.props.book.author} </p>
                <p>{this.props.book.description} </p>
                <p>{this.props.book.published} </p>
            </div>
        )
    }

}
