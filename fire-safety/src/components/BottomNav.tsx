import React from 'react';
import { apps, chatbubbleEllipses, informationCircle } from 'ionicons/icons';
import { IonCol, IonFooter, IonGrid, IonIcon, IonRouterLink, IonRow } from '@ionic/react';
import '../styles/BottomNav.css';
import '../styles/General.css';
import { SelectedPage } from '../types';

interface BottomNavProps {
  selected: SelectedPage;
}

const BottomNav: React.FC<BottomNavProps> = (props: BottomNavProps) => (
  <IonFooter className="bottomNav container">
    <IonGrid>
      <IonRow>
        <IonCol className={props.selected == SelectedPage.HOME ? "selected" : ""}>
          <IonRouterLink href="./home">
            <IonIcon icon={apps} size="large" className='toolBarIcon'></IonIcon>
          </IonRouterLink>
        </IonCol>
        <IonCol className={props.selected == SelectedPage.QUESTIONS ? "selected" : ""}>
          <IonRouterLink href="./questionlist">
            <IonIcon icon={chatbubbleEllipses} size="large" className='toolBarIcon'></IonIcon>
          </IonRouterLink>
        </IonCol>
        <IonCol className={props.selected == SelectedPage.INFO ? "selected" : ""}>
          <IonRouterLink href="./home">
            <IonIcon icon={informationCircle} size="large" className='toolBarIcon'></IonIcon>
          </IonRouterLink>
        </IonCol>
      </IonRow>
    </IonGrid>
  </IonFooter>
)

export default BottomNav;
