import React, {Component} from 'react';
import logo from './logo.svg';
import './css/main.css';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import AsideCustom from './components/AsideCustom';
import axios from 'axios';

import "react-responsive-carousel/lib/styles/carousel.min.css";
import CarouselScores from './components/CarouselScores';


class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            matches: [],
            isLoaded: false,
            error: ''
        };
        this.goToBet = this.goToBet.bind(this);
    }

    ///Every 2 minutes the matches will be refreshed.
    renewMatches(){
        setInterval(() =>{
            this.requestMatches();
        }, 60 * 2000)
    }


    //React Lifecicle :P
    componentDidMount(){
        this.requestMatches();
        this.renewMatches();
    }

    //Clear the setInterval when the component will be unmounted
    componentWillUnmount() {
        clearInterval(this.renewMatches);
    }


    //Method to request Matches
    async requestMatches(){
        try {
            //Get the matches from the server
            const apiResponse = await axios('http://api.unicdn.net/v1/feeds/sportsbook/event/live.jsonp?app_id=ca7871d7&app_key=5371c125b8d99c8f6b5ff9a12de8b85a');
            console.log(apiResponse.data.liveEvents);

            //Save it on the state
            this.setState({
                matches: apiResponse.data.liveEvents,
                isLoaded: true,
            });
            console.log(this.state.matches[0].event.name);
        } catch (e) {
            console.log(e.message);
            //If something went wrong I got the error to show it.
            this.setState({
                error: e.message
            });
        }
    }

    //Method to go to unibet for bet :D
    goToBet(e) {
        console.log("Cliked ", e);
        let id = e.event && e.event.id;
        id ? window.open('https://www.unibet.com/betting#/event/live/'+id, "_blank") : console.log('No ID');
    }

    render() {

        return (
            <div className="App" id="container">
                <Header logo={logo}/>
                <Navbar/>
                <div id="content">
                    <article>
                        <h1>Live matches</h1>
                        <p className="preamble">
                            Here is a list of matches that are live right now.
                        </p>
                        <AsideCustom />
                        <div id="live-matches">
                            {

                                /// If the state has an error show div with error
                                (this.state && this.state.error)
                                    ? <div className="scores error"> <p className="padding-top">{this.state.error}</p></div>
                                    :
                                    //if the matches are not loaded yet show the loading
                                    (!this.state.isLoaded)
                                        ?
                                        <div className="scores loading">
                                          <p className="padding-top"> LOADING MATCHES </p>
                                        </div>
                                        :
                                        //otherwise show the carousel :D
                                        <CarouselScores event={this.goToBet} matches={this.state.matches}/>
                            }
                        </div>
                    </article>
                </div>
                <Footer/>
            </div>
        );
    }
}

export default App;
