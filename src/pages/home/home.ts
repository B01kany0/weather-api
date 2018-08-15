import { Component } from '@angular/core';

//import { NativeGeocoder, NativeGeocoderReverseResult, NativeGeocoderForwardResult, NativeGeocoderOptions } from '@ionic-native/native-geocoder';

import { WeatherProvider } from '../../providers/weather/weather';

import { NavController } from 'ionic-angular';

import weatherArr from '../../app/weatherArr'

import { objWeather} from '../../app/objWeather'

import { Geolocation } from '@ionic-native/geolocation';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

 arr = weatherArr;  
 lat: any;
 lng: any;

  temp1  ;
  temperature;
  wind;
  humidity;
  place;
  name;
  icon;
  condition1;
 
  

  ionViewDidLoad() {
    weatherArr.splice(0,1);
    console.log(weatherArr);
    
    this.geo.getCurrentPosition().then( pos => {
      this.lat= (pos.coords.latitude).toFixed(4);
      this.lng = (pos.coords.longitude).toFixed(4);
     this.getGeolocation(this.lat,this.lng);
      
    }).catch( err => console.log(err));

 
    
  }

 

    constructor(public navCtrl: NavController , private wether : WeatherProvider,public geo: Geolocation
     ) {

    }




    getGeolocation(a,b)
    {

     a=this.lat;
     b=this.lng;
    
        this.wether.getLocation(a,b).then((data:any) =>{

          console.log(data);
          this.place = data.name;
          this.temp1 =data.main.temp.toFixed(0) ;
          this.wind = data.wind.speed;
          this.humidity = data.main.humidity ;
          this.temperature =(this.temp1-273.15).toFixed(0);
          console.log(this.place)
        })
    }

    
    search(cityname){

      this.wether.getMessages(cityname).then((data:any) =>{

        console.log(data);
        console.log(this.arr);

        this.temp1 =data.main.temp.toFixed(0) ;
        this.wind = data.wind.speed;
        this.humidity = data.main.humidity ;
        this.place = data.name;
        this.temperature =(this.temp1-273.15).toFixed(0) + "°C";
       

        let obj= new objWeather(this.place,this.temperature,this.wind,this.humidity,this.icon,this.condition1);

        weatherArr.push(obj);
      

      })

    }

    forecast(cityname)
    {
      this.wether.getForecast(cityname).then((data:any) =>{

        console.log(data);
    
      })
    }
   
    
  

}
