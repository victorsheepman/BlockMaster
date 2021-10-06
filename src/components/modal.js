
import { Component} from "../lib/react/src/react";
import { createElement } from "../lib/react";
import styled from "../lib/styled-component";
import button from "./button";
import { DELETE_MODAL } from "../actions";
import store from "../store";

const wrapperModar = styled.div`
    position: absolute;
    top:0px;
    bottom:0px;
    left: 0px;
    right: 0px;
    display: flex;
    padding-left: 10%;
    top: 0;
    bottom: 0;
    position: fixed;
    background-color:rgba(0, 0, 0, 0.8);
    z-index: 1;
    display: ${({display}) => display};

`
const container= styled.div`
`
const movieInfo = styled.article`
    width: 565px;
    height: auto;
    color: #fffffe;
`
const wrapperBotton = styled.div`
    height: 48px;
    width: 565.95751953125px;
    display: flex;
    justify-content: space-between;
`
const movieCard = styled.article`
    width: 220px;
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
const exit = styled.figure`
    height: 32px;
    width: 32px;
    left: 1251px;
    top: 136px;
    position: absolute;
`


const icon = styled.img`
    width: 24px;
    height: 24px;

`


const title = styled.h1`
    //styleName: Headline 1;
    
    font-size: 48px;
    font-style: normal;
    font-weight: 700;
    line-height: 58px;
    letter-spacing: -0.005em;
    text-align: left;
    color: white;
    margin-bottom: 8px;
`
const Overview = styled.span`
    height: 135px;
    width: 565.95751953125px;
    margin-top: 8px;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: 27px;
    letter-spacing: 0em;
    text-align: left;
    margin-bottom: 8px;
`
const date = styled.div`
    height: 35px;
    width: 349px;
    padding: 8px, 0px, 0px, 0px;
    margin-top: 8px;
`
const view = {
    true: {
        display: 'none'
    },
    false:{
        display: 'block'
    }
}

class modal extends Component{
    handleClick = ()=>{
        store.dispatch({
            type:DELETE_MODAL,
            payload:{
                prop: [], 
            
                state: {
                    mode: 'none'
            }}
        })
    }
  
    render(){
        const {original_title, overview, release_date, poster_path, vote_average } = this.props
        const { mode } = this.state
        const display = mode == 'none' ? view.true : view.false;
        return wrapperModar({
            ...display,
            children:container({
                class:'container',
                children:[ movieInfo({
                    children:[
                        title(null,`${original_title}`),
                        Overview(null, `${overview}`),
                        date(null,`${release_date}`),
                        wrapperBotton({
                            children:[  
                                button({
                                    class:'button-modal',
                                    children: createElement('figure', {
                                        children: createElement('img',{
                                            src: 'assets/icons/Property 1=play.svg'
                                        })
                                    })
                                },'VER AHORA'),
                                button({
                                    class: 'button-modal--black',
                                    children: createElement('figure', {
                                        children: createElement('img',{
                                            src: 'assets/icons/Property 1=plus.svg'
                                        })
                                    }) 
                                },'VER DESPUÉS')]
                        }),
                        exit({
                            onclick: this.handleClick,
                           children: createElement('img', {
                                src: 'assets/icons/Property 1=delete.svg'
                            })
                        })
                    ]
                }),
                movieCard({
                    children: [
                        img({
                            src:`//image.tmdb.org/t/p/w220_and_h330_face${poster_path}`
                        }), 
                        createElement('span',{
                            class:`${vote_average >= 7 ? 'recommended' : 'normal'}`,
                            children: 
                                icon({
                                    src:'assets/icons/Property 1=star.svg'
                                })
                        },`${vote_average}`)
                    ]
                    })
                ]

            })
        })
    }
}
export default modal;