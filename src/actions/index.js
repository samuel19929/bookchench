import axios  from 'axios';



export const getallbooksuccess = (books) => {
    return {
        type: 'GET_ALL',
        payload : books
            }
};
export const editbook =(id) =>{
    return{
        type: 'EDIT_BOOK',
        id : id
    }
};

export const editbooksuccsess =(id) => {
    return (dispach) => {
        dispach(editbook(id));
    }
};
export const updatebook =(id,data) =>{
    return(dispach) => {
        dispach({
            type: 'UPDATE_BOOK',
            id: id,
            data: data
        })
    }
} ;
export const updatebooksuccsess = (id, data) =>{
    return (dispach) =>{
        return axios.put('https://spring-boot-mysql-server-part0.herokuapp.com/api/books/' +id, {
            title:data.newTitle,
            author:data.newAuthor,
            description:data.newDescription,
            published:data.newPublished,
        })
            .then(res=>{
                dispach(updatebook(id,res.data))
            })
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