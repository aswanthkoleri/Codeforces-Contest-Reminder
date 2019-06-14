import React from 'react';
import ReactDOM from 'react-dom';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
// import CssBaseline from '@material-ui/core/CssBaseline';
// import { ThemeProvider } from '@material-ui/styles';
import App from './components/App';
import './assets/styles.scss';
// import theme from './theme';
const Layout =(props)=>{
    return (
        <div>
        {props.children}
        </div>
    ); 
};

ReactDOM.render((<Layout>
    <App/>
</Layout>), document.querySelector('#root'));
