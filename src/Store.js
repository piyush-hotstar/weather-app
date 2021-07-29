import {
    action,
    computed,
    makeObservable,
    observable,
    autorun,
} from "mobx";
import axios from 'axios';

/*
this.coord = {latitude: position.coords.lat, longitude: …}
*/
class Store {
    button = 0;
    coordinates = {
        latitude: "59.337239",
        longitude: "18.062381"
    };
    loading = true;
    whole = {};
    message = "";

    constructor() {
        makeObservable(this, {
            button: observable,
            coordinates: observable,
            message: observable,
            buttonStatus: computed,
            latitudeStatus: computed,
            longitudeStatus: computed,
            loading: observable,
            whole: observable,
            fixed: action,
            current: action,
            convert: action
        });
        autorun(this.getJson);
    }

    fixed = () => {
        this.loading=true;
        this.button = 1;
        this.message = null;
        this.coordinates = {latitude: "59.337239", longitude: "18.062381"}
    }

    current = () => {
        this.loading=true;
        this.message = null;
        this.button=2;
        navigator.geolocation.getCurrentPosition( (position) => {
              
            this.coordinates = {latitude: position.coords.latitude, longitude: position.coords.longitude}
            // console.log(this.coordinates.latitude)
            // console.log(this.coordinates.langitude)
            //this.button = 2;
          
        },
        (error) => {
          if (error.code === error.PERMISSION_DENIED)
            {
              this.message = "You need to allow Permission :'("
              this.button=3; 
            }
            else {
                this.message = "It seems you are offline. Hence showing you cached data."
                this.latitude = "59.337239";
                this.longitude = "18.062381";
                //this.button = 2;
            }
        }
        

        
        );
        this.loading=true;
    }

    get buttonStatus() {
        return this.button;
    }

    get latitudeStatus() {
        return this.coordinates.latitude;
    }

    get longitudeStatus() {
        return this.coordinateslongitude;
    }

    convert = (time) => {
        var date = new Date(time);

        return date.toString("MMM dd");
    }

    

    getJson = async () => {
        try {
            let response = await axios.get(`https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/2bb07c3bece89caf533ac9a5d23d8417/${this.coordinates.latitude},${this.coordinates.longitude}`)
            this.whole = response.data
            localStorage.setItem('localStorage', (JSON.stringify(response.data)));
            this.loading = false
        }
            catch (err) {
            this.message = "Something went wrong. Showing you cached data."
            this.whole = JSON.parse(localStorage.getItem('localStorage'))
            this.loading=false
        }
        //this.button = 2;
    }
}

export default Store;