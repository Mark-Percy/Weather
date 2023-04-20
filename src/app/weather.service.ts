import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  weatherApiUrl: URL = new URL(environment.URLS.weatherApi)
  
  constructor() { }

  async getSites():Promise<Map<string, Map<string, Site[]>>> {
    this.weatherApiUrl.pathname = 'v1/sites'
    let resp = (await fetch(this.weatherApiUrl))
    let locationMap: Map<string, Map<string, Site[]>> = new Map()
    await resp.json().then(data => {
      for (let region in data) {
        if(!locationMap.has(region)) {
          locationMap.set(region, new Map())
        }
        for(let area in data[region]) {
          if(!locationMap.get(region)?.has(area)) locationMap.get(region)?.set(area, data[region][area])

        }
      }
    })

    return locationMap
  }

}

export interface Site {
  name:string;
  id:number
}

export interface regions {

}
