import ReactDOM from 'react-dom';
import AppFooter from './components/AppFooter';
import AppHeader from './components/AppHeader';
import AppMainContent from './components/AppMainContent';
import './index.css'

ReactDOM.render(
    <div className="SubBody">
        <AppHeader/>
        <AppMainContent/>
        <AppFooter/>
    </div>,
    document.getElementById("root")
);