import { Component } from "../lib/react/src/react";
import styled from "../lib/styled-component";
import store from "../store";
import Header from "./header";
import slider from "./slider";
import movieList from "./movieList";

const AppStyled = styled.div``
class App extends Component{
    componentDidMount() {
        store.subscribe(() => {
          this.setState()
        })
      }

    render(){
      const state = store.getState()
      const info = state.info;
      console.log(info.props)
        let app = [new Header(),new slider(), new movieList()]
        return AppStyled({
            children: app
        });
    }
}
export default App;