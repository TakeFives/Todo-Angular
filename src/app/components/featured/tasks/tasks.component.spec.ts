import { HttpClient, HttpHandler } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Store, StoreModule } from '@ngrx/store';
import { PipesModule } from 'src/app/pipes/pipes.module';
import { SharedModule } from '../../shared/shared.module';

import { TasksComponent } from './tasks.component';

describe('BoardComponent', () => {
  let component: TasksComponent;
  let fixture: ComponentFixture<TasksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TasksComponent],
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

    fixture = TestBed.createComponent(TasksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
