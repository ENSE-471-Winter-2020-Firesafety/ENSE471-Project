import React from 'react';
import { IonItem } from '@ionic/react';
import '../styles/General.css';
import '../styles/List.css';

interface QuestionListItemProps {
    index: number;
    question: string;
    answer: string;
}

const QuestionListItem: React.FC<QuestionListItemProps> = (props: QuestionListItemProps) => {
    const { index, question, answer } = props;
    return (
        <>
          <IonItem className='maintext' lines='none'>
            {(index + 1) + '. ' + question}
          </IonItem>
          <IonItem className='subtext' lines='none'>
            {answer}
          </IonItem>
        </>
    );
};

export default QuestionListItem;
