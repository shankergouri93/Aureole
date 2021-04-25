import { ElementRef } from '@angular/core';
import { Component, ViewChild } from '@angular/core';
import { CountryPhone } from './countryphone';
import { GlobalService } from './global.service';

@Component({
  templateUrl: './booking.page.html',
  styleUrls: ['./booking.page.scss'],
})
export class BookingPage {
  name = '';
  email = '';
  phonecountry = '1';
  phoneNumber = '';
  address = '';
  noOfPersons: number | undefined;
  roomType = 'sbr';
  noOfNights: number | undefined;
  noOfRooms = 0;
  cost = 0;
  countryPhoneCodes: CountryPhone[] = [];
  @ViewChild('bookingform') bookingForm:
    | ElementRef<HTMLFormElement>
    | undefined;
  constructor(private global: GlobalService) {
    this.countryPhoneCodes = this.global.countryPhoneCodes;
  }
  calculateCost() {
    if (
      this.noOfPersons &&
      this.noOfPersons > 0 &&
      this.noOfNights &&
      this.noOfNights > 0
    ) {
      this.noOfRooms = this.caculateRooms();
      if (this.noOfRooms > 0) {
        this.cost = this.calculateCosts(
          this.roomType,
          this.noOfRooms,
          this.noOfNights
        );
      } else {
        this.cost = 0;
      }
    }
    // this.bookingForm?.nativeElement.classList.add('was-validated');
  }
  calculateCosts(
    roomType: string,
    noOfRooms: number,
    noOfNights: number
  ): number {
    if (roomType === 'sbr') {
      return 700 * noOfRooms * noOfNights;
    } else if (roomType === 'dbr') {
      return 1200 * noOfRooms * noOfNights;
    } else if (roomType === 'er') {
      return 1400 * noOfRooms * noOfNights;
    }
    return 0;
  }
  submit() {
    this.bookingForm?.nativeElement.classList.add('was-validated');
    if (this.isValidForm()) {
      this.calculateCost();
      this.global.addBooking({
        Name: this.name,
        Email: this.email,
        PhoneCode: this.phonecountry,
        PhoneNumber: this.phoneNumber,
        Address: this.address,
        NoOfPersons: this.noOfPersons,
        NoOfNights: this.noOfNights,
        RoomType: this.roomType,
        NoOfRooms: this.noOfRooms,
        TotalCost: this.cost,
      });
      this.bookingForm?.nativeElement.reset();
      this.bookingForm?.nativeElement.classList.remove('was-validated');
    }
  }
  isValidForm(): boolean {
    if (
      this.name &&
      this.name.length <= 30 &&
      this.phonecountry &&
      this.phoneNumber &&
      this.phoneNumber.length <= 10 &&
      this.address &&
      this.address.length <= 2000 &&
      this.noOfPersons &&
      this.noOfPersons > 0 &&
      this.noOfPersons <= 99 &&
      this.roomType &&
      this.noOfNights &&
      this.noOfNights > 0
    ) {
      return true;
    }
    return false;
  }
  private caculateRooms(): number {
    if (this.noOfPersons && this.noOfPersons > 0) {
      if (this.roomType === 'sbr') {
        return Math.ceil(this.noOfPersons / 2);
      } else if (this.roomType === 'dbr' || this.roomType === 'er') {
        return Math.ceil(this.noOfPersons / 3);
      }
    }
    return 0;
  }
}
