import { ADD_MODAL } from "../actions";
import { createElement } from "../lib/react";
import { Component } from "../lib/react/src/react";
import styled from "../lib/styled-component";
import store from "../store";
import modal from "./modal";

const movieCard = styled.article`
    height: 330px;
    border-radius: 8px;
    position: relative;
`

const img = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 8px;
`
const icon = styled.img`
    width: 24px;
    height: 24px;

`

class movie extends Component{
    handleClick = ()=>{
        store.dispatch({
            type:ADD_MODAL,
            payload:{

                prop: this.props, 
            
                state: {
                    mode: 'block'
            }}
        })
    }
   render(){
       const {vote_average, poster_path } = this.props;
        return movieCard({
            onClick:this.handleClick,
            children: [img({
                src:`//image.tmdb.org/t/p/w220_and_h330_face${poster_path}`
            }), createElement('span',{
                class:`${vote_average >= 7 ? 'recommended' : 'normal'}`,
                children: icon({
                    src:'assets/icons/Property 1=star.svg'
                })
            },`${vote_average}`)]
        })
    }
}
export default movie;