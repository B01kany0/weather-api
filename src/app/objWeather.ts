export class objWeather{

    place:string;
    temperature:string;
    wind:string;
    humidity:string;
    icon:string;
    condition:string;



    constructor(place:string,temperature:string,wind:string,humidity:string,icon,condition:string){
        this.place = place;
        this.temperature = temperature;
        this.wind = wind;
        this.humidity=humidity;
        this.icon=icon;
        this.condition=condition;
      
    }

}