import React from 'react';
import { shallow } from 'enzyme';
import Header from '../../components/Header';

describe('Testing the component', ()=>{
    it('should render header in the main component', ()=>{
        let mountHeader = shallow(<Header />);

        //Mounted the componenet
        expect(mountHeader.find('header')).toBeDefined();

        expect(mountHeader.find('div')).toBeDefined();
    });
});