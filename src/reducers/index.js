import { ADD_MODAL, ADD_MOVIES, DELETE_MODAL, GALERY, SEARCH_MOVIE, SET_FILTER } from "../actions";
import movie from "../movie";
import {
    movieListAsMap,
    getAllIds,
    getMostValuedIds,
    getLeastValuedIds,
} from '../normalize';

function filterByTitle(title, movies) {
    const list = []
    movies.forEach((movie) => {
      if (movie.title.toLowerCase().includes(title.toLowerCase())) {
        list.push(movie.id)
      }
    })
    return list
}
  function getPoster(number){
      const photo = [ "mulan.jpg", "raya.jpg", "unidos.jpg" ]
      return photo[number];
  }
function findById(id, allIds) {
    const parseId = parseInt(id, 10)
    if (allIds.includes(parseId)) {
      return [parseId]
    }
    return allIds
}
  
function searchMovie(query, list, allIds) {
    if (isNaN(query)) {
      return filterByTitle(query, list)
    }
    return findById(query, allIds)
}




const reducer  = (state,{type, payload}) => {
    
    switch (type) {
        case ADD_MOVIES:
            const movieList = movieListAsMap(payload, state.movieList)
            const all = getAllIds(payload, state.list.all)
            const leastValued = getLeastValuedIds(payload, state.list.leastValued)
            const mostValued = getMostValuedIds(payload, state.list.mostValued)
            return {
                ...state,
                movieList,
                list: {
                    ...state.list,
                    all,
                    leastValued,
                    mostValued,
                  }
            }
            break;
        case SET_FILTER:
            return {
                ...state,
                filter: payload,
            }
        case SEARCH_MOVIE:
            return {
                ...state,
                filter: 'search',
                list: {
                    ...state.list,
                    search: searchMovie(payload,state.movieList, state.list.all),

                }
            }
        case ADD_MODAL:
            return {
                ...state,
                info:{
                    props: payload.prop,
                    state: payload.state 
                }
            } 
        case DELETE_MODAL:
            return{
                ...state,
                info:{
                    props: payload.prop,
                    state: payload.state 
                }
            }
        case GALERY:
            return {
                ...state,
                photo: getPoster(payload)
            }
            debugger;
        default:
            return state
        break;
    }
}

export default reducer;