import Cover from '../Menu/Cover';
import coverImg from '../../assets/shop/banner2.jpg'
import useMenu from '../../Hooks/useMenu';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import OrderTab from './OrderTab';

const Order = () => {

    const categories = ['salad', 'pizza', 'soup', 'dessert', 'drinks'];
    const { category } = useParams();
    const initialIndex = categories.indexOf(category);
    const [tabIndex, setTabIndex] = useState(initialIndex);
    const [menu] = useMenu();
    
    const desserts = menu.filter(item => item.category === 'dessert');
    const soup = menu.filter(item => item.category === 'soup');
    const salad = menu.filter(item => item.category === 'salad');
    const pizza = menu.filter(item => item.category === 'pizza');
    const drinks = menu.filter(item => item.category === 'drinks');


    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Order Food</title>
            </Helmet>
            <Cover img={coverImg} title="Order Food"></Cover>     
            <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                <TabList  className="flex items-center justify-center mt-5 mb-5 gap-5 cursor-pointer border-[1px] border-black p-3 rounded-md">
                    <Tab className='px-2 py-1 '>Salad</Tab>
                    <Tab className='px-2 py-1 '>Pizza</Tab>
                    <Tab className='px-2 py-1 '>Soup</Tab>
                    <Tab className='px-2 py-1 '>Dessert</Tab>
                    <Tab className='px-2 py-1 '>Drinks</Tab>
                </TabList>
                <TabPanel>
                    <OrderTab items={salad}></OrderTab>
                </TabPanel>
                <TabPanel>
                    <OrderTab items={pizza}></OrderTab>
                </TabPanel>
                <TabPanel>
                    <OrderTab items={soup}></OrderTab>
                </TabPanel>
                <TabPanel>
                    <OrderTab items={desserts}></OrderTab>
                </TabPanel>
                <TabPanel>
                    <OrderTab items={drinks}></OrderTab>
                </TabPanel>
            </Tabs>       
        </div>
    );
};

export default Order;