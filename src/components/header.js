import { SEARCH_MOVIE, SET_FILTER } from "../actions";
import { Component } from "../lib/react/src/react";
import styled from "../lib/styled-component";
import store from "../store";
import Filter from "./filter";
import Search from "./search";



const HeaderStyles = styled.header`
width: 100%;
height: 112px;
display: flex;
align-items: center;
justify-content: space-around;
`
const nav = styled.ul`
    width: auto;
    height: 19px;
    display: flex;
    align-items: center;
`;
const li = styled.li`
    text-decoration: none;
    list-style: none;
    font-family: 'Inter', sans-serif;
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: 19px;
    letter-spacing: 0em;
    text-align: center;
    margin-right: 48px;
`
//atomos 

const logo = styled.figure`
    height: 64px;
    width: 106.80574035644531px;
`
const logoImg = styled.img`
    width: 100%;
    height: 100%;
`
const form = styled.form`
    width: auto;
    height: 44px;
    display: flex;

`
const input = styled.input`
    height: 44px;   
    width: 605.1942749023438px;
    border-radius: 8px 0 0 8px;
    border: 1px solid #FED941;
    padding-left: 12px;
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
const header = styled.header`
    min-width: 320px;
    width: 100%;
    height: 56px;


`

class Header extends Component{
   
    render(){
        return HeaderStyles({
            children:[
                logo({
                    children: logoImg({
                        src: 'assets/images/logo-blockBuster.png'
                    })
                }),
               new Filter,
               new Search
            ]
        });

    }
}
export default Header;