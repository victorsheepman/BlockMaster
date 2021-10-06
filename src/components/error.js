import { Component } from "../lib/react";
import styled from "../lib/styled-component";
const errorContainer= styled.div`
  height: 487.4050598144531px;
  width: 697px;
  margin-left: -100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
const errorImg = styled.img``

const errorP = styled.p`
//styleName: Headline 3;
font-family: Montserrat;
font-size: 28px;
font-style: normal;
font-weight: 700;
line-height: 34px;
letter-spacing: 0.01em;
text-align: center;


`
class Error extends Component{
    render(){
        return errorContainer({
            children: [errorImg({
              src: 'assets/images/error.png',
            }),
            errorP(null, 'no se encontro la pelicula')
           ]
        })
    }
}

export default Error;