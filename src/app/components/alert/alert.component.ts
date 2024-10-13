import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { warningOutline, informationCircleOutline } from 'ionicons/icons';
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

	@Input() alertTitle!:string;
	@Input() alertBody!:string;
	@Input() alertType!:string;
	@Input() alertIcon!:string;
	@Input() alertLink!:string;

  constructor() { 
	addIcons({warningOutline, informationCircleOutline});
  }

}
