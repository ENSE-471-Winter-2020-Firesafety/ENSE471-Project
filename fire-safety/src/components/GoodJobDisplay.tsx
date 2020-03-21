import React from 'react';
import { IonIcon, IonItem, IonImg, IonRouterLink } from '@ionic/react';
import { chevronBackOutline } from 'ionicons/icons';
import '../styles/TryAgainDisplay.css';
import '../styles/General.css';

interface GoodJobDisplay {
}

type Item = {
    src: string;
    text: string;
}

const sparkyImg: Item = { src: 'assets/images/sparky.jpg', text: ''}

const GoodJobDisplay: React.FC<GoodJobDisplay> = (props: GoodJobDisplay) => (
  <>
    <IonItem className='textDisplay'>
      Good Job!
    </IonItem>
    <IonImg src={sparkyImg.src} className="contentImage"/>
    <IonRouterLink href='./home'>
      <IonIcon icon={chevronBackOutline} size="large" className='backIcon'></IonIcon>
    </IonRouterLink>
  </>
)

export default GoodJobDisplay;
