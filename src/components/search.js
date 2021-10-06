import { Component } from "../lib/react";
import styled from "../lib/styled-component";
import store from "../store";
import { SEARCH_MOVIE, SET_FILTER } from "../actions";
const input = styled.input`
    height: 44px;   
    width: 605.1942749023438px;
    border-radius: 8px 0 0 8px;
    border: 1px solid #FED941;
    padding-left: 12px;
`
const form = styled.form`
    width: auto;
    height: 44px;
    display: flex;

`
const buttomForm = styled.button`
    width: 72px;
    height: 44px;
    background-color: #fed941;
    border-radius: 0 4px 4px 0;
    border: none;
`
const img = styled.img`
    width: 24px;
    height: 24px;
`

class Search extends Component{
    handleSubmit = (event)=>{
        event.preventDefault();
        const form = event.target[0].value
        const query = form
        if(query !== ''){
          return  store.dispatch({
                type: SEARCH_MOVIE,
                payload: query
            })
        }
        return store.dispatch({
            type: SET_FILTER,
            payload: 'all'
        })
    }
    render(){
       return form({
           onSubmit: this.handleSubmit,
            children:[
                input({
                    placeholder: 'Busca tu película favorita'
                }),
                buttomForm({
                    children: img({
                        src:'assets/icons/Property 1=search.svg'
                    })
                })
            ]
        })
    }
}
export default Search;