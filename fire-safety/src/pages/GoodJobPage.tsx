import { IonContent, IonPage } from '@ionic/react';
import React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import BottomNav from '../components/BottomNav';
import GoodJobDisplay from '../components/GoodJobDisplay';
import { SelectedPage } from '../types';
import './Page.css';

interface GoodJobRoutingProps extends RouteComponentProps<{
    prevPage: string;
    nextPage: string;
    numStars: string;
}> {}

const GoodJobPage: React.FC<GoodJobRoutingProps> = ({match}) => {
  return (
    <IonPage>
      <IonContent className='container'>
        <GoodJobDisplay
          prevPage={match.params.prevPage.replace(':', '/')}
          nextPage={match.params.nextPage.replace(':', '/')}
          numStars={parseInt(match.params.numStars)}
        />
        <BottomNav selected={SelectedPage.NONE}/>
      </IonContent>
    </IonPage>
  );
};

export default GoodJobPage;
