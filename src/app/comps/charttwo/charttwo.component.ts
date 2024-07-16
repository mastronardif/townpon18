import { Component, OnInit, OnDestroy, HostListener } from '@angular/core';
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
  styleUrls: ['./charttwo.component.css'],
})
export class CharttwoComponent implements OnInit {
  private subscription!: Subscription;
  data: any[] = single;
  single: any[] = single;
  single3: any[] = single2;

  gradient: boolean = false;
  animations: boolean = true;
  view!: [number, number];

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
    this.updateView();

    this.subscription = this.sharedService.callCharttwoMethod.subscribe(
      (arg: any) => {
        this.yourMethod(arg);
      }
    );
  }

  @HostListener('window:resize', ['$event'])
  onResize(_event: any) {
    this.updateView();
  }

  updateView() {
    const contentContainer = document.querySelector('.content-container');
    if (contentContainer) {
      const width = contentContainer.clientWidth;
      const height = contentContainer.clientHeight;
      this.view = [width, height] as [number, number];
    }
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  yourMethod(arg: any): void {
    console.log('Charttwo method called with arg:', arg);
    if (arg) {
      this.data = [...this.single3];
    }
  }

  onSelect(event: any) {
    if (event) {
      console.log('Item clicked', event);
      const itt = this.data.find((item) => item.name === event.name);
      this.stateService.setState('example', 'https://www.healthcare.gov' + itt.url);

      const url = config.apiHealthcareGov;
      const formattedStr = config.proxy.replace('${url}', url);

      this.serviceTown
        .getData(formattedStr)
        .subscribe((response) => {
          const mappedItems = response.map(
            (drink: { title: any; url: any; bite: any }) => ({
              value: drink.bite.length,
              name: drink.title,
              url: drink.url,
            })
          );

          this.data = getRandomItems(mappedItems, 50);
        });
    }
  }

  labelFormatting(c: { label: any }) {
    return `${c.label}`;
  }
}

function getRandomItems<T>(items: T[], count: number): T[] {
  const shuffled = items.sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
}
