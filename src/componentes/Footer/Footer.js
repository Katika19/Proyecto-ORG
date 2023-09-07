import "./Footer.css"

const footer = () => {
    return <footer className="footer" style={{ backgroundImage: "url(/img/Footer.png" }}>
        <div className="redes">
            <a href="https://www.aluracursos.com/">
                <img src="/img/facebook.png" alt="Facebook" />    
            </a>
            <a href="https://www.aluracursos.com/">
                <img src="/img/twitter.png" alt="Twitter" />    
            </a>
            <a href="https://www.aluracursos.com/">
                <img src="/img/instagram.png" alt="Instagram" />    
            </a>           
        </div>
        <img src="/img/Logo.png" alt="Logo ORG"/>
        <strong>Desarrollado por Alura</strong>
    </footer>

}

export default footer