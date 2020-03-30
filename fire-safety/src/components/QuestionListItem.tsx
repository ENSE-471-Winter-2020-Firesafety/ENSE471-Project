import React from 'react';
import { IonItem } from '@ionic/react';
import '../styles/General.css';
import '../styles/List.css';

interface QuestionListItemProps {
    question: string;
    answer: string;
}

const QuestionListItem: React.FC<QuestionListItemProps> = (props: QuestionListItemProps) => {
    const { question, answer } = props;
    return (
        <>
          <IonItem className='maintext'>
            {question}
          </IonItem>
          <IonItem className='subtext'>
            Ans: {answer}
          </IonItem>
        </>
    );
};

export default QuestionListItem;
