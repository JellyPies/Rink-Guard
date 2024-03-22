import { Injectable } from '@angular/core';
import { Rental } from '../interfaces/Rental';
import { Observable, retry } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RentalService {

	endpoints: {[index: string]:any} = {
		IRC: "https://smoothsignage.com/api/changeroomoffset/45/180",
		LEFROY: "https://smoothsignage.com/api/changeroomoffset/46/180",
		STROUD: ""
	}

  constructor(private httpClient:HttpClient) { }

  getRentals(arena: string) : Observable<Rental[]> {
	return this.httpClient.get<Rental[]>(this.endpoints[arena]).pipe(
		retry({ count: 3, delay: 10000 })
	);
  }
}
