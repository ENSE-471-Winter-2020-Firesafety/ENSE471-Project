import { IonContent, IonPage } from '@ionic/react';
import React from 'react';
import BottomNav from '../components/BottomNav';
import PhoneDisplay from '../components/PhoneDisplay';
import { SelectedPage } from '../types';
import '../styles/General.css';
import './Home.css';

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonContent className='centered'>
        <PhoneDisplay />
        <BottomNav selected={SelectedPage.HOME}/>
      </IonContent>
    </IonPage>
  );
};

export default Home;
