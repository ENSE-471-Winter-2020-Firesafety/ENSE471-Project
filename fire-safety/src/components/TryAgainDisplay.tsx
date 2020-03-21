import React from 'react';
import { IonIcon, IonItem, IonImg, IonRouterLink } from '@ionic/react';
import { chevronBackOutline } from 'ionicons/icons';
import '../styles/General.css';

interface TryAgainDisplayProps {
}

type Item = {
    src: string;
    text: string;
}

const thumbsUpImage: Item = { src: 'assets/images/thumbs-up.png', text: ''}

const TryAgainDisplay: React.FC<TryAgainDisplayProps> = (props: TryAgainDisplayProps) => (
  <>
    <IonItem className='textDisplay'>
      Try Again!
    </IonItem>
    <IonImg src={thumbsUpImage.src} className="contentImage"/>
    <IonRouterLink href='./home' routerDirection='root'>
      <IonIcon icon={chevronBackOutline} size="large" className='backIcon'></IonIcon>
    </IonRouterLink>
  </>
)

export default TryAgainDisplay;
