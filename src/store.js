import { createStore } from './redux/index';
import reducer from './reducers/index';
import movies from './movie';
import { getAllIds, getLeastValuedIds, getMostValuedIds, movieListAsMap } from './normalize';
import { photog } from './reducers/index';
const initialState={
    movieList: movieListAsMap(movies),
    filter: 'all',
    list:{
        all: getAllIds(movies),
        mostValued: getMostValuedIds(movies),
        leastValued: getLeastValuedIds(movies),
        search:[]
    },
    info: {
        props: [],
        state: {
            mode: 'none'
        }

    },
    photo: photog[0],
}
const store = createStore(reducer, initialState);

export default store;