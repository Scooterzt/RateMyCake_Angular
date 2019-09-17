import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  allCakes: any;
  newCake: any;
  rateCake = {comment:"", rating:""};
  selectedCake: any;


  constructor(private _httpService: HttpService){
    this.getAllCakes();
  };

  ngOnInit(){
    this.newCake = {bakerName: "", imageURL:""};
    // this.rateCake = {comment:"", rating:""};
    this.selectedCake = 0;
    
  };
  getAllCakes(){
    let obs = this._httpService.getCakes();
    obs.subscribe(data=>{
      console.log("all cakes data:", data);
      this.allCakes = data;
    });
  }
  addNewCake(){
    let obs = this._httpService.addCake(this.newCake);
    obs.subscribe(data=>{
      console.log("one new cake data:", data);
      this.newCake = {bakerName: "", imageURL:""};
    });
    }
  rateOneCake(id:string){
    let obs = this._httpService.rateCake(id, this.rateCake);
    obs.subscribe(data=>{
      console.log ("rate cake data: ", data);
      this.rateCake = { comment:"", rating:""};
    });
  }
  cakeToshow(id:string){
    let obs = this._httpService.getOneCake(id);
    obs.subscribe(data=>{
      console.log("one cake to show ------>", data);
      this.selectedCake = data[0];
      let sum = 0;
      for (let cake of data[0].comments){
        sum += cake.rating;
      }
      console.log (sum);
      this.selectedCake.avgRating = sum / data[0].comments.length; // something
    });
  }

}

