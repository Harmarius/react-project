import logo from './art/Logo.svg'
import './AppHeader.css'

function AppHeader() {
    return (
        <header>
            <div className="HeaderLogo">
                <img className="headerLogo" src={logo} alt="Лого грузится. Обожди."/>
            </div>
            <div className="HeaderMenu">
                <div className="HMGeneral">Главная</div>
                <div className="HMAbout">О нас</div>
                <div className="HMContact">Контакты</div>
            </div>
        </header>
    )
}

export default AppHeader;