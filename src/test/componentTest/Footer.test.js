import React from 'react';
import { shallow } from 'enzyme';
import Footer from '../../components/Footer';

describe('Testing Aside Component', ()=>{
    it ('should render Footer component ', () =>{
        let mountFooter = shallow(<Footer/>);
        expect(mountFooter.find('footer')).toBeDefined();
    });
})
