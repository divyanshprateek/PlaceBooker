import { Injectable } from '@angular/core';
import { Booking } from './bookings.model';

@Injectable({providedIn: 'root'})
export class BookingsService {
    private _bookings: Booking[] = [
        {
            id: 'xyz',
            placeId: 'abc',
            placeTitle: 'Manhattan Mansion',
            userId: '123',
            guestNumber: 2
        }
    ]

    get bookings() {
        return [...this._bookings];
    }
}