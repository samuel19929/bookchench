import React from 'react';
import {connect} from "react-redux";
import mapStateToProps from "react-redux/lib/connect/mapStateToProps";
import {getallbook} from "../actions";
import Book from "./book";

class App extends React.Component {
    componentDidMount() {
        this.props.getallbooks();
    }

    render() {
        const x = this.props.books;
        // x.map(book => (console.log(book)))
        return (
            <div>
                {x.map(book=><Book key={book.id} book={book} />) }

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
            getallbooks: () => dispach(getallbook())
        }

    }
) (App) ;
