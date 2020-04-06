import { IonContent, IonPage } from '@ionic/react';
import React from 'react';
import BottomNav from '../components/BottomNav';

import TrainingCardDisplay from '../components/TrainingCardDisplay';

import { SelectedPage } from '../types';
import '../styles/General.css'
import './Home.css';

const TrainingCardPage: React.FC = () => {
  return (
    <IonPage>
      <IonContent className='centered'>
        <TrainingCardDisplay />
        <BottomNav selected={SelectedPage.NONE}/>
      </IonContent>
    </IonPage>
  );
};

export default TrainingCardPage;
