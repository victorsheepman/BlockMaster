import { SET_FILTER } from "../actions";
import { Component } from "../lib/react/src/react";
import styled from "../lib/styled-component";
import store from "../store";
const nav = styled.ul`
    width: auto;
    height: 19px;
    display: flex;
    align-items: center;
    font-family: 'Inter', sans-serif;
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: 19px;
    letter-spacing: 0em;
    text-align: center;   
    text-decoration: none;
    list-style: none;
`;
const li = styled.li`
    margin-right: 48px;
    color: white;
`
const liFirst= styled.li`
    margin-right: 48px;
    color:#fed941;
`
class Filter extends Component{
   handleChange = (event)=>{
       store.dispatch({
           type: SET_FILTER ,
           payload:event.target.attributes[0].value
       })
       const ulChildren = event.path[1].childNodes;
       const { filter } = store.getState(); 
       for (const key in ulChildren) {
           if(ulChildren[key].getAttribute('value') == filter){
                ulChildren[key].style.color="#fed941";
           }else{
                ulChildren[key].style.color="white";
           }
       }
   }
    render(){
        return nav({
            onclick : this.handleChange,
            
            children:[
                liFirst({
                    value: 'all'
                },'Todas'),
                li({
                    value: 'mostValued'
                },'Más valoradas'),
                li({
                    value: 'leastValued'
                },'Menos valoradas')
            ]
        })
    }
}
export default Filter;