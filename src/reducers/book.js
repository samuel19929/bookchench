
export default function book (state=[], action) {
    if(action.type === 'GET_ALL') {
        return action.payload;
    }
    else if(action.type === 'EDIT_BOOK'){
        return state.map((book)=>book.id === action.id?{...book, edited: !book.edited }: book )
    }
    else if (action.type === 'UPDATE_BOOK'){
        return state.map((book)=>book.id === action.id?{...book,
            title:action.data.newTitle,
            author:action.data.newAuthor,
            description:action.data.newDescription,
            published:action.data.newPublished,
            edited: !book.edited}: book )
    }
    return state;

}
