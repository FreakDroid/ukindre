import React from 'react';
import AsideCustom from '../../components/AsideCustom';
import { shallow } from 'enzyme';


describe('Testing Aside Component', () => {
    it('should render AsideCustom component', () =>{
        let mountFooter = shallow(<AsideCustom/>);
        expect(mountFooter.find('aside')).toBeDefined();
    });
});