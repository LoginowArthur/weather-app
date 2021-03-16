import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { WeatherListComponent } from './components/weather-list/weather-list.component';
import { WeatherDetailsComponent } from './components/weather-details/weather-details.component';

@NgModule({
  declarations: [AppComponent, SearchBarComponent, WeatherListComponent, WeatherDetailsComponent],
  imports: [BrowserModule, HttpClientModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
