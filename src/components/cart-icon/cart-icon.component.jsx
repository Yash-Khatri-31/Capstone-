import './cart-icon.component';
import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';

const CartIcon = () => {

    const { toggle, setToggle } = useContext(CartContext);

    const toggleHandler = () => setToggle(!toggle);

    return (
        <div className='cart-icon-container' onClick={toggleHandler}>
            <ShoppingIcon className='shopping-icon' />
            <span className='item-count'>0</span>
        </div>
    )
};

export default CartIcon;