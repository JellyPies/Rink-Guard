import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonText } from '@ionic/angular/standalone';
import { AlertComponent } from '../components/alert/alert.component';

@Component({
  selector: 'app-information',
  templateUrl: 'information.page.html',
  styleUrls: ['information.page.scss'],
  standalone: true,
  imports: [IonText, IonHeader, IonToolbar, IonTitle, IonContent, AlertComponent],
})
export class InformationPage {
  constructor() {}
}
