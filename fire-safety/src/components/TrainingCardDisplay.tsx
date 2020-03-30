import React from 'react';
import { IonItem, IonImg } from '@ionic/react';
import '../styles/General.css';

type Item = {
    src: string;
    text: string;
}

const TrainingCards: Item[] = [
    { src: 'assets/images/train_cards_page_1.jpg', text: ''},
    { src: 'assets/images/train_cards_page_2.jpg', text: ''},
    { src: 'assets/images/train_cards_page_3.jpg', text: ''},
    { src: 'assets/images/train_cards_page_4.jpg', text: ''},
    { src: 'assets/images/train_cards_page_5.jpg', text: ''},
    { src: 'assets/images/train_cards_page_6.jpg', text: ''},
    { src: 'assets/images/train_cards_page_7.jpg', text: ''},
    { src: 'assets/images/train_cards_page_8.jpg', text: ''},
    { src: 'assets/images/train_cards_page_9.jpg', text: ''},
    { src: 'assets/images/train_cards_page_10.jpg', text: ''},
    { src: 'assets/images/train_cards_page_11.jpg', text: ''},
    { src: 'assets/images/train_cards_page_12.jpg', text: ''},
    { src: 'assets/images/train_cards_page_13.jpg', text: ''},
    { src: 'assets/images/train_cards_page_14.jpg', text: ''},
]

const TrainingCardDisplay: React.FC = () => {
    return (
      <>
        <IonItem className='textDisplay'>
          Training Cards
        </IonItem>
        {TrainingCards.map((card: Item) => (
          <IonImg src={card.src} className="contentImage"/>
        ))}
      </>
    )
}

export default TrainingCardDisplay;
