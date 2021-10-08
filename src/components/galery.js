import { GALERY } from "../actions";
import { Component } from "../lib/react";
import { createElement } from "../lib/react";
import styled from "../lib/styled-component";
import store from "../store";

const card = styled.div`
    width: 1200px;
    height: 320px;
    background-color: black;
    margin-bottom: 24px;
    position: relative;
    background-color: black;
    border-radius: 8px;
`
const wrapperButton = styled.div`
position: absolute;
height: 48px;
width: 424px;
left: 23.5px;
top: 230px;
display: flex;
justify-content: space-between;
`
const button = styled.button`` 
const img = styled.img`
    width: 100%;
    height: 100%;
    border-radius:8px;
`
class galery extends Component{
    componentDidMount() {
        store.subscribe(() => {
          this.setState()
        })
    }
    render(){
        const { photo } = this.props
        return card({
            class:'card',
            children: [img({
                src:`assets/images/${photo}`
            }), wrapperButton({
                children:[
                    button({
                        class:'button-hero',
                        children: createElement('figure', {
                            children: createElement('img',{
                                src: 'assets/icons/Property 1=play.svg'
                            })
                        })
                    }, 'VER AHORA'), 
                    button({
                        class:'button-hero--black',
                        children:createElement('figure', {
                            children: createElement('img',{
                                src: 'assets/icons/Property 1=plus.svg'
                            })
                        })  
                    }, 'VER DESPUÉS')
                ]
            })]
        })
    }
}
export default galery;