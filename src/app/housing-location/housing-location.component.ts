import { Component, Input } from '@angular/core';
import { Housinglocation } from '../housinglocation';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-housing-location',
  imports: [],
  templateUrl: './housing-location.component.html',
  styleUrl: './housing-location.component.css',
})
export class HousingLocationComponent {
  @Input() housingLocation!: Housinglocation;
  // You have to add the ! because the input is expecting the value to be passed
  // The exclamation point is called the non-null assertion operator and it tells
  // the TypeScript compiler that the value of this property won't be null or
  // undefined.
}
