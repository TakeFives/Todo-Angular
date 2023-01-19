import { HttpClient, HttpHandler } from '@angular/common/http';
import { InjectionToken } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ActionsSubject, ReducerManager, ReducerManagerDispatcher, StateObservable, Store, StoreModule } from '@ngrx/store';
import { SharedModule } from 'src/app/components/shared/shared.module';
import { PipesModule } from 'src/app/pipes/pipes.module';

import { TasklistComponent } from './tasklist.component';

describe('TasklistComponent', () => {
  let component: TasklistComponent;
  let fixture: ComponentFixture<TasklistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TasklistComponent ],
      imports: [
        RouterTestingModule,
        SharedModule,
        PipesModule,
        StoreModule.forRoot({})
      ],
      providers: [
        HttpClient,
        HttpHandler,
        Store,
      ],
    })
    .compileComponents();

    fixture = TestBed.createComponent(TasklistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
