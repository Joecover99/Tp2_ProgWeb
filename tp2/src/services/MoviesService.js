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

export default {
    getMovies(){
        // let sortParams = `?$orderby=ModifiedDate%20desc`;
        return apiMovie.get('/' + RESSOURCE_NAME)
    },
    
    getMovie(id) {
        return apiMovie.get('/' + RESSOURCE_NAME + '/' + id)
      }

}