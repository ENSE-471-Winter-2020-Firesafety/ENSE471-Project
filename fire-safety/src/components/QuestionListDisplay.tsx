import React from 'react';
import { IonList } from '@ionic/react';
import '../styles/General.css';
import { QuestionType, Questions } from '../data';
import QuestionListItem from './QuestionListItem';

// responsible for rendering all of the questions stored in data to a list with sample answers
const QuestionListDisplay: React.FC = () => {

  return (
    <div className="container">
      <div className="textDisplay" style={{marginTop: '10px'}}>
        911 Questions
      </div>
      <IonList>
        {Questions.map((question: QuestionType, index: number) => (
            <QuestionListItem index={index} question={question.text} key={question.text} answer={question.sampleAnswer}/>
        ))}
      </IonList>

    </div>
  );
};

export default QuestionListDisplay;
