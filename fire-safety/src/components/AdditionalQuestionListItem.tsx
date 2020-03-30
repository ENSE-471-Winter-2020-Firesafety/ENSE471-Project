import React from 'react';
import { IonItem } from '@ionic/react';
import '../styles/General.css';
import '../styles/List.css';

interface TipListItemProps {
    name: string;
    usefulQuestions: string[];
}

const TipListItem: React.FC<TipListItemProps> = (props: TipListItemProps) => {
    const { name, usefulQuestions } = props;
    console.log(usefulQuestions);
    return (
        <>
          <IonItem className='maintext'>
            {name}
          </IonItem>
          {usefulQuestions.map((question: string) => (
            <IonItem className='subtext' lines='none' key={question}>
              {question}
            </IonItem>
          ))}
        </>
    );
};

export default TipListItem;
