import React from 'react';
import { IonCol, IonGrid, IonIcon, IonItem, IonImg, IonRouterLink, IonRow } from '@ionic/react';
import { chevronBackOutline, chevronForwardOutline } from 'ionicons/icons';
import '../styles/General.css';

interface GoodJobRoutingProps {
    prevPage: string;
    nextPage: string;
}

type Item = {
    src: string;
    text: string;
}

const sparkyImg: Item = { src: 'assets/images/sparky.jpg', text: ''}

const GoodJobDisplay: React.FC<GoodJobRoutingProps> = (props: GoodJobRoutingProps) => (
  <>
    <IonItem className='textDisplay'>
      Good Job!
    </IonItem>
    <IonImg src={sparkyImg.src} className="contentImage"/>

    <IonGrid className='ion-text-center'>
      <IonRow>
        <IonCol>
          <IonRouterLink href={props.prevPage}>
            <IonIcon icon={chevronBackOutline} size="large" className='navIcon'></IonIcon>
          </IonRouterLink>
        </IonCol>
        <IonCol>
        </IonCol>
        <IonCol >
          <IonRouterLink href={props.nextPage}>
            <IonIcon icon={chevronForwardOutline} size="large" className="toolBarIcon"></IonIcon>
          </IonRouterLink>
        </IonCol>
      </IonRow>
    </IonGrid>
  </>
)

export default GoodJobDisplay;
