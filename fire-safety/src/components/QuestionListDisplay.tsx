import React from 'react';
import { IonItem, IonList } from '@ionic/react';
import '../styles/General.css';
import { QuestionType, Questions } from '../data';
import QuestionListItem from './QuestionListItem';

// responsible for rendering all of the questions stored in data to a list with sample answers
const QuestionListDisplay: React.FC = () => {

  return (
    <div className="container">
      <IonItem className="textDisplay">
        911 Questions
      </IonItem>
      <IonList>
        {Questions.map((question: QuestionType) => (
            <QuestionListItem question={question.text} answer={question.sampleAnswer}/>
        ))}
      </IonList>

    </div>
  );
};

export default QuestionListDisplay;
