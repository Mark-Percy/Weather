import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  weatherApiUrl: URL = new URL(environment.URLS.weatherApi)
  
  constructor() { }

  async getSites(loc: string) {
    this.weatherApiUrl.pathname = 'check'
    fetch(this.weatherApiUrl).then(ret => console.log(ret))
  }

}
