import { Component } from "../../lib/react/src/react";
import styled from "../../lib/styled-component";
import header from "../header";
const Element = styled.div`

`
class AppMobile extends Component{
    render(){
        return Element ({
            children: new header()
        })
    }
}
export default AppMobile;