import React from 'react';
import { IonIcon, IonItem, IonImg, IonRouterLink } from '@ionic/react';
import { chevronBackOutline } from 'ionicons/icons';
import '../styles/General.css';

type Item = {
    src: string;
    text: string;
}

const thumbsUpImage: Item = { src: 'assets/images/try-again.jpg', text: ''}

const TryAgainDisplay: React.FC = () => {
    // redirect back to phone screen after 3 seconds
    // Using history seems to try to constantly reload to home. Pretty buggy
    // this is a workaround
    setTimeout(function() {
        const gohome: any = document.getElementById('gohome');
        if (gohome) {
            gohome.click();
        }
    }, 3000);

    return (
      <>
        <IonItem className='textDisplay'>
          Try Again!
        </IonItem>
        <IonImg src={thumbsUpImage.src} className="contentImage"/>
        <IonRouterLink href='./home' routerDirection='root'>
          <div id='gohome'></div>
          <IonIcon icon={chevronBackOutline} size="large" className='navIcon'></IonIcon>
        </IonRouterLink>
      </>
    )
}

export default TryAgainDisplay;
