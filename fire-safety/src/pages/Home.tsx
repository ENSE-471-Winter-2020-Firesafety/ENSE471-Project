import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import React from 'react';
import BottomNav from '../components/BottomNav';
import PhoneDisplay from '../components/PhoneDisplay';
import { SelectedPage } from '../types';
import './Home.css';

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonContent>
        <PhoneDisplay />
        <BottomNav selected={SelectedPage.HOME}/>
      </IonContent>
    </IonPage>
  );
};

export default Home;
