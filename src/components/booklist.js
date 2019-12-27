import React from 'react';
import {connect} from "react-redux";
import mapStateToProps from "react-redux/lib/connect/mapStateToProps";
import {editbook, getallbook} from "../actions";
import Book from "./book";
import EditBook from "./editbook";

class App extends React.Component {
    componentDidMount() {
        this.props.getallbooks();
    }

    render() {
        const x = this.props.books;
        // x.map(book => (console.log(book)))
        return (
            <div>
                {x.map(book=>( book.edited ? <EditBook book={book} key={book.id} /> :
                    <Book key={book.id} book={{...book,edited:false}} delete={this.props.onDeleteBook} edit={this.props.onEditBook} />))}

            </div>
        );
    }
}
const m = state => ({
    books: state.book
});

const d = dispach => {
    return {
        getallbooks: () => dispach(getallbook())
    }

};


export default connect(
    state => ({
        books: state.book
    }),
    dispach => {
        return {
            getallbooks: () => dispach(getallbook()),
            onEditBook:(id)=> dispach(editbook(id))
        }

    }
) (App) ;
