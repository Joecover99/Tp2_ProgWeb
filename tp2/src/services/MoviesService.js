import axios from 'axios'

const apiMovie = axios.create({
        baseURL: 'http://radiant-plains-67953.herokuapp.com/api',
        headers:{
            Accept: 'aplication/json',
            'Content-Type': 'application/jason'
        }
    }
)

apiMovie.interceptors.response.use(
    function (response){
        return response;
    },
    function (error){
        console.error('API Error, '+ error);
        return Promise.reject(error);
    }
);

const USERS = 'users';
const RESSOURCE_NAME = 'films';
const ACTOR_CASE = 'actors';
const Comment= 'comment'
const LAST_PAGE = '?page=6';

export default {
    createMovie(film){
        apiMovie.post('/' + film)
    },
    getRatings(){
        return apiMovie.get('/' + 'ratings')
    },
    getLanguage(){
        return apiMovie.get('/' + 'languages')
    },
    getMovies(){
        // let sortParams = `?$orderby=ModifiedDate%20desc`;
        return apiMovie.get('/' + RESSOURCE_NAME + LAST_PAGE)
    },
    getMoviesLast(){
        // let sortParams = `?$orderby=ModifiedDate%20desc`;
        return apiMovie.get('/' + RESSOURCE_NAME + LAST_PAGE)
    },
    getMovie(id) {
        return apiMovie.get('/' + RESSOURCE_NAME + '/' + id)
    },
    getMovieActors(id) {
        return apiMovie.get('/' + RESSOURCE_NAME + '/' + id + '/' + ACTOR_CASE)
    },
    getComments(id){
        return apiMovie.get('/' + RESSOURCE_NAME + '/' + id + '/' + Comment) 
    },
    deleteMovie(id){
        return apiMovie.delete('/' + RESSOURCE_NAME + '/' + id)
    },
    createCritic(id){
        return apiMovie.get('/' + RESSOURCE_NAME + '/' + id + '/' + Comment)   
    },
    modifieCritic(id, crit){
        return apiMovie.put('/' + RESSOURCE_NAME + '/' + id + '/' + Comment + '/' + crit)
    },
    getUser(user) {
        return apiMovie.get('/' + USERS + '/' + user)
    },
    verifyUser(user){
        return apiMovie.get('/' + USERS + '/' + user + 'verify')
    },
    createUser(user){
        apiMovie.post('/' + user)
    },
    modifyUser(user){
        apiMovie.put('/' + USERS + '/' + user)
    }, 
    modifyUserPassword(user, password){
        apiMovie.put('/' + USERS + '/' + user + '/' + password)
    }

}