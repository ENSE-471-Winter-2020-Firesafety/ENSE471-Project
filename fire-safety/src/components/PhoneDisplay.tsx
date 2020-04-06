import React, { useState } from 'react';
import { backspaceOutline, call } from 'ionicons/icons';
import DTMF, { KeypadKey } from '@kimmel/dtmf'
import { IonButton, IonCol, IonGrid, IonIcon, IonItem, IonRouterLink, IonRow } from '@ionic/react';
import '../styles/General.css';
import '../styles/PhoneDisplay.css';
import PhoneButton from './PhoneButton';

interface PhoneDisplayProps { }

// used to play number dial sounds
const player = new DTMF();

const PhoneDisplay: React.FC<PhoneDisplayProps> = () => {
  const [ dialedNumber, setDialedNumber ] = useState('');

  // adds a character to the dialed number
  function addCharacter(char: string) {
      if (dialedNumber.length < 3) {
          setDialedNumber(dialedNumber + char);
          player.play(char as KeypadKey);
          setTimeout(() => {
              player.stop();
          }, 300);
      } else {
          // jiggle the text when the user tries to add more than three characters
          // NOTE: setTimeout ms value should be the same as the animation-duration in General.css
          const text = document.getElementById('dialed');
          text!.className = 'jiggle numberLabel';
          setTimeout(() => {
              text!.className = 'numberLabel';
          }, 250);
      }
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
    <div className="phoneContainer container" style={{width: '300px'}}>
      <div className="textDisplay">
        CALL FOR EMERGENCY
      </div>
      <IonItem className="numberDisplay" lines="none">
        <div className="numberLabel" id="dialed">
          {dialedNumber}
        </div>
      </IonItem>
      <IonGrid>
        <IonRow>
          <IonCol>
            <PhoneButton mainText='1' subText='' addCharacter={addCharacter} />
          </IonCol>
          <IonCol>
            <PhoneButton mainText='2' subText='ABC' addCharacter={addCharacter} />
          </IonCol>
          <IonCol>
            <PhoneButton mainText='3' subText='DEF' addCharacter={addCharacter} />
          </IonCol>
        </IonRow>
        <IonRow>
          <IonCol>
            <PhoneButton mainText='4' subText='GHI' addCharacter={addCharacter} />
          </IonCol>
          <IonCol>
            <PhoneButton mainText='5' subText='JKL' addCharacter={addCharacter} />
          </IonCol>
          <IonCol>
            <PhoneButton mainText='6' subText='MNO' addCharacter={addCharacter} />
          </IonCol>
        </IonRow>
        <IonRow>
          <IonCol>
            <PhoneButton mainText='7' subText='PQRS' addCharacter={addCharacter} />
          </IonCol>
          <IonCol>
            <PhoneButton mainText='8' subText='TUV' addCharacter={addCharacter} />
          </IonCol>
          <IonCol>
            <PhoneButton mainText='9' subText='WXYZ' addCharacter={addCharacter} />
          </IonCol>
        </IonRow>
        <IonRow>
          <IonCol>
            <PhoneButton mainText='*' subText='' addCharacter={addCharacter} />
          </IonCol>
          <IonCol>
            <PhoneButton mainText='0' subText='+' addCharacter={addCharacter} />
          </IonCol>
          <IonCol>
            <PhoneButton mainText='#' subText='' addCharacter={addCharacter} />
          </IonCol>
        </IonRow>
        <IonRow>
          <IonCol></IonCol>
          <IonCol>
            <IonRouterLink href={isCorrect() ? './goodjob/home/question:0/1' : './tryagain'}>
              <IonButton shape="round" fill="solid" color="success" size="large" className="phoneButton">
                <IonIcon icon={call} size="small"></IonIcon>
              </IonButton>
            </IonRouterLink>
          </IonCol>
          <IonCol>
            <IonButton shape="round" fill="clear" className="backSpaceIcon" onClick={() => removeCharacter()}>
              <IonIcon icon={backspaceOutline} size="large"></IonIcon>
            </IonButton>
          </IonCol>
        </IonRow>
      </IonGrid>
    </div>
  );
};

export default PhoneDisplay;
