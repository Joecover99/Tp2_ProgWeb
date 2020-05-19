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

const RESSOURCE_NAME = 'films';
const ACTOR_CASE = 'actors';
const Comment= 'comment'
const LAST_PAGE = '?page=6';

export default {
    getMovies(){
        // let sortParams = `?$orderby=ModifiedDate%20desc`;
        return apiMovie.get('/' + RESSOURCE_NAME)
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
    }
}