import { HashLink as Link } from "react-router-hash-link"

const Header = () => {
    return (
        <div className='headerdiv'>
            <ul className="headerul">
                <Link to="#experiences" className='linkheader' smooth> My Endavours </Link>
                <Link to="#skills" className='linkheader' smooth> Skills </Link>
                <li>Code</li>
                <Link to="#contact" className='linkheader' smooth> Contact </Link>
            </ul>
        </div>
    )
}

export default Header