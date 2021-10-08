import { createStore } from './redux/index';
import reducer from './reducers/index';
import movies from './movie';

import { getAllIds, getLeastValuedIds, getMostValuedIds, movieListAsMap } from './normalize';
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
    photo: []
}
const store = createStore(reducer, initialState);

export default store;