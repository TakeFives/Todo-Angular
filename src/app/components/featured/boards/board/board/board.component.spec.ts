import { ComponentFixture, flush, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { Store, StoreModule } from '@ngrx/store';

import { BoardComponent } from './board.component';

describe('BoardComponent', () => {
  let component: BoardComponent;
  let fixture: ComponentFixture<BoardComponent>;
  let router: Router

  beforeEach(async () => {

    await TestBed.configureTestingModule({
      declarations: [BoardComponent],
      imports: [
        RouterTestingModule,
        StoreModule.forRoot({})
      ],
      providers: [
        Store,
      ],
    })
      .compileComponents();

    fixture = TestBed.createComponent(BoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


});
