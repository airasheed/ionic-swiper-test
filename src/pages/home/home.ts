import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage  {

  public config: Object;

  constructor(public navCtrl: NavController) {
    this.config = {
      effect: 'coverflow',
      grabCursor: true,
      loop: true,
      spaceBetween: '10%',
      centeredSlides: true,
      slidesPerView: 'auto',
      coverflowEffect: {
        rotate: 0,
        depth: 100,
        slideShadows : true,
      }
    };
  }

}
