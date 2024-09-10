import './Footer.scss'
import IconFacebook from './assets/IconFacebook.png';
import IconInstagram from './assets/IconInstagram.png';
import IconTwitter from './assets/IconTwitter.png';

const Footer = () => {
    return(
        <>
            <footer>
                <div className='ContainerTop'>
                    <ul className='Links'>
                        <li className='TitleListLinks'>Links</li>
                        <li><a href="#">Inicio</a></li>
                        <li><a href="#">Plataforma</a></li>
                        <li><a href="#">CONHEÇA</a></li>
                    </ul>

                    <ul className='Conheca'>
                        <li className='TitleList'>Conheça</li>
                        <li><a href="#">Quem somos</a></li>
                        <li><a href="#">Nosso time</a></li>
                        <li><a href="#">Quem confia</a></li>
                        <li><a href="#">Contate-nos</a></li>
                    </ul>

                    <ul className='Servicos'>
                        <li className='TitleListLinks'>Serviços</li>
                        <li><a href="#">Quer algo personalizado?</a></li>
                        <li><a href="#">Preciso de um acessor</a></li>
                        <li><a href="#">Preciso de lembrancinhas</a></li>
                    </ul>

                    <form action="">
                        <p>Receba Atualizações</p>
                        <div className='containerInputs'>
                            <input type="text" placeholder='seu melhor e-mail' required />
                            <button type='submit'>ENVIAR</button>
                        </div>
                    </form>
                </div>
                <hr />
                <div className='ContainerBottom'>
                    <p>© 2024 Lista do Bebê, todos os direitos reservados.</p>
                    <div className='SocialImagesContainer'>
                        <a href=""><img src={IconTwitter} alt="Icone Facebook" /></a>
                        <a href=""><img src={IconFacebook} alt="Icone Instagram" />
                        </a><a href=""><img src={IconInstagram} alt="Icone Twitter" /></a>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer;