import logo from '../../imagens/logo.svg'
function Logo() {
    return (
        <div className='logo'>
            <img src={logo} alt='logo'></img>
            <p><strong>Lucas</strong> Books</p>
        </div>
    )
}