import login from "../../assets/login.png"
import CartWidget from "../CartWidget/CartWidget";
import {NavLink, Link} from "react-router-dom";

const NavBar = () => {
    return (
        <header>
            <nav>
                <div className="navbar bg-neutral-800">
                    <div className="navbar-start my-4">
                        <div className="dropdown">
                            <span tabIndex={0} className="btn btn-ghost lg:hidden">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-5 w-5"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"><path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16"/></svg>
                            </span>
                            <ul
                                tabIndex={0}
                                className="p-2 shadow menu dropdown-content bg-base-100 mt-2 rounded-b-lg w-52">
                                <li>
                                    <ul className="p-2">
                                        <li className="text-white mx-4 hover:scale-110">
                                            <Link to="/category/auriculares">Auriculares</Link>
                                        </li>
                                        <li className="text-white mx-4 hover:scale-110">
                                            <Link to="/category/mouse">Mouse</Link>
                                        </li>
                                        <li className="text-white mx-4 hover:scale-110">
                                            <Link to="/category/teclado">Teclado</Link>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                        <Link to="/">
                            <h3 className="ml-3 text-gray-100 normal-case text-xl">Agatha-Ecommerce</h3>
                        </Link>
                    </div>
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu-horizontal">
                            <li className="text-white mx-4 hover:scale-110">
                                <NavLink
                                    to="/category/auriculares"
                                    className={(
                                        {isActive}) => isActive
                                        ? 'text-pink-500 font-semibold'
                                        : 'text-white'}>Auriculares</NavLink>
                            </li>
                            <li className="text-white mx-4 hover:scale-110">
                                <NavLink
                                    to="/category/mouse"
                                    className={(
                                        {isActive}) => isActive
                                        ? 'text-pink-500 font-semibold'
                                        : 'text-white'}>Mouse</NavLink>
                            </li>
                            <li className="text-white mx-4 hover:scale-110">
                                <NavLink
                                    to="/category/teclado"
                                    className={(
                                        {isActive}) => isActive
                                        ? 'text-pink-500 font-semibold'
                                        : 'text-white'}>Teclado</NavLink>
                            </li>
                        </ul>
                    </div>
                    <div className="navbar-end">
                    <div className="dropdown dropdown-end">
      <div tabIndex={0}>
        <button>
          <img src={login} className="h-8 w-8 mr-4 mt-1.5" alt="icono login" />
        </button>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 rounded-b-lg shadow bg-base-100 w-52">        
        <li>
            <Link to="/singin">Sing In</Link>
            </li>
        <li>
            <Link to="/singup">Sing Up</Link>
            </li>
      </ul>
    </div>
                        
                        <CartWidget/>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default NavBar;
