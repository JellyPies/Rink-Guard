import { CommonModule } from '@angular/common';
import { Component, OnInit, Input } from '@angular/core';
import { calendarOutline, checkmarkDoneCircleOutline, timeOutline } from 'ionicons/icons';
import { IonIcon } from "@ionic/angular/standalone";
import { addIcons } from 'ionicons';
import { Rental } from 'src/app/interfaces/Rental';
import { RentalService } from 'src/app/services/rental.service';
import { TruncatePipe } from 'src/app/pipes/truncate.pipe';

@Component({
	selector: 'app-rink-stats',
	templateUrl: './rink-stats.component.html',
	styleUrls: ['./rink-stats.component.scss'],
	standalone: true,
	imports: [IonIcon, CommonModule, TruncatePipe]
})
export class RinkStatsComponent implements OnInit {

	@Input() arena!:string;
	@Input() disabled: boolean = false;

	rentals: Rental[] = [];
	totalRentals?:string;
	firstRental?:string;
	lastRental?:string;

	constructor(private rentalService:RentalService) {
		addIcons({calendarOutline, checkmarkDoneCircleOutline, timeOutline});
	 }

	ngOnInit() { 
		if (!this.disabled) {
			this.refresh();
			console.log("Ran");
		}
	}

	refresh() {
		this.rentalService.getRentals(this.arena).subscribe({
			next: (res) => {
				this.rentals = [];
				this.rentals = res;
				this.populateStats();
			}
		});
	}

	populateStats() {
		this.totalRentals = this.rentals.length + " rentals scheduled";

		this.rentals.sort((a, b) => parseFloat(a.Order) - parseFloat(b.Order));

		const firstRentalValue = this.rentals[0].Time.split(" ");
		this.firstRental = "First rental starts at " + firstRentalValue[0];

		const lastRentalValue = this.rentals.pop()?.Time.split(" ");
		this.lastRental = "Last rental ends at " + lastRentalValue?.pop();
	}

}
