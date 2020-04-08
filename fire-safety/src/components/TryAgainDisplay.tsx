import React from 'react';
import { IonIcon, IonItem, IonImg, IonRouterLink } from '@ionic/react';
import { chevronBackOutline } from 'ionicons/icons';
import '../styles/General.css';
import { Item } from '../types';

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
      <div className='centered'>
        <IonImg src={thumbsUpImage.src} className="contentImage resultImage"/>
        <div className='tryAgain'>
          <IonRouterLink href='./home' routerDirection='root' style={{color: 'blue'}}>
            <div id='gohome'></div>
            <IonIcon icon={chevronBackOutline} size="large" className='navIcon' style={{paddingRight: '20px', marginTop: '10px'}}></IonIcon>
          </IonRouterLink>
          Try Again!
        </div>

      </div>
    )
}

export default TryAgainDisplay;
