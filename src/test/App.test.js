import React from 'react';
import ReactDOM from 'react-dom';
import App from '../App';
import { shallow, mount } from 'enzyme';
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import AsideCustom from '../components/AsideCustom';

describe('Testing Main Component', () => {

    let mockData = [];

    beforeEach(() => {
        mockData = [
            {
                "event": {
                    "name": "Manchester City - Chelsea",
                    "homeName": "Manchester City",
                    "awayName": "Chelsea",
                    "start": "2019-02-10T16:00Z",
                    "group": "Premier League",
                    "type": "ET_MATCH",
                    "sport": "FOOTBALL",
                    "state": "STARTED",
                    "liveBetOffers": true,
                    "openForLiveBetting": true,
                    "id": 1005044509,
                    "groupId": 1000094985,
                    "path": [
                        {
                            "id": 1000093190,
                            "name": "Football",
                            "englishName": "Football"
                        },
                        {
                            "id": 1000461733,
                            "name": "England",
                            "englishName": "England"
                        },
                        {
                            "id": 1000094985,
                            "name": "Premier League",
                            "englishName": "Premier League"
                        }
                    ]
                },
                "liveData": {
                    "eventId": 1005044509,
                    "open": true,
                    "matchClock": {
                        "minute": 6,
                        "second": 28,
                        "running": true,
                        "period": "1st half"
                    },
                    "score": {
                        "home": "1",
                        "away": "0",
                        "who": "UNKNOWN"
                    },
                    "statistics": {
                        "football": {
                            "home": {
                                "yellowCards": 0,
                                "redCards": 0,
                                "corners": 0
                            },
                            "away": {
                                "yellowCards": 0,
                                "redCards": 0,
                                "corners": 0
                            }
                        }
                    }
                },
                "mainBetOffer": {
                    "id": 2153639881,
                    "eventId": 1005044509,
                    "main": true,
                    "live": true,
                    "startingPrice": false,
                    "criterion": {
                        "id": 1001159858,
                        "label": "Full Time"
                    },
                    "betOfferType": {
                        "id": 2,
                        "name": "Match",
                        "englishName": "Match"
                    },
                    "outcomes": [
                        {
                            "id": 2544314231,
                            "odds": 1210,
                            "label": "1",
                            "type": "OT_ONE",
                            "changedDate": "2019-02-10T16:05:44Z",
                            "participant": "Manchester City",
                            "oddsFractional": "1/5",
                            "oddsAmerican": "-480"
                        },
                        {
                            "id": 2544314232,
                            "odds": 6100,
                            "label": "X",
                            "type": "OT_CROSS",
                            "changedDate": "2019-02-10T16:05:44Z",
                            "oddsFractional": "5/1",
                            "oddsAmerican": "510"
                        },
                        {
                            "id": 2544314233,
                            "odds": 14000,
                            "label": "2",
                            "type": "OT_TWO",
                            "changedDate": "2019-02-10T16:05:44Z",
                            "participant": "Chelsea",
                            "oddsFractional": "13/1",
                            "oddsAmerican": "1300"
                        }
                    ],
                    "prematch": true,
                    "cashOutStatus": "ENABLED"
                }
            },
            {
                "event": {
                    "name": "Valencia - Real Sociedad",
                    "homeName": "Valencia",
                    "awayName": "Real Sociedad",
                    "start": "2019-02-10T15:15Z",
                    "group": "La Liga",
                    "type": "ET_MATCH",
                    "sport": "FOOTBALL",
                    "state": "STARTED",
                    "liveBetOffers": true,
                    "openForLiveBetting": true,
                    "streamed": true,
                    "id": 1005235078,
                    "groupId": 1000095049,
                    "streams": [
                        {
                            "channelId": 1
                        },
                        {
                            "channelId": 3
                        }
                    ],
                    "path": [
                        {
                            "id": 1000093190,
                            "name": "Football",
                            "englishName": "Football"
                        },
                        {
                            "id": 1000461813,
                            "name": "Spain",
                            "englishName": "Spain"
                        },
                        {
                            "id": 1000095049,
                            "name": "La Liga",
                            "englishName": "La Liga"
                        }
                    ]
                },
                "liveData": {
                    "eventId": 1005235078,
                    "open": true,
                    "matchClock": {
                        "minute": 45,
                        "second": 0,
                        "running": false,
                        "period": "2nd half"
                    },
                    "score": {
                        "home": "0",
                        "away": "0",
                        "who": "UNKNOWN"
                    },
                    "statistics": {
                        "football": {
                            "home": {
                                "yellowCards": 1,
                                "redCards": 0,
                                "corners": 2
                            },
                            "away": {
                                "yellowCards": 1,
                                "redCards": 0,
                                "corners": 4
                            }
                        }
                    }
                },
                "mainBetOffer": {
                    "id": 2153374587,
                    "eventId": 1005235078,
                    "main": true,
                    "live": true,
                    "startingPrice": false,
                    "criterion": {
                        "id": 1001159858,
                        "label": "Full Time"
                    },
                    "betOfferType": {
                        "id": 2,
                        "name": "Match",
                        "englishName": "Match"
                    },
                    "outcomes": [
                        {
                            "id": 2543433068,
                            "odds": 2350,
                            "label": "1",
                            "type": "OT_ONE",
                            "changedDate": "2019-02-10T16:02:33Z",
                            "participant": "Valencia",
                            "oddsFractional": "27/20",
                            "oddsAmerican": "135"
                        },
                        {
                            "id": 2543433069,
                            "odds": 2350,
                            "label": "X",
                            "type": "OT_CROSS",
                            "changedDate": "2019-02-10T16:02:33Z",
                            "oddsFractional": "27/20",
                            "oddsAmerican": "135"
                        },
                        {
                            "id": 2543433070,
                            "odds": 4750,
                            "label": "2",
                            "type": "OT_TWO",
                            "changedDate": "2019-02-10T16:02:33Z",
                            "participant": "Real Sociedad",
                            "oddsFractional": "15/4",
                            "oddsAmerican": "375"
                        }
                    ],
                    "prematch": true,
                    "cashOutStatus": "ENABLED"
                }
            }
        ];
    });

    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<App/>, div);
        ReactDOM.unmountComponentAtNode(div);
    });

    it('should render header in the main component', ()=>{
       let mountHeader = shallow(<Header />);

        //Mounted the componenet
        expect(mountHeader.find('header')).toBeDefined();

        expect(mountHeader.find('div')).toBeDefined();
    });

    it ('should render Footer in the main component ', () =>{
        let mountFooter = shallow(<Footer/>);

        expect(mountFooter.find('footer')).toBeDefined();
    });

    it ('should render Navbar in the main component ', () =>{
        let mountFooter = shallow(<Navbar/>);

        expect(mountFooter.find('navbar')).toBeDefined();
    });

    it('should render AsideCustom in the main component', () =>{
        let mountFooter = shallow(<AsideCustom/>);
        expect(mountFooter.find('aside')).toBeDefined();
    });

    it('Checking the componentDidMount method', async () => {
        const componentDidMount = jest.spyOn(App.prototype, 'componentDidMount');
        const requestMatches = jest.spyOn(App.prototype, 'requestMatches');
        const renewMatches = jest.spyOn(App.prototype, 'renewMatches');

        const app = mount(<App/>);
        app.setState({
            matches: mockData
        });
        expect(componentDidMount).toHaveBeenCalledTimes(1);
        expect(requestMatches).toHaveBeenCalledTimes(1);
        expect(renewMatches).toHaveBeenCalledTimes(1);

        expect(app.state().matches.length).toBe(2);

    });

});