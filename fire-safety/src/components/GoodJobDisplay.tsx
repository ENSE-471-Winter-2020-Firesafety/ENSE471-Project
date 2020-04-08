import React from 'react';
import { IonCol, IonFooter, IonGrid, IonIcon, IonImg, IonRouterLink, IonRow } from '@ionic/react';
import { chevronBackOutline, chevronForwardOutline } from 'ionicons/icons';
import '../styles/General.css';
import { Item } from '../types';

interface GoodJobProps {
    prevPage: string;
    nextPage: string;
    numStars: number;
}

const GoodJobDisplay: React.FC<GoodJobProps> = (props: GoodJobProps) => {
    let { numStars } = props;

    // set a default of 5 stars if loading fails
    if (numStars < 0 || numStars > 5) {
        numStars = 5;
    }
    const sparkyImg: Item = { src: `assets/images/sparky-${numStars}.jpg`, text: ''}
    return (
      <div className='centered'>
        <div className='contentImage resultImage'>
          <IonImg src={sparkyImg.src}/>
        </div>
        <div className='goodJob'>
          GOOD JOB!
        </div>
        <IonFooter className="sideArrowNav ion-no-border">
          <IonGrid className='ion-text-center'>
            <IonRow>
              <IonCol>
                <IonRouterLink href={props.prevPage}>
                  <IonIcon icon={chevronBackOutline} size='large' className='navIcon'></IonIcon>
                </IonRouterLink>
              </IonCol>
              <IonCol>
              </IonCol>
              <IonCol >
                <IonRouterLink href={props.nextPage}>
                  <IonIcon icon={chevronForwardOutline} size='large' className='navIcon'></IonIcon>
                </IonRouterLink>
              </IonCol>
            </IonRow>
          </IonGrid>
        </IonFooter>
      </div>
    )
}

export default GoodJobDisplay;
