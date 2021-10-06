import { Component } from "../lib/react";
import styled from "../lib/styled-component"
import WrapperStyled from "./wrapper";
import movie  from "./movie";
import store from '../store';
import Error from "./error";
import modal from "./modal";
import api from "../api";
import { ADD_MOVIES } from "../actions";

//style component
const MovieListStyled = styled.section`
    width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, 200px);
  justify-content: center;
  box-sizing: border-box;
  gap: 1em;
`
const title = styled.h1`
    font-family: 'Montserrat', sans-serif;
    font-size: 48px;
    font-style: normal;
    font-weight: 700;
    line-height: 58px;
    letter-spacing: -0.005em;
    text-align: center;
    margin-bottom: 48px;
    margin-left: 83px;
`

//clase movie list
class movieList extends Component{
  state = {
    page:1
  }
    getPage = async(page)=>{
      const { results } = await api.moviePage(page)
        store.dispatch({
          type: ADD_MOVIES,
          payload: results
        })
    }
    handleIntersection = (entries) => {
      if(entries[0].isIntersecting) {
        this.getPage(this.state.page)
        this.setState({
          page: this.state.page + 1
        })
      }
    }
    componentDidMount() {
      store.subscribe(() => {
        this.setState()
      })  

      setTimeout(() => {
        const observer = new IntersectionObserver(this.handleIntersection)

        observer.observe(window.intersector)
      }, 7000);
      
    }
  
    render(){


        const state = store.getState()
        const moviesIds = state.list[state.filter];//ids of the movies that you wants get
        const movieList = state.movieList;
        const info = state.info;
        const error =  new Error()  //list of the movies to render in the website
        const movieWrapper = moviesIds.length == 0 ?  error : moviesIds.map((movieId)=> new movie(movieList.get(movieId)));
        const titleWrapper = movieWrapper === error ? 'pelicula no encontrada' : 'Todas las peliculas';


        return WrapperStyled({
            children:[title(null, `${titleWrapper}`),MovieListStyled({
                children:movieWrapper 
            }), new modal(info.props, info.state)]
        })
    }
}
export default movieList;