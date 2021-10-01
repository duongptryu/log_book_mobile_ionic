import { Redirect, Route } from 'react-router-dom';
import {
  IonApp,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
  IonIcon,
  IonLabel,
  IonItem
} from "@ionic/react";
import { IonReactRouter } from '@ionic/react-router';
import LogBook1 from './pages/log_book_1';
import LogBook2 from './pages/log_book_2';
import { playOutline } from "ionicons/icons";


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
    <IonTabs>
        <IonRouterOutlet>
          <Route exact path="/log-book-1">
            <LogBook1 />
          </Route>
          <Route exact path="/log-book-2-3">
            <LogBook2/>
          </Route>
          <Route exact path="/">
            <Redirect to="/log-book-1" />
          </Route>
        </IonRouterOutlet>

        <IonTabBar slot="bottom">
          <IonTabButton tab="log-book-1" href="/log-book-1">
          <IonIcon icon={playOutline}/>
            <IonLabel>1</IonLabel>
          </IonTabButton>
          <IonTabButton tab="log-book-2" href="/log-book-2-3">
          <IonIcon icon={playOutline}/>
            <IonLabel>2,3</IonLabel>
          </IonTabButton>
        </IonTabBar>
      </IonTabs>
    </IonReactRouter>
  </IonApp>
);

export default App;
