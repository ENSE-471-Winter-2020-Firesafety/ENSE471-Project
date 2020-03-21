import React, { useState } from 'react';
import { backspaceOutline, call } from 'ionicons/icons';
import { IonButton, IonCol, IonGrid, IonIcon, IonItem, IonLabel, IonRouterLink, IonRow } from '@ionic/react';
import '../styles/General.css';
import '../styles/PhoneDisplay.css';

interface PhoneDisplayProps { }

const PhoneDisplay: React.FC<PhoneDisplayProps> = () => {
  const [ dialedNumber, setDialedNumber ] = useState('');

  // adds a character to the dialed number
  function addCharacter(char: string) {
      setDialedNumber(dialedNumber + char);
  }

  // removes a character from the dialed number
  function removeCharacter() {
      if (dialedNumber) {
          setDialedNumber(dialedNumber.substr(0, dialedNumber.length - 1))
      } else {
          setDialedNumber('');
      }
  }

  // checks if the number entered is 911
  function isCorrect() {
      return dialedNumber === '911';
  }

  return (
    <div className="phoneContainer container">
      <IonItem className="textDisplay">
        Call for Emergency
      </IonItem>
      <IonItem className="numberDisplay">
        <IonLabel className="numberLabel">
          {dialedNumber}
        </IonLabel>
      </IonItem>
      <IonGrid>
        <IonRow>
          <IonCol>
            <IonButton shape="round" fill="outline" color="medium" size="large" className="phoneButton" onClick={() => addCharacter('1')}>1</IonButton>
          </IonCol>
          <IonCol>
            <IonButton shape="round" fill="outline" color="medium" size="large" className="phoneButton" onClick={() => addCharacter('2')}>2</IonButton>
          </IonCol>
          <IonCol>
            <IonButton shape="round" fill="outline" color="medium" size="large" className="phoneButton" onClick={() => addCharacter('3')}>3</IonButton>
          </IonCol>
        </IonRow>
        <IonRow>
          <IonCol>
            <IonButton shape="round" fill="outline" color="medium" size="large" className="phoneButton" onClick={() => addCharacter('4')}>4</IonButton>
          </IonCol>
          <IonCol>
            <IonButton shape="round" fill="outline" color="medium" size="large" className="phoneButton" onClick={() => addCharacter('5')}>5</IonButton>
          </IonCol>
          <IonCol>
            <IonButton shape="round" fill="outline" color="medium" size="large" className="phoneButton" onClick={() => addCharacter('6')}>6</IonButton>
          </IonCol>
        </IonRow>
        <IonRow>
          <IonCol>
            <IonButton shape="round" fill="outline" color="medium" size="large" className="phoneButton" onClick={() => addCharacter('7')}>7</IonButton>
          </IonCol>
          <IonCol>
            <IonButton shape="round" fill="outline" color="medium" size="large" className="phoneButton" onClick={() => addCharacter('8')}>8</IonButton>
          </IonCol>
          <IonCol>
            <IonButton shape="round" fill="outline" color="medium" size="large" className="phoneButton" onClick={() => addCharacter('9')}>9</IonButton>
          </IonCol>
        </IonRow>
        <IonRow>
          <IonCol>
            <IonButton shape="round" fill="outline" color="medium" size="large" className="phoneButton" onClick={() => addCharacter('*')}>*</IonButton>
          </IonCol>
          <IonCol>
            <IonButton shape="round" fill="outline" color="medium" size="large" className="phoneButton" onClick={() => addCharacter('0')}>0</IonButton>
          </IonCol>
          <IonCol>
            <IonButton shape="round" fill="outline" color="medium" size="large" className="phoneButton" onClick={() => addCharacter('#')}>#</IonButton>
          </IonCol>
        </IonRow>
        <IonRow>
          <IonCol></IonCol>
          <IonCol>
            <IonRouterLink href={isCorrect() ? './goodjob/home/tryagain' : './tryagain'}>
              <IonButton shape="round" fill="outline" color="success" size="large" className="phoneButton">
                <IonIcon icon={call} size="small"></IonIcon>
              </IonButton>
            </IonRouterLink>
          </IonCol>
          <IonCol>
            <IonButton shape="round" fill="clear" className="phoneButton" onClick={() => removeCharacter()}>
              <IonIcon icon={backspaceOutline} size="large" className="backSpaceIcon"></IonIcon>
            </IonButton>
          </IonCol>
        </IonRow>
      </IonGrid>
    </div>
  );
};

export default PhoneDisplay;
