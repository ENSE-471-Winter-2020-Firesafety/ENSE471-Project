import { IonContent, IonPage } from '@ionic/react';
import React from 'react';
import BottomNav from '../components/BottomNav';
import GoodJobDisplay from '../components/GoodJobDisplay';
import { SelectedPage } from '../types';
import './Page.css';

const GoodJobPage: React.FC = () => {
  return (
    <IonPage>
      <IonContent className='container'>
        <GoodJobDisplay />
        <BottomNav selected={SelectedPage.NONE}/>
      </IonContent>
    </IonPage>
  );
};

export default GoodJobPage;
