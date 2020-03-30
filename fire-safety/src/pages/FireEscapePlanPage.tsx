import { IonContent, IonPage } from '@ionic/react';
import React from 'react';
import BottomNav from '../components/BottomNav';

import FireEscapePlanDisplay from '../components/FireEscapePlanDisplay';

import { SelectedPage } from '../types';
import './Home.css';

const FireEscapePlanPage: React.FC = () => {
  return (
    <IonPage>
      <IonContent>
        <FireEscapePlanDisplay />
        <BottomNav selected={SelectedPage.NONE}/>
      </IonContent>
    </IonPage>
  );
};

export default FireEscapePlanPage;
