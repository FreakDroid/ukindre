
import React, {Fragment} from 'react';
import { Carousel } from 'react-responsive-carousel';
import ScoreBet from './ScoreBet';


const CarouselScores = ({event, matches}) => {
    return (
        //Otherwise show the carousel
        <Carousel className="scores"
                  autoPlay={true} showThumbs={false} interval={3000} infiniteLoop={true}
                  transitionTime={500} showIndicators={false} showStatus={false} stopOnHover={false}
                  showArrows={false}>
            {
                //When the state has loaded the matches, show it
                matches.length > 0 && matches.map((match, i) =>
                    <Fragment key={i}>
                        <ScoreBet score={match} clickToBet={() => event(match)}/>
                    </Fragment>
                )
            }
        </Carousel>
    )
};

export default CarouselScores;