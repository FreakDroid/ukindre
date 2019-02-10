import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { shallow } from 'enzyme';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import AsideCustom from './components/AsideCustom';
import ScoreBet from './components/ScoreBet';

describe('Testing Main Component', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<App/>, div);
        ReactDOM.unmountComponentAtNode(div);
    });

    it('should render header in the main', ()=>{
       let mountHeader = shallow(<Header />);

        //Mounted the componenet
        expect(mountHeader.find('header')).toBeDefined();

        expect(mountHeader.type()).toEqual('table');
    });
});