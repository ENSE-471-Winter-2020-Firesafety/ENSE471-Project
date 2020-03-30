import React from 'react';
import { IonList, IonListHeader, IonItem } from '@ionic/react';
import '../styles/General.css';
import { AdditionalQuestionType, AdditionalQuestions } from '../data';
import AdditionalQuestionListItem from './AdditionalQuestionListItem';

// responsible for rendering all of the questions stored in data to a list with sample answers
const AdditionalQuestionDisplay: React.FC = () => {

  return (
    <div className="container">
      <IonListHeader className="textDisplay" style={{marginTop: '10px'}}>
        Additional 911 Questions
      </IonListHeader>
      <IonList>
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
