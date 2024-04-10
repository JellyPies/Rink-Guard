import { Injectable } from '@angular/core';
import { Alerts } from '../interfaces/WeatherAlert';
import { Observable, retry } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WeatherAlertService {

  constructor(private httpClient:HttpClient) { }

  getAlerts(): Observable<Alerts> {
	return this.httpClient.get<Alerts>("https://api.weatherapi.com/v1/forecast.json?key=84a2b1ffd7244cca877182158242203&q=Innisfil&days=1&aqi=no&alerts=yes").pipe(
		retry({ count: 3, delay: 10000 })
	);
  }
}
