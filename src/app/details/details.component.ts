import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { HousingService } from '../housing.service';
import { Housinglocation } from '../housinglocation';

@Component({
  selector: 'app-details',
  imports: [],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css',
})
export class DetailsComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private housingService: HousingService
  ) {}

  housingLocationId = -1;
  housingLocation: Housinglocation | undefined;

  ngOnInit(): void {
    this.housingLocationId = Number(this.route.snapshot.paramMap.get('id'));
    this.housingLocation = this.housingService.getHousingLocationById(
      this.housingLocationId
    );
  }
}

// route: ActivatedRoute = inject(ActivatedRoute);
// housingLocationId = -1;
// constructor() {
//   this.housingLocationId = Number(this.route.snapshot.params['id']);
// }

// Using paramMap.get('id') is preferred over directly accessing params['id'] because
// it provides better typing and null checks.
