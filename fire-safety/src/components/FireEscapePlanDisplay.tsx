import React from 'react';
import { IonIcon, IonImg, IonListHeader, IonRouterLink } from '@ionic/react';
import { chevronBackOutline } from 'ionicons/icons';
import '../styles/General.css';
import '../styles/Info.css';

type Item = {
    src: string;
    text: string;
}

const EscapePlanImages: Item[] = [
    { src: 'assets/images/escape_plan_page_1.jpg', text: ''},
    { src: 'assets/images/escape_plan_page_2.jpg', text: ''},
    { src: 'assets/images/escape_plan_page_3.jpg', text: ''},
]

const FireEscapePlanDisplay: React.FC = () => {
    return (
      <>
        <IonListHeader className="textDisplay infoBackIcon">
          <IonRouterLink href="./info">
            <IonIcon icon={chevronBackOutline} size="large" className='navIcon'></IonIcon>
          </IonRouterLink>
          Fire Escape Plan
        </IonListHeader>
        {EscapePlanImages.map((image: Item) => (
          <IonImg src={image.src} className="contentImage"/>
        ))}
      </>
    )
}

export default FireEscapePlanDisplay;
