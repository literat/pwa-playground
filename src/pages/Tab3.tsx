import { IonAvatar, IonContent, IonHeader, IonItem, IonLabel, IonList, IonPage, IonTitle, IonToolbar, useIonViewWillEnter } from '@ionic/react';
import React, { useState } from 'react';

interface Person {
  name: string;
  email: string;
  position: string;
  photo: string;
}

const Tab3Page: React.FC = () => {

  const [people, setPeople] = useState<Person[]>([]);

  useIonViewWillEnter(async () => {
    const result = await fetch('https://uifaces.co/api?limit=25', {
      headers: { 'x-API-KEY': '873771d7760b846d51d025ac5804ab' }
    });
    const data = await result.json();
    setPeople(data);
  });

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Employees</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonList>
          {people.map((person, idx) => <EmployeeItem key={idx} person={person} />)}
        </IonList>
      </IonContent>
    </IonPage>
  );
};

const EmployeeItem: React.FC<{ person: Person }> = ({ person }) => {
  return (
    <IonItem >
      <IonAvatar slot="start">
        {/* eslint-disable-next-line */}
        <img src={person.photo} alt='' />
      </IonAvatar>
      <IonLabel>
        <h2>{person.name}</h2>
        <p>{person.position}</p>
      </IonLabel>
    </IonItem>
  );
}

export default Tab3Page;