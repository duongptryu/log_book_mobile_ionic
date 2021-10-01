import {
  IonButton,
  IonContent,
  IonDatetime,
  IonHeader,
  IonInput,
  IonItem,
  IonLabel,
  IonPage,
  IonTitle,
  IonToolbar,
  IonToast,
  IonLoading,
  IonAlert,
} from "@ionic/react";
import "./Home.css";
import React from "react";
import { useState } from "react";
import { InsertRentInfo } from "../db";

const LogBook2: React.FC = () => {
  const [propertyType, setPropertyType] = useState("");
  const [bedRoom, setBetroom] = useState("");
  const [dateAndTime, setDateAndTime] = useState(new Date().toISOString());
  const [month, setMonth] = useState("");
  const [price, setPrice] = useState("");
  const [furniture, setFurniture] = useState("");
  const [notes, setNotes] = useState("");
  const [reporterName, setReporterName] = useState("");
  const [showToast, setShowToast] = useState(false);
  const [toastContent, setToastContent] = useState("");
  const [showLoading, setShowLoading] = useState(false);
  //   const formatVNDate = (iosString: string) => {
  //     return new Date(iosString).toLocaleDateString("vi-VN");
  //   };

  function handleClick() {
    if (propertyType === "") {
      setShowToast(true);
      setToastContent("Property type is required, please fill");
      return false;
    } else if (bedRoom === "") {
      setShowToast(true);
      setToastContent("Bed room type is required, please fill");
      return false;
    } else if (month === "") {
      setShowToast(true);
      setToastContent("Month rent is required, please fill");
      return false;
    } else if (reporterName === "") {
      setShowToast(true);
      setToastContent("Reporter name is required, please fill");
      return false;
    }
    let num_price;

    num_price = Number(price);
    if (isNaN(num_price)) {
      setShowToast(true);
      setToastContent("Price must be a number");
      return false;
    } else if (num_price < 0) {
      setShowToast(true);
      setToastContent("Price must be a greater than 0");
      return false;
    }
    let num_month;
    num_month = Number(price);
    if (isNaN(num_month)) {
      setShowToast(true);
      setToastContent("month must be a number");
      return false;
    } else if (num_month < 0 || num_month > 12) {
      setShowToast(true);
      setToastContent(
        "month must be a greater or equal 1 and smaller or equal 12"
      );
      return false;
    }

    const rentInfo = {
      propertyType: propertyType,
      bedRoom: bedRoom,
      month: num_month,
      price: num_price,
      dateAndTime: dateAndTime,
      furniture: furniture,
      notes: notes,
      reporterName: reporterName,
    };
    InsertRentInfo(rentInfo).then((resp) => {
      alert("Done");
    });
  }

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Log book 2 - 3</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <IonItem>
          <IonLabel position="floating">
            Property type <span style={{ color: "red" }}>*</span>
          </IonLabel>
          <IonInput
            required
            onIonChange={(e) => setPropertyType(e.detail.value!)}
          ></IonInput>
        </IonItem>
        <IonItem>
          <IonLabel position="floating">
            Bedrooms<span style={{ color: "red" }}>*</span>
          </IonLabel>
          <IonInput
            required
            onIonChange={(e) => setBetroom(e.detail.value!)}
          ></IonInput>
        </IonItem>

        <IonItem>
          <IonLabel position="stacked">
            Date and time <span style={{ color: "red" }}>*</span>
          </IonLabel>
          <IonDatetime
            value={dateAndTime}
            onIonChange={(e) => setDateAndTime(e.detail.value!)}
          ></IonDatetime>
        </IonItem>

        <IonItem>
          <IonLabel position="floating">
            Monthly rent price <span style={{ color: "red" }}>*</span>
          </IonLabel>
          <IonInput
            required
            onIonChange={(e) => setMonth(e.detail.value!)}
          ></IonInput>
        </IonItem>

        <IonItem>
          <IonLabel position="floating">
            Price<span style={{ color: "red" }}>*</span>
          </IonLabel>
          <IonInput
            required
            onIonChange={(e) => setPrice(e.detail.value!)}
          ></IonInput>
        </IonItem>

        <IonItem>
          <IonLabel position="floating">Furniture types</IonLabel>
          <IonInput
            onIonChange={(e) => setFurniture(e.detail.value!)}
          ></IonInput>
        </IonItem>

        <IonItem>
          <IonLabel position="floating">Notes </IonLabel>
          <IonInput onIonChange={(e) => setNotes(e.detail.value!)}></IonInput>
        </IonItem>

        <IonItem>
          <IonLabel position="floating">
            Name of the reporter <span style={{ color: "red" }}>*</span>
          </IonLabel>
          <IonInput
            required
            onIonChange={(e) => setReporterName(e.detail.value!)}
          ></IonInput>
        </IonItem>

        <IonButton onClick={handleClick} expand="block">
          Submit
        </IonButton>

        <IonToast
          isOpen={showToast}
          onDidDismiss={() => setShowToast(false)}
          message={toastContent}
          duration={2000}
        />

        <IonLoading
          cssClass="my-custom-class"
          isOpen={showLoading}
          onDidDismiss={() => setShowLoading(false)}
          message={"Please wait..."}
        />
      </IonContent>
    </IonPage>
  );
};

export default LogBook2;
