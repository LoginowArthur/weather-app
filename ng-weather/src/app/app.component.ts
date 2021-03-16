import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'nw-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  private weatherBaseUrl = 'http://api.weatherstack.com/';
  private accessKey = 'd2a9d12632711fd00979308c4f30b68d';

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http
      .get(
        `${this.weatherBaseUrl}current?access_key=${this.accessKey}&query=10001`
      )
      .subscribe(console.log);
  }
}
