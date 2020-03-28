import React from 'react';
import { IonItem } from '@ionic/react';
import '../styles/General.css';
import '../styles/QuestionList.css';

interface QuestionListItemProps {
    question: string;
    answer: string;
}

const QuestionListItem: React.FC<QuestionListItemProps> = (props: QuestionListItemProps) => {
    const { question, answer } = props;
    return (
        <>
          <IonItem className='question'>
            {question}
          </IonItem>
          <IonItem className='answer'>
            {answer}
          </IonItem>
        </>
    );
};

export default QuestionListItem;
