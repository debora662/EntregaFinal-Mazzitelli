import CartWidget from "../CartWidget/CartWidget"

const NavBar = () => {
    return (
        <header>
            <nav>
                <div className="navbar bg-neutral-800">
                    <div className="navbar-start">
                        <details className="dropdown">
                            <summary tabIndex={0} className="btn btn-ghost lg:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                            </summary>
                            <ul className="p-2 shadow menu dropdown-content bg-base-100 mt-2 rounded-b-lg w-52">
                                <li>
                                    <ul className="p-2">
                                        <li className="text-white mx-4 hover:scale-110"><a href="">Auriculares</a></li>
                                        <li className="text-white mx-4 hover:scale-110"><a href="">Teclados</a></li>
                                        <li className="text-white mx-4 hover:scale-110"><a href="">Monitores</a></li>
                                    </ul>
                                </li>
                            </ul>
                        </details>
                        <h3 className="ml-3 text-gray-100 normal-case text-xl">Agatha-Ecommerce</h3>
                    </div>
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu-horizontal">
                            <li className="text-white mx-4 hover:scale-110"><a href="">Celulares</a></li>
                            <li className="text-white mx-4 hover:scale-110"><a href="">Notebooks</a></li>
                            <li className="text-white mx-4 hover:scale-110"><a href="">Televisores</a></li>
                        </ul>
                    </div>
                    <div className="navbar-end">
                        <CartWidget />
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default NavBar
