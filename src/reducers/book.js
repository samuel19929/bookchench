
export default function book (state=[], action) {
    if(action.type === 'GET_ALL'){
        return action.payload;
}
    return state;
}