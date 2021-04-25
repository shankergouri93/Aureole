import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { BookingPage } from './booking.page';

@NgModule({
  declarations: [BookingPage],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild([
      {
        path: '',
        component: BookingPage,
        data: {
          title: 'booking',
          robots: 'noindex, nofollow',
        },
      },
    ]),
  ],
})
export class BookingModule {}
