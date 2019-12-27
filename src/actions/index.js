import axios  from 'axios';


// new commit
// second commit
// first comment
export const getallbooksuccess = (books) => {
    return {
        type: 'GET_ALL',
        payload : books
            }
};
export const getallbook = () => {
    return (dispach) => {
        return axios.get( 'https://spring-boot-mysql-server-part0.herokuapp.com/api/books')
            .then(resolt => {
                dispach(getallbooksuccess(resolt.data))
            })
    }
};