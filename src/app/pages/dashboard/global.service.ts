import { Injectable } from '@angular/core';
import { CountryPhone } from './countryphone';

@Injectable({
  providedIn: 'root',
})
export class GlobalService {
  countryPhoneCodes: CountryPhone[] = [];
  bookings: any[] = [];

  constructor() {
    this.countryPhoneCodes.push({
      CountryCode: 'US',
      PhoneCode: "1",
      CountryPhoneCode: '1 - USA'
    });
    this.countryPhoneCodes.push({
      CountryCode: 'IN',
      PhoneCode: "91",
      CountryPhoneCode: '91 - India'
    });
    this.countryPhoneCodes.push({
      CountryCode: 'IT',
      PhoneCode: "39",
      CountryPhoneCode: '39 - Italy'
    });
    this.countryPhoneCodes.push({
      CountryCode: 'SP',
      PhoneCode: "34",
      CountryPhoneCode: '34 - Spain'
    });
    this.countryPhoneCodes.push({
      CountryCode: 'GE',
      PhoneCode: "49",
      CountryPhoneCode: '49 - Germany'
    });
  }
  addBooking(booking: any): void {
    if (booking) {
      this.bookings.push(booking);
    }
  }

}
