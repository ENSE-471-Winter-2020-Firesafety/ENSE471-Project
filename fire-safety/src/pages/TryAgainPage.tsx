import { IonContent, IonPage } from '@ionic/react';
import React from 'react';
import BottomNav from '../components/BottomNav';
import TryAgainDisplay from '../components/TryAgainDisplay';
import { SelectedPage } from '../types';
import './Page.css';

const TryAgainPage: React.FC = () => {
  return (
    <IonPage>
      <IonContent className='container'>
        <TryAgainDisplay />
        <BottomNav selected={SelectedPage.NONE}/>
      </IonContent>
    </IonPage>
  );
};

export default TryAgainPage;
