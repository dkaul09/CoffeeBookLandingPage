export default function Navbar(){
    return <nav className="navbar"> 
    <a href="/" className="site-name">CoffeeBook</a>
    <ul> 
        <li className="active"> 
            <a href="/Home"> Home</a>
            </li>
        <li> 
            <a href="/About"> About</a>
            </li> 
    </ul>
    </nav>
}