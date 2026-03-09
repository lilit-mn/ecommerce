import { Link } from "react-router-dom"
import { useAuth } from '../context/AuthContext';
import { useCart } from "../context/CartContext";
export default function Navbar() {
    const { user, logout } = useAuth();

    
    const cartItems = useCart().cartItems;
    const totalQuantity = cartItems.reduce((total, item) => {
        return total + item.quantity
    }, 0)
    console.log(totalQuantity);

    return (
        <nav className="navbar">
            <div className="navbar-container">
                <Link to='/' className='navbar-brand'>
                    ShopHub
                </Link>
                <div className="navbar-links">
                    <Link to='/' className="navbar-link">Home</Link>
                    <Link to='/checkout' className="navbar-link" id="navbar-checkout">
                        Cart
                        {
                            totalQuantity>0 && (
                                <div className="cart-quantity">
                                    <span>
                                        {totalQuantity}
                                    </span>
                                </div>
                            )
                        }
                        
                        
                    </Link>
                </div>
                <div className="navbar-auth">
                    {!user ?
                        <div className="navbar-auth-links">
                            <Link to='/auth' className="btn btn-secondary">Login</Link>
                            <Link to='/auth' className="btn btn-primary">Signup</Link>     
                        </div> : (
                             <div className="navbar-user">
                                <span className="navbar-greeting">Hello {user.email}</span>
                                <button className="btn btn-secondary" onClick={logout}>Logout</button>
                             </div>
                        )
                    }
                </div>
            </div>
        </nav>
    ) 
}