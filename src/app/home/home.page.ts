import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/angular/standalone';
import { RinkStatsComponent } from '../components/rink-stats/rink-stats.component';
import { WeatherAlertService } from '../services/weather-alert.service';
import { Alerts } from '../interfaces/WeatherAlert';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, RinkStatsComponent]
})
export class HomePage implements OnInit {

  constructor(private weatherAlertService:WeatherAlertService) {}

	ngOnInit(): void {
		this.weatherAlertService.getAlerts().subscribe({
			next: (res) => {
				this.disseminateWeatherAlerts(res);
			}
		})
	}

	disseminateWeatherAlerts(res: Alerts) {
		
	}



}
