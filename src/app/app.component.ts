import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit{
  title = 'task-control-app';

  constructor(
    private store: Store
  ){}

  ngOnInit(){
    this.store.dispatch({ type: '[App] Load Boards' });

  }
}
