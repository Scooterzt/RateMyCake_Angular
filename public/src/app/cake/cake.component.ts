import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-cake',
  templateUrl: './cake.component.html',
  styleUrls: ['./cake.component.css']
})
export class CakeComponent implements OnInit {
  @Input() cakeToShow:any;
  // avgRating: any;
  constructor() { 
    // this.avgRating = 0;
  }

  ngOnInit() {
    // this.nastedCakeRating();
  }
  // nastedCakeRating(){
  //   console.log(this.cakeToShow);
  //   let sum = 0;
  //   let counter = 0;
  //   for(let cake of this.cakeToShow.comments){
  //     console.log(cake);
  //     sum += cake.rating;
  //     counter ++;
  //   }
  //   console.log(sum);
  //   console.log(counter);
  //   this.avgRating = sum / counter;
  //   console.log(this.avgRating);
  // }

}
