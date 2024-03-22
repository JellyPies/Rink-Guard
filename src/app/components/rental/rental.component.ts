import { Component, Input } from '@angular/core';
import { IonLabel, IonIcon } from "@ionic/angular/standalone";
import { addIcons } from 'ionicons';
import { timeOutline, calendarOutline, checkmarkCircleOutline } from 'ionicons/icons';
import { Rental } from '../../interfaces/Rental';
import { RentalPictoPipe } from 'src/app/pipes/rental-picto.pipe';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-rental',
  templateUrl: './rental.component.html',
  styleUrls: ['./rental.component.scss'],
  standalone: true,
  imports: [IonIcon, IonLabel, RentalPictoPipe, CommonModule]
})
export class RentalComponent {

	@Input() rental!:Rental;

  constructor() { 
	addIcons({ timeOutline, calendarOutline, checkmarkCircleOutline });
  }
}
