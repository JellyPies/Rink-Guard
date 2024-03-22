import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
	name: 'rentalPicto',
	standalone: true
})
export class RentalPictoPipe implements PipeTransform {

	transform(value: string, colorValue: boolean): any {
		const inputSplit = value.split(" - ");
		let now = new Date();
		let rentalStart = this.convert12Hour(inputSplit[0]);
		let rentalEnd = this.convert12Hour(inputSplit[1]);

		if (colorValue) {
			return this.getColorValue(now, rentalStart, rentalEnd);
		}
		else {
			return this.getPictoValue(now, rentalStart, rentalEnd);
		}
	}

	getColorValue(now: Date, rentalStart: Date, rentalEnd: Date) {
		if (now.getTime() > rentalEnd.getTime()) {
			return "#2fdf75";
		}
		else if (now.getTime() > rentalStart.getTime()) {
			return "#ffd534";
		} 
		else {
			return "#ff4961";
		}
	}

	getPictoValue(now: Date, rentalStart: Date, rentalEnd: Date) {
		if (now.getTime() > rentalEnd.getTime()) {
			return "checkmark-circle-outline";
		}
		else if (now.getTime() > rentalStart.getTime()) {
			return "time-outline";
		} 
		else {
			return "calendar-outline";
		}
	}

	convert12Hour(value: string) {
		let convertedDate = new Date();
		let hour = Number(value.split(":")[0]);

		if (value.slice(-2) == "PM") {
			hour = hour + 12;
		} 
		else if (value.slice(-2) == "AM" && hour == 12) {
			hour = 0;
		}

		convertedDate.setHours(hour);
		convertedDate.setMinutes(Number(value.split(":")[1].slice(0, -2)));
		convertedDate.setSeconds(0);
		convertedDate.setMilliseconds(0);

		return convertedDate;
	}
}
