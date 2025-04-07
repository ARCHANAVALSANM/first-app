import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { HousingService } from '../housing.service';
import { Housinglocation } from '../housinglocation';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-details',
  imports: [ReactiveFormsModule],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css',
})
export class DetailsComponent implements OnInit {
  applyForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    email: new FormControl(''),
  });

  constructor(
    private route: ActivatedRoute,
    private housingService: HousingService
  ) {}

  submitApplication() {
    this.housingService.submitApplication(
      this.applyForm.value.firstName ?? '',
      this.applyForm.value.lastName ?? '',
      this.applyForm.value.email ?? ''
    );
  }
  // housingLocationId = -1;
  housingLocation: Housinglocation | undefined;

  // ngOnInit(): void {
  //   this.housingLocationId = Number(this.route.snapshot.paramMap.get('id'));
  //   this.housingLocation = this.housingService.getHousingLocationById(
  //     this.housingLocationId
  //   );
  // }

  ngOnInit(): void {
    const housingLocationId = parseInt(this.route.snapshot.params['id'], 10);
    this.housingService
      .getHousingLocationById(housingLocationId)
      .then((housingLocation) => {
        this.housingLocation = housingLocation;
      });
  }
}

// route: ActivatedRoute = inject(ActivatedRoute);
// housingLocationId = -1;
// constructor() {
//   this.housingLocationId = Number(this.route.snapshot.params['id']);
// }

// Using paramMap.get('id') is preferred over directly accessing params['id'] because
// it provides better typing and null checks.
