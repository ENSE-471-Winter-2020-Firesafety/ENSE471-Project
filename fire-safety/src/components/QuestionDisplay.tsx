import React from 'react';
import { IonCol, IonGrid, IonIcon, IonRouterLink, IonRow } from '@ionic/react';
import { chevronBackOutline, chevronForwardOutline } from 'ionicons/icons';
import { Questions } from '../data';
import '../styles/General.css';

interface QuestionDisplayRoutingProps {
    questionIndex: number;
}

// renders text with icon for the question, and renders links to previous and next question
const QuestionDisplay: React.FC<QuestionDisplayRoutingProps> = (props: QuestionDisplayRoutingProps) => {
    const questionIndex = props.questionIndex;
    const { text, icon } = Questions[questionIndex];

    // develop the previous and next urls for navigation
    // the goodjob component takes the previous url, next url, and number of stars to render as path parameters
    let prevUrl: string;
    let nextUrl: string;

    if (questionIndex == 0) {
        prevUrl = './home';
        nextUrl = `./goodjob/question:${questionIndex}/question:${questionIndex + 1}/${questionIndex + 2}`;
    } else if (questionIndex == (Questions.length - 1)) {
        prevUrl = './question/' + (questionIndex - 1);
        nextUrl = `./goodjob/question:${questionIndex}/home/${questionIndex + 2}`;
    } else {
        prevUrl = './question/' + (questionIndex - 1);
        nextUrl = `./goodjob/question:${questionIndex}/question:${questionIndex + 1}/${questionIndex + 2}`;
    }

    return (
        <>
          <div className='textDisplay'>
            {text}
          </div>
          <div className='hintIconContainer'>
            <IonIcon icon={icon} size="large" className='navIcon'></IonIcon>
          </div>
          <IonGrid className='ion-text-center'>
            <IonRow>
              <IonCol>
                <IonRouterLink href={prevUrl}>
                  <IonIcon icon={chevronBackOutline} size='large' className='navIcon'></IonIcon>
                </IonRouterLink>
              </IonCol>
              <IonCol>
              </IonCol>
              <IonCol >
                <IonRouterLink href={nextUrl}>
                  <IonIcon icon={chevronForwardOutline} size='large' className='navIcon'></IonIcon>
                </IonRouterLink>
              </IonCol>
            </IonRow>
          </IonGrid>
        </>
    );
}

export default QuestionDisplay;
