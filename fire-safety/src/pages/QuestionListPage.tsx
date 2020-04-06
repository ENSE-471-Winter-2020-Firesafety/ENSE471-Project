import { IonContent, IonPage } from '@ionic/react';
import React from 'react';
import BottomNav from '../components/BottomNav';

import QuestionListDisplay from '../components/QuestionListDisplay';

import { SelectedPage } from '../types';
import '../styles/General.css';
import './Home.css';

const QuestionListPage: React.FC = () => {
  return (
    <IonPage>
      <IonContent className='centered'>
        <QuestionListDisplay />
        <BottomNav selected={SelectedPage.QUESTIONS}/>
      </IonContent>
    </IonPage>
  );
};

export default QuestionListPage;
