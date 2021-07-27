import {
    action,
    computed,
    makeObservable,
    observable,
    autorun,
} from "mobx";
import axios from 'axios';

class Store {
    button = 0;
    latitude= "59.337239";
    longitude= "18.062381";
    loading = true;
    whole = {};
    message = "";

    constructor() {
        makeObservable(this, {
            button: observable,
            latitude: observable,
            longitude: observable,
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
        this.button = 1;
        this.message = null;
    }

    current = () => {
        this.message = null;
        
          navigator.geolocation.getCurrentPosition( (position) => {
          this.latitude = position.coords.latitude;
          this.longitude = position.coords.longitude;
          
          this.button = 2;
          
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
                this.button = 2;
            }
        }

        
        );
    }

    get buttonStatus() {
        return this.button;
    }

    get latitudeStatus() {
        return this.latitude;
    }

    get longitudeStatus() {
        return this.longitude;
    }

    convert = (time) => {
        var date = new Date(time);

        return date.toString("MMM dd");
    }

    

    getJson = async () => {
        try {
            let response = await axios.get(`/forecast/2bb07c3bece89caf533ac9a5d23d8417/${this.latitude},${this.longitude}`)
            this.whole = response.data
            this.loading = false
            localStorage.setItem('localStorage', (JSON.stringify(response.data)));
            }
            catch (err) {
            this.message = "Something went wrong. Showing you cached data."
            this.whole = JSON.parse(localStorage.getItem('localStorage'))
            this.loading=false
        }
    }
}

export default Store;