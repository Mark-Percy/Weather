import { Component } from '@angular/core';
import { WeatherService } from './weather.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Weather';
  sites: Element[] = []

  constructor(private weatherService: WeatherService) {
    let sites = weatherService.getSites('nw');
  }
}
