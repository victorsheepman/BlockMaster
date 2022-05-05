import {Component} from '../../lib/react/src/react';
import { createElement } from '../../lib/react';
import styled from '../../lib/styled-component';
const div = styled.h1``
class Header extends Component{
    render(){
        return createElement('h1',null, 'hello worl')
    }
}
export default Header;