import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonSegment, IonSegmentButton, IonLabel, IonItem, IonList } from '@ionic/angular/standalone';
import { RentalComponent } from '../components/rental/rental.component';
import { RentalService } from '../services/rental.service';
import { Rental } from '../interfaces/Rental';

@Component({
	selector: 'app-rentals',
	templateUrl: 'rentals.page.html',
	styleUrls: ['rentals.page.scss'],
	standalone: true,
	imports: [IonList, IonItem, IonLabel, IonSegmentButton, IonSegment, IonHeader, IonToolbar, IonTitle, IonContent, CommonModule, RentalComponent],
})
export class RentalsPage implements OnInit {
	rentals: Rental[] = [];

	arena: string = "IRC";
	IRC: string = "RED";

	constructor(private rentalService: RentalService) { }

	ngOnInit(): void {
		this.refresh();
	}

	refresh() {
		this.rentals = [];

		this.rentalService.getRentals(this.arena).subscribe({
			next: (res) => {
				if (this.arena == "IRC") {
					switch (this.IRC) {
						case "RED":
							for (var i = 0; i < res.length; i++) {
								if (res[i].IcepadName == "Red") {
									this.rentals.push(res[i]);
								}
							}
							break;
						case "GOLD":
							for (var i = 0; i < res.length; i++) {
								if (res[i].IcepadName == "Gold") {
									this.rentals.push(res[i]);
								}
							}
							break;
					} 

					return;
				}

				this.rentals = res;
			}
		})
	}

	updateIRC(value: any) {
		this.IRC = value;
		this.refresh()
	}

	updateArena(value:any) {
		this.arena = value;
		this.refresh();
	}
}
