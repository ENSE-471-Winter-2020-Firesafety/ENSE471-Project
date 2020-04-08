import React from 'react';
import { IonList, IonListHeader, IonIcon, IonItem, IonRouterLink } from '@ionic/react';
import { chevronBackOutline } from 'ionicons/icons';
import '../styles/General.css';
import '../styles/Info.css';
import { AdditionalQuestionType, AdditionalQuestions } from '../data';
import AdditionalQuestionListItem from './AdditionalQuestionListItem';

// responsible for rendering all of the questions stored in data to a list with sample answers
const AdditionalQuestionDisplay: React.FC = () => {

  return (
    <div className="container">
      <div className="textDisplay infoBackIcon">
        <IonRouterLink href="./info">
          <IonIcon icon={chevronBackOutline} size="large" className='navIcon'></IonIcon>
        </IonRouterLink>
        Additional 911 Questions
      </div>
      <IonList style={{paddingBottom: '60px'}}>
        <IonItem lines='none'>
          You may be asked the following questions by a 911 operator, depending on the situation:
        </IonItem>
        {AdditionalQuestions.map((group: AdditionalQuestionType) => (
            <AdditionalQuestionListItem key={group.group} name={group.group} usefulQuestions={group.usefulQuestions}/>
        ))}
      </IonList>

    </div>
  );
};

export default AdditionalQuestionDisplay;
