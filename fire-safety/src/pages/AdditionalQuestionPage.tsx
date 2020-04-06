import { IonContent, IonPage } from '@ionic/react';
import React from 'react';
import BottomNav from '../components/BottomNav';

import AdditionalQuestionDisplay from '../components/AdditionalQuestionDisplay';

import { SelectedPage } from '../types';
import '../styles/General.css';
import './Home.css';

const AdditionalQuestionPage: React.FC = () => {
  return (
    <IonPage>
      <IonContent className='centered'>
        <AdditionalQuestionDisplay />
        <BottomNav selected={SelectedPage.NONE}/>
      </IonContent>
    </IonPage>
  );
};

export default AdditionalQuestionPage;
