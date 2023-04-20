import { Component } from '@angular/core';
import { Site, WeatherService } from './weather.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'Weather';
  locations: Map<string, Map<string, Site[]>> = new Map<string, Map<string, Site[]>>();
  nw: Map<string, Site[]> = new Map<string, Site[]>()

  constructor(private weatherService: WeatherService) {
    weatherService.getSites().then(data => this.locations = data);
  }
}

