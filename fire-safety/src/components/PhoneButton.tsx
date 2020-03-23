import React from 'react';
import { IonButton } from '@ionic/react';
import '../styles/General.css';
import '../styles/PhoneDisplay.css';

interface PhoneButtonProps {
    mainText: string;
    subText: string;
    addCharacter: (char: string) => void;
}

const PhoneButton: React.FC<PhoneButtonProps> = (props: PhoneButtonProps) => {
    const { mainText, subText, addCharacter } = props;
    return (
      <IonButton shape="round" fill="outline" color="medium" size="large" onClick={() => addCharacter(mainText)} className='phoneButton'>
        <div>
          <div>{mainText}</div>
          <div className='subText'>{subText}</div>
        </div>
      </IonButton>
    );
};

export default PhoneButton;
