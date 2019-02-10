import React from 'react';
import { shallow } from 'enzyme';
import Navbar from '../../components/Navbar';

describe('Testing the component', ()=>{
    it ('should render Navbar in the main component ', () =>{
        let mountNavbar = shallow(<Navbar/>);

        expect(mountNavbar.find('nav')).toBeDefined();
    });
});