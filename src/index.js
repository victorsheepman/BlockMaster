import { render } from './lib/react-dom.js'
import App from './components/app';
import './styles/main.scss';
import AppMobile from './components/mobile/appMobile.js';
const mql = window.matchMedia('(max-width: 600px)');

let mobileView = mql.matches;

if (mobileView) {
    render(new AppMobile(), root)
}else{
   render(new App(), root) 
}
