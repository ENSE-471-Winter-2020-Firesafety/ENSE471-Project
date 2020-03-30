import { IonButton, IonCol, IonContent, IonGrid, IonListHeader, IonPage, IonRow } from '@ionic/react';
import React from 'react';
import BottomNav from '../components/BottomNav';

import { SelectedPage } from '../types';
import '../styles/Info.css';
import '../styles/General.css';

const InfoPage: React.FC = () => {
  return (
    <IonPage>
      <IonContent>
        <IonListHeader className="textDisplay" style={{marginTop: '10px'}}>
          Info
        </IonListHeader>
        <IonGrid>
          <IonRow>
            <IonCol className="ion-text-center">
              <IonButton fill="outline" color="medium" size="large" shape="round" className="infoLink">
                Fire Escape Plan
              </IonButton>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol className="ion-text-center">
              <IonButton fill="outline" color="medium" size="large" shape="round" className="infoLink">
                Training Cards
              </IonButton>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol className="ion-text-center">
              <IonButton fill="outline" color="medium" size="large" shape="round" className="infoLink" href="./additionalquestions">
                Additional Questions
              </IonButton>
            </IonCol>
          </IonRow>
        </IonGrid>
        <BottomNav selected={SelectedPage.INFO}/>
      </IonContent>
    </IonPage>
  );
};

export default InfoPage;
