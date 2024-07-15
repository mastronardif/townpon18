import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { NgxChartsModule, Color, ScaleType } from '@swimlane/ngx-charts';

import { single } from './data';
import { single2 } from './westfieldfood';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { SharedService } from './services/shared.service';
import { TownService } from '../../services/town.service';
import { config } from '../../../config/config.prod';
import { StateService } from '../../services/state/state.service';

const customColorScheme: Color = {
  domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA'],
  name: 'customScheme',
  selectable: true,
  group: ScaleType.Ordinal,
};

@Component({
  selector: 'app-charttwo',
  standalone: true,
  imports: [RouterModule, NgxChartsModule],
  templateUrl: './charttwo.component.html',
  styleUrl: './charttwo.component.css',
})
export class CharttwoComponent {
  private subscription!: Subscription;
  data: any[] = single;
  single: any[] = single;
  // single2: any[] = single2;
  single3: any[] = single2;

  // options
  gradient: boolean = false;
  animations: boolean = true;

  colorScheme: Color = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA'],
    name: 'customScheme',
    selectable: true,
    group: ScaleType.Ordinal,
  };

  constructor(
    private sharedService: SharedService,
    private stateService: StateService,
    private route: ActivatedRoute,
    private router: Router,
    private serviceTown: TownService
  ) {
    Object.assign(this, { single2 });
  }

  ngOnInit(): void {
    this.subscription = this.sharedService.callCharttwoMethod.subscribe(
      (arg: any) => {
        this.yourMethod(arg);
      }
    );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  yourMethod(arg: any): void {
    // Your method logic here, using the argument
    console.log('Charttwo method called with arg:', arg);
    if (arg) {
      this.data = [...this.single3]; // Copy of single2
    }
  }

  onSelect(event: any) {
    if (event) {
      console.log('Item clicked', event);

      // Find the index of the clicked item
      //const index = this.data.findIndex((item) => item.name === event.name);
      const itt = this.data.find((item) => item.name === event.name);
      //this.stateService.setState('example', 'https://www.healthcare.gov' + this.data[index].url);
      this.stateService.setState('example', 'https://www.healthcare.gov' + itt.url);

      // if (index !== -1) {
      //   console.log('Index of clicked item:', index);
      // } else {
      //   console.log('Item not found in data array');
      // }

      // if (index % 2 === 0) {
      //   this.data = [...this.single3]; // Copy of single2
      // } else {
      //   this.data = [...this.single]; // Copy of single
      // }

      console.log(config.apiHealthcareGov);
      this.serviceTown
        .getData(config.apiHealthcareGov) //apiEndpointCocktailDrinks)
        .subscribe((response) => {
          // console.log(response);

          const mappedItems = response.map(
            (drink: { title: any, url: any; bite: any }) => ({
              value: drink.bite.length,
              name: drink.title,
              url: drink.url,
            })
          );

          // this.data = mappedDrinks;
          //this.data = mappedDrinks.slice(0, 50);
          this.data = getRandomItems(mappedItems, 50);
        });
    }
  }

  labelFormatting(c: { label: any }) {
    return `${c.label}`;
  }
}

function getRandomItems<T>(items: T[], count: number): T[] {
  // Shuffle the array
  const shuffled = items.sort(() => 0.5 - Math.random());

  // Get the first 'count' items
  return shuffled.slice(0, count);
}
