import { IonButton, IonCol, IonContent, IonGrid, IonPage, IonRow } from '@ionic/react';
import React from 'react';
import BottomNav from '../components/BottomNav';

import { SelectedPage } from '../types';
import '../styles/Info.css';
import '../styles/General.css';

const InfoPage: React.FC = () => {
  return (
    <IonPage>
      <IonContent className='centered'>
        <div className="textDisplay" style={{marginTop: '10px'}}>
          Info
        </div>
        <IonGrid>
          <IonRow>
            <IonCol className="ion-text-center">
              <IonButton fill="outline" color="medium" size="large" shape="round" className="infoLink" href="./escapeplan">
                Fire Escape Plan
              </IonButton>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol className="ion-text-center">
              <IonButton fill="outline" color="medium" size="large" shape="round" className="infoLink" href="./trainingcards">
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
