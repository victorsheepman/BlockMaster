
import { GALERY } from "../actions";
import { Component } from "../lib/react";
import styled from "../lib/styled-component";
import store from "../store";
import galery from "./galery";

const Slider = styled.div`
    width: 100%;
    height: 346px;
    display: flex;
    flex-direction: column;
    align-items: center;
    //background-color: aquamarine;
`
const wrapperInput = styled.div`
    width: 68px;
    height: 12px;   
    display: flex;
    justify-content: space-between;
    //background-color: wheat;
`

const button = styled.div`
    height: 12px;
    width: 12px;
    border-radius:50%;
    background-color: white;
`
class slider extends Component{
    handleClick = (event)=>{
        const number = parseInt(event.target.id)
        store.dispatch({
            type: GALERY,
            payload:number
        })
    }
    render(){
        const state = store.getState();
        const photo = state.photo;
        const galeira = new galery(photo)
        return Slider({
            children: [galeira, 
                wrapperInput({
                    onClick: this.handleClick,
                    children:[
                        button({
                            id:'0'
                        }),
                        button({
                            id:'1'
                        }),
                        button({
                            id:'2'
                        })
                    ]
                })
            ]
        });
    }
}
export default slider;