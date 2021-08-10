/* eslint-disable jsx-a11y/anchor-is-valid */

export default function NavBar(props) {
    return (
        <div>
            <ul className="navbar-ul">
                <li className="navbar-li"><a className="navbar-a" href="#">Home</a></li>
            </ul>
            <ul className="navbar-ul">
                <li className="navbar-li"><a className="navbar-a" href="#">Collections</a></li>
            </ul>
            <ul className="navbar-ul">
                <li className="navbar-li"><a className="navbar-a" href="#">About</a></li>
            </ul>
        </div>
    )
}