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
const COMMENT= 'critic'
const LAST_PAGE = '?page=6';

export default {
    createMovie(title, releaseYear, length, image, description, rating, languageId){
        apiMovie.post('RESSOURCE_NAME', { title: title, release_year: releaseYear, length: length, image: image, description: description, rating: rating, language_id: languageId }) 
    },
    getRatings(){
        return apiMovie.get('/' + 'ratings')
    },
    getLanguage(){
        return apiMovie.get('/' + 'languages')
    },
    getMovies(){
        // let sortParams = `?$orderby=ModifiedDate%20desc`;
        return apiMovie.get(RESSOURCE_NAME)
    },
    getMoviesLast(){
        // let sortParams = `?$orderby=ModifiedDate%20desc`;
        return apiMovie.get(RESSOURCE_NAME + LAST_PAGE)
    },
    getMovie(id) {
        return apiMovie.get('/' + RESSOURCE_NAME + '/' + id)
    },
    getMovieActors(id) {
        return apiMovie.get('/' + RESSOURCE_NAME + '/' + id + '/' + ACTOR_CASE)
    },
    getComments(id){
        return apiMovie.get('/' + RESSOURCE_NAME + '/' + id + '/' + COMMENT) 
    },
    deleteMovie(id){
        return apiMovie.delete('/' + RESSOURCE_NAME + '/' + id)
    },
    createCritic(id, userId, fName, lName, score, comment){
        return apiMovie.post('/' + RESSOURCE_NAME + '/' + id + '/' + COMMENT, {user_id: userId, critic_first_name: fName, critic_last_name: lName, score: score, comment: comment})   
    },
    modifieCritic(id, critID, score, comment){
        return apiMovie.put('/' + RESSOURCE_NAME + '/' + id + '/' + COMMENT + '/' + critID, {score: score, comment: comment})
    },
    getUser(user) {
        return apiMovie.get('/' + USERS + '/' + user)
    },
    verifyUser(user){
        return apiMovie.get('/' + USERS + '/' + user + 'verify')
    },
    createUser(fName, lName, username, password, email){
        apiMovie.post(USERS, {first_name: fName, last_lame: lName, username: username, password: password, email: email})
    },
    modifyUser(id, fName, lName, username, email){
        apiMovie.put(USERS, id, {first_name: fName, last_lame: lName, username: username, email: email})
    }, 
    modifyUserPassword(id, fName, lName, username, email, password){
        apiMovie.put(USERS, id, {firstName: fName, lastName: lName, username: username, email: email}, password)
    }

}