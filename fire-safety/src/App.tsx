import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonRouterOutlet } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import Home from './pages/Home';
import GoodJobPage from './pages/GoodJobPage';
import InfoPage from './pages/InfoPage';
import QuestionListPage from './pages/QuestionListPage';
import QuestionPage from './pages/QuestionPage';
import AdditionalQuestionPage from './pages/AdditionalQuestionPage';
import TrainingCardPage from './pages/TrainingCardPage';
import TryAgainPage from './pages/TryAgainPage';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonRouterOutlet>
        <Route path="/home" component={Home} exact={true} />
        <Route path="/questionlist" component={QuestionListPage} exact={true} />
        <Route path="/info" component={InfoPage} exact={true} />
        <Route path="/goodjob/:prevPage/:nextPage/:numStars" component={GoodJobPage} exact={true} />
        <Route path="/tryagain" component={TryAgainPage} exact={true} />
        <Route path="/question/:choice" component={QuestionPage} exact={true} />
        <Route path="/additionalquestions" component={AdditionalQuestionPage} exact={true} />
        <Route path="/trainingcards" component={TrainingCardPage} exact={true} />
        <Route exact path="/" render={() => <Redirect to="/home" />} />
      </IonRouterOutlet>
    </IonReactRouter>
  </IonApp>
);

export default App;
