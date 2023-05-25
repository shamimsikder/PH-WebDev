import { Helmet } from 'react-helmet-async';
import menuImg from '../../assets/menu/menu-bg.png'
import Cover from './Cover';


const Menu = () => {
    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Menu</title>
            </Helmet>
            <Cover img={menuImg} title="our menu"></Cover>
        </div>
    );
};

export default Menu;