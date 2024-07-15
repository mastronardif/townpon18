import { Component, Input } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { SharedService } from './comps/charttwo/services/shared.service';
import { StateService } from './services/state/state.service';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterModule, RouterOutlet, MatToolbarModule, MatIconModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  state$!: Observable<any>;
  // @Input()
  // state$!: Observable<string>;
link: string|any[]|null|undefined = '/some-path';
  constructor(private sharedService: SharedService, private stateService: StateService) {}

  ngOnInit(): void {
    this.state$ = this.stateService.getState$('example');
   }


  callCharttwoMethod(arg: string) {
    this.sharedService.triggerCharttwoMethod(arg);
  }
  adminTown($event: MouseEvent) {
    throw new Error('Method not implemented.');
  }

  adminAddStoreDetail(arg0: string) {
    throw new Error('Method not implemented.');
  }

  title = 'townpon';
}
