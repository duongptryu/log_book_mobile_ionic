import {
  IonButton,
  IonContent,
  IonHeader,
  IonItem,
  IonList,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import "./Home.css";
import ReactAudioPlayer from "react-audio-player";
import React from "react";

const LogBook1: React.FC = () => {
  var myPlayer: ReactAudioPlayer | null;

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Log book 1</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <IonList>
          <IonItem>
            <ReactAudioPlayer
              src="assets/musics/ring.mp3"
              ref={(e) => {
                myPlayer = e;
              }}
              // autoPlay
              // controls
            />
            <IonButton onClick={() => myPlayer?.audioEl.current?.play()}>
              Play
            </IonButton>
            {/* <IonButton onClick={() => myPlayer?.audioEl.current?.pause()}>
              Pause
            </IonButton> */}
          </IonItem>
          <IonItem>
            <IonButton
              onClick={() => {
                alert("bruzzz bruzzz")
                navigator.vibrate(2500);
              }}
            >
              Vibration
            </IonButton>
          </IonItem>
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default LogBook1;
