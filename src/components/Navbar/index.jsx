import { NavLink } from "react-router-dom"

const NavBar = ()=>{
    const activeStyle = 'underline underline-offset-4'
    return(
        <nav className="flex justify-between items-center fixed z-10 w-full py-5 px-8 text-sm font-light">
            <ul className="flex items-center gap-3">
                <li className="font-semibold">
                    <NavLink to = '/'>
                        Shopi 
                    </NavLink>
                </li>
                <li>
                    <NavLink to = '/' className={({isActive})=> isActive ? activeStyle : undefined}>
                        All
                    </NavLink>
                </li>
                <li>
                    <NavLink to = '/clothes' className={({isActive})=> isActive ? activeStyle : undefined}>
                        Clothes
                    </NavLink>
                </li>
                <li>
                    <NavLink to = '/electornics' className={({isActive})=> isActive ? activeStyle : undefined}>
                        Electornics
                    </NavLink>
                </li>
                <li>
                    <NavLink to = '/furnitures' className={({isActive})=> isActive ? activeStyle : undefined}>
                        Furnitures
                    </NavLink>
                </li>
                <li>
                    <NavLink to = '/toys' className={({isActive})=> isActive ? activeStyle : undefined}>
                        Toys
                    </NavLink>
                </li>
                <li>
                    <NavLink to = '/others' className={({isActive})=> isActive ? activeStyle : undefined}>
                        Others
                    </NavLink>
                </li>
            </ul>
            <ul className="flex items-center gap-3"> 
                <li className="text-black/60">
                    nico@gmail.com 
                </li>
                <li>
                    <NavLink to = '/' className={({isActive})=> isActive ? activeStyle : undefined}>
                        My Account
                    </NavLink>
                </li>
                <li>
                    <NavLink to = '/clothes' className={({isActive})=> isActive ? activeStyle : undefined}>
                        My Order
                    </NavLink>
                </li>
                <li>
                    <NavLink to = '/electornics' className={({isActive})=> isActive ? activeStyle : undefined}>
                        My Orders
                    </NavLink>
                </li>
                <li>
                    <NavLink to = '/furnitures' className={({isActive})=> isActive ? activeStyle : undefined}>
                        Sign In
                    </NavLink>
                </li>
                <li>
                    <NavLink to = '/toys' className={({isActive})=> isActive ? activeStyle : undefined}> 
                        🚎 
                    </NavLink>
                </li>
            </ul>
        </nav>
    )
}
export default NavBar