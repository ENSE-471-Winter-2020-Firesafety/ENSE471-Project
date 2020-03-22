import { IonContent, IonPage } from '@ionic/react';
import React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import BottomNav from '../components/BottomNav';
import QuestionDisplay from '../components/QuestionDisplay';
import { SelectedPage } from '../types';
import './Page.css';

interface GoodJobRoutingProps extends RouteComponentProps<{
    choice: string;
}> {}

const QuestionPage: React.FC<GoodJobRoutingProps> = ({match}) => {
  // get selected choice from props
  // choice corresponds to the index of the question in the Questions array
  const choice = parseInt(match.params.choice);
  return (
    <IonPage>
      <IonContent className='container'>
        <QuestionDisplay questionIndex={choice} /> 
        <BottomNav selected={SelectedPage.NONE}/>
      </IonContent>
    </IonPage>
  );
};

export default QuestionPage;
