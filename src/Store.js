import {
    action,
    computed,
    makeObservable,
    observable,
    //makeAutoObervable,
    autorun,
    reaction,
    //runInAction
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
            //getJson: reaction,
            buttonStatus: computed,
            latitudeStatus: computed,
            longitudeStatus: computed,
            loading: observable,
            whole: observable,
            fixed: action,
            current: action,
            //getJson: action,
            convert: action
        });
        autorun(this.getJson);
    }

    // constructor() {
    //     makeAutoObervable(this)
    // }

    fixed = () => {
        this.button = 1;
        this.message = null;
        //`Your latitude is ${this.latitude} & longitude is ${this.longitude}`;
        console.log("button" + this.button);
    }

    current = () => {
    
        console.log("current ");
        navigator.geolocation.getCurrentPosition( (position) => {
          //console.log(position.coords.latitude + " " + position.coords.longitude)
        //   this.setState({latitude: position.coords.latitude});
        //   this.setState({longitude: position.coords.longitude});
        //   this.setState({button: 2});
          this.latitude = position.coords.latitude;
          this.longitude = position.coords.longitude;
          this.button = 2;
          this.message = null;
          //`Your latitude is ${this.latitude} & longitude is ${this.longitude}`;
          console.log("got position");
        },
        (error) => {
          if (error.code === error.PERMISSION_DENIED)
            {
              console.log("you denied me :-(");
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
        console.log("status-> " + this.button)
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
            console.log("api call")
            let response = await axios.get(`/forecast/2bb07c3bece89caf533ac9a5d23d8417/${this.props.latitude},${this.props.longitude}`)
            // this.setState({whole: response.data})
            // this.setState({loading: false})
            this.whole = response.data
            this.loading = false
            localStorage.setItem('localStorage', (JSON.stringify(response.data)));
            
            }
            catch (err) {
            this.whole = JSON.parse(localStorage.getItem('localStorage'))
            this.loading=false
              //await this.setState({whole: JSON.parse(localStorage.getItem('localStorage')),loading: false})
        }
    }
}

export default Store;