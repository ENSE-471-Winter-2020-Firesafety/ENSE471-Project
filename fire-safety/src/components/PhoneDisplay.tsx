import React from 'react';
import '../styles/PhoneDisplay.css';
import { IonButton, IonCol, IonContent, IonGrid, IonRow } from '@ionic/react';

interface PhoneDisplayProps { }

const PhoneDisplay: React.FC<PhoneDisplayProps> = () => {
  return (
    <IonContent>
      <div className="phoneContainer">
        <IonGrid>
          <IonRow>
            <IonCol>
              <IonButton shape="round" fill="outline" color="medium" size="large" className="phoneButton">1</IonButton>
            </IonCol>
            <IonCol>
              <IonButton shape="round" fill="outline" color="medium" size="large" className="phoneButton">2</IonButton>
            </IonCol>
            <IonCol>
              <IonButton shape="round" fill="outline" color="medium" size="large" className="phoneButton">3</IonButton>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              <IonButton shape="round" fill="outline" color="medium" size="large" className="phoneButton">4</IonButton>
            </IonCol>
            <IonCol>
              <IonButton shape="round" fill="outline" color="medium" size="large" className="phoneButton">5</IonButton>
            </IonCol>
            <IonCol>
              <IonButton shape="round" fill="outline" color="medium" size="large" className="phoneButton">6</IonButton>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              <IonButton shape="round" fill="outline" color="medium" size="large" className="phoneButton">7</IonButton>
            </IonCol>
            <IonCol>
              <IonButton shape="round" fill="outline" color="medium" size="large" className="phoneButton">8</IonButton>
            </IonCol>
            <IonCol>
              <IonButton shape="round" fill="outline" color="medium" size="large" className="phoneButton">9</IonButton>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              <IonButton shape="round" fill="outline" color="medium" size="large" className="phoneButton">*</IonButton>
            </IonCol>
            <IonCol>
              <IonButton shape="round" fill="outline" color="medium" size="large" className="phoneButton">0</IonButton>
            </IonCol>
            <IonCol>
              <IonButton shape="round" fill="outline" color="medium" size="large" className="phoneButton">#</IonButton>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol></IonCol>
            <IonCol>
              <IonButton shape="round" fill="outline" color="success" size="large" className="phoneButton">1</IonButton>
            </IonCol>
            <IonCol></IonCol>
          </IonRow>
        </IonGrid>
      </div>
    </IonContent>
  );
};

export default PhoneDisplay;
