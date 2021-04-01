import footerlogo from './art/footerLogo.svg'
import './AppFooter.css'

function AppFooter() {
    return (
        <footer>
            <div className="copyright">
                <img className="footerLogo" src={footerlogo} alt="Лого грузится. Обожди."/>
                <div>Партнерам</div>
                <div>Разработчикам</div>
                <div>Вакансии</div>
            </div>
            <div>ООО “интукод”, 2020г.</div>
        </footer>
    )
}

export default AppFooter;