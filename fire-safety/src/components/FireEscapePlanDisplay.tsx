import React from 'react';
import { IonIcon, IonImg, IonRouterLink } from '@ionic/react';
import { chevronBackOutline } from 'ionicons/icons';
import '../styles/General.css';
import '../styles/Info.css';
import { Item } from '../types';


const EscapePlanImages: Item[] = [
    { src: 'assets/images/escape_plan_page_1.jpg', text: ''},
    { src: 'assets/images/escape_plan_page_2.jpg', text: ''},
]

const EscapePlanExample: Item = { src: 'assets/images/escape_plan_page_3.jpg', text: ''};

// example image width only works when it is styled in line
const FireEscapePlanDisplay: React.FC = () => {
    return (
      <div className='container'>
        <div className="textDisplay infoBackIcon">
          <IonRouterLink href="./info">
            <IonIcon icon={chevronBackOutline} size="large" className='navIcon'></IonIcon>
          </IonRouterLink>
          Fire Escape Plan
        </div>
        <div className='imageList'>
          {EscapePlanImages.map((image: Item) => (
            <IonImg src={image.src} key={image.src} className="contentImage"/>
          ))}
        </div>
        <div className="textDisplay" style={{fontSize: '40px'}}>
          Example
        </div>
        <div className='imageList'>
          <IonImg src={EscapePlanExample.src} key={EscapePlanExample.src} className="exampleImage"/>
        </div>
      </div>
    )
}

export default FireEscapePlanDisplay;
