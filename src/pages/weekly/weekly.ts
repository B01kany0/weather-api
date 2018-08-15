import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { WeatherProvider } from '../../providers/weather/weather';
import weatherArr from '../../app/weatherArr'
import { objWeather} from '../../app/objWeather'
import { Geolocation } from '@ionic-native/geolocation';
import moment from 'moment';



/**
 * Generated class for the WeeklyPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-weekly',
  templateUrl: 'weekly.html',
})
export class WeeklyPage {

  arr = weatherArr;  
  lat: any;
  lng: any;
 
   temp1  ;
   temperature;
   temperature1;
   temperature2;
   temperature3;
   temperature4;
   wind;
   humidity;
   place;
   name;
   date;
   date1;
   date2;
   date3;
   date4;
   icon1;
   icon2;
   icon3;
   icon4;
   icon5;
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
           this.temp1 =data.main.temp + "°C" ;
           this.wind = data.wind.speed;
           this.condition1 = data.list[0].weather[0].description;
           this.humidity = data.main.humidity ;
           this.temperature =(this.temp1-273.15).toFixed(0) + "°C";
           console.log(this.place)
         })
     }
 
     
     search(cityname){
 
       this.wether.getMessages(cityname).then((data:any) =>{
 
         console.log(data);
         console.log(this.arr);
 
         this.temp1 =data.main.temp ;
         this.wind = data.wind.speed;
         this.humidity = data.main.humidity ;
         this.place = data.name;
         this.temperature =(this.temp1-273.15).toFixed(0);
         this.icon1 = "http://openweathermap.org/img/w/" + data.weather[0].icon + ".png";
 
         let obj= new objWeather(this.place,this.temperature,this.wind,this.humidity,this.icon1,this.condition1);
 
         weatherArr.push(obj);
       
 
       })
 
     }
 
     forecast(cityname)
     {
       this.wether.getForecast(cityname).then((data:any) =>{
       // this.arr.getForcast(this.name).then((infor: any) => {

          this.temperature = data.list[0].main.temp_max;
          this.icon1 = "http://openweathermap.org/img/w/" + data.list[0].weather[0].icon + ".png";
          this.temperature1 = data.list[8].main.temp_max;
          this.icon2 = "http://openweathermap.org/img/w/" + data.list[8].weather[0].icon + ".png";
          this.temperature2 = data.list[16].main.temp_max;
          this.icon3 = "http://openweathermap.org/img/w/" + data.list[16].weather[0].icon + ".png";
          this.temperature3 = data.list[24].main.temp_max;
          this.icon4 = "http://openweathermap.org/img/w/" + data.list[24].weather[0].icon + ".png";
          this.temperature4 = data.list[32].main.temp_max;
          this.icon5 = "http://openweathermap.org/img/w/" + data.list[32].weather[0].icon + ".png";
     
          this.date =   moment("2018/08/13").format('ddd');
          this.date1 =   moment("2018/08/14").format('ddd');
          this.date2 =   moment("2018/08/15").format('ddd');
          this.date3 =   moment("2018/08/16").format('ddd');
          this.date4 =   moment("2018/08/17").format('ddd');
     
          this.temperature = (this.temperature - 273.15).toFixed() + "°c"
          this.temperature1 = (this.temperature1 - 273.15).toFixed() + "°c"
          this.temperature2 = (this.temperature2 - 273.15).toFixed() + "°c"
          this.temperature3 = (this.temperature3 - 273.15).toFixed() + "°c"
          this.temperature4 = (this.temperature4 - 273.15).toFixed() + "°c"
          console.log(data);
         
     
     
        });
 
     }
    
     
   
 
 }
 