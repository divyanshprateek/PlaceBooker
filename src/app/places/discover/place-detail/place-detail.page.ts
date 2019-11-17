import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NavController, ModalController, ActionSheetController } from '@ionic/angular';
import { CreateBookingComponent } from 'src/app/bookings/create-booking/create-booking.component';
import { PlacesService } from '../../places.service';
import { Place } from '../../places.model';

@Component({
  selector: 'app-place-detail',
  templateUrl: './place-detail.page.html',
  styleUrls: ['./place-detail.page.scss'],
})
export class PlaceDetailPage implements OnInit {
  place: Place
  constructor(private router: Router,
     private navCtrl: NavController,
     private modalCtrl: ModalController,
     private route: ActivatedRoute,
     private placesService: PlacesService,
     private actionSheetCtrl: ActionSheetController) { }

  ngOnInit() {
    this.route.paramMap.subscribe(paramMap => {
      if(!paramMap.has('placeId')){
        this.navCtrl.navigateBack('/places/tabs/discover');
        return;
      }
      this.place = this.placesService.getPlace(paramMap.get('placeId'));
    })
  }

  onBookPlace() {
    this.actionSheetCtrl.create({
      header: 'Choose An Action',
      buttons: [
        {
          text: 'Select Date',
          handler: ()=>{
            this.openBookingModal('select');
          }
        },
        {
          text: 'Random Date',
          handler: ()=>{
            this.openBookingModal('random');
          }
        },
        {
          text: 'Cancel',
          role: 'destructive'
        }
      ]
    }).then(actionEl => {
      actionEl.present();
    })
  }

  openBookingModal(mode: 'select' | 'random') {
    console.log('Opening Modal....');
    this.modalCtrl.create({component: CreateBookingComponent, componentProps: {selectedPlace: this.place, selectedMode: mode}}).then(modalEl => {
      modalEl.present();
      return modalEl.onDidDismiss();
    })
    .then(resultData => {
      console.log(resultData.data, resultData.role);
      if(resultData.role === 'confirm') {
        console.log('Booked!');
      }
    })
  }
}
