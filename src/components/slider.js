
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
    state = {
        photo: 'mulan.jpg',
        list: {
            mulan: "mulan.jpg",
            raya: "raya.jpg",
            unidos: "unidos.jpg"
        }
    }
    handleClick = (event)=>{
        const photo = ['mulan.jpg', 'raya.jpg', 'unidos.jpg']
    
        if(event.target.id !== ""){
            let number = event.target.id
            return this.setState({
                photo: photo[number]
            })
        }

    }
    render(){
        const { photo } = this.state;
        const galeira = new galery({photo: photo})
        return Slider({
            children: [galeira, 
                wrapperInput({
                    onClick: this.handleClick,
                    children:[
                        button({
                            onClick: this.handleClick,
                            id:'0'
                        }),
                        button({
                            onClick: this.handleClick,
                            id:'1'
                        }),
                        button({
                            onClick: this.handleClick,
                            id:'2'
                        })
                    ]
                })
            ]
        });
    }
}
export default slider;