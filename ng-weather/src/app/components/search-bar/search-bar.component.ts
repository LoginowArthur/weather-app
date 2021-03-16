import { HttpClient } from '@angular/common/http';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { BASE_URL, ACCESS_KEY } from '../../weather-global';

import { first, tap } from 'rxjs/operators';
@Component({
  selector: 'nw-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss'],
})
export class SearchBarComponent {
  @Output() weatherDataByZipCode = new EventEmitter();

  constructor(private http: HttpClient) {}

  getWeatherDatatByZipCode(zipCode: number): void {
    this.http
      .get(
        `${BASE_URL}current?access_key=${ACCESS_KEY}&query=${zipCode.toString()}`
      )
      .pipe(
        first(),
        tap((response) => this.weatherDataByZipCode.emit(response))
      )
      .subscribe();
  }
}
