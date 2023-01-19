import { HttpClient, HttpHandler } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { StoreModule } from '@ngrx/store';

import { EditBoardComponent } from './edit-board.component';

describe('EditBoardComponent', () => {
  let component: EditBoardComponent;
  let fixture: ComponentFixture<EditBoardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EditBoardComponent],
      imports: [
        RouterTestingModule,
        StoreModule.forRoot({})
      ],
      providers: [
        HttpClient,
        HttpHandler
      ]
    })
      .compileComponents();

    fixture = TestBed.createComponent(EditBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
