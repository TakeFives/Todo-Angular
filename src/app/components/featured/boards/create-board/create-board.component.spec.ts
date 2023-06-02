import { HttpClient, HttpHandler } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Store, StoreModule } from '@ngrx/store';
import { SharedModule } from 'src/app/components/shared/shared.module';
import { PipesModule } from 'src/app/pipes/pipes.module';

import { CreateBoardComponent } from './create-board.component';

describe('CreateBoardComponent', () => {
  let component: CreateBoardComponent;
  let fixture: ComponentFixture<CreateBoardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateBoardComponent ],
      imports: [
        RouterTestingModule,
        SharedModule,
        PipesModule,
        StoreModule.forRoot({})
      ],
      providers: [
        Store,
        HttpClient,
        HttpHandler
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
