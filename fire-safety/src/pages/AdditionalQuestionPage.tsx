import { IonContent, IonPage } from '@ionic/react';
import React from 'react';
import BottomNav from '../components/BottomNav';

import AdditionalQuestionDisplay from '../components/AdditionalQuestionDisplay';

import { SelectedPage } from '../types';
import './Home.css';

const TipListPage: React.FC = () => {
  return (
    <IonPage>
      <IonContent>
        <AdditionalQuestionDisplay />
        <BottomNav selected={SelectedPage.NONE}/>
      </IonContent>
    </IonPage>
  );
};

export default TipListPage;
