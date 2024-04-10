import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { warningOutline } from 'ionicons/icons';
import { IonIcon } from "@ionic/angular/standalone";
import { addIcons } from 'ionicons';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss'],
  standalone: true,
  imports: [IonIcon, CommonModule]
})
export class AlertComponent {

  constructor() { 
	addIcons({warningOutline});
  }

}
