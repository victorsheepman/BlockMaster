import { Component } from "../../lib/react/src/react";
import styled from "../../lib/styled-component";
import Header from "../header";
const Element = styled.div`

`
class AppMobile extends Component{
    render(){
        return Element(null, 'hola mundo mobile')
    }
}
export default AppMobile;