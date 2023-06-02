import { ComponentFixture, flush, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { Store, StoreModule } from '@ngrx/store';

import { BoardComponent } from './board.component';
import { PipesModule } from 'src/app/pipes/pipes.module';
import { BoardService } from 'src/app/services/board.service';
import { BoardServiceMock } from 'src/app/mocks/board.service.mock';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { SharedModule } from 'src/app/components/shared/shared.module';

describe('BoardComponent', () => {
  let component: BoardComponent;
  let fixture: ComponentFixture<BoardComponent>;
  let router: Router

  beforeEach(async () => {

    await TestBed.configureTestingModule({
      declarations: [BoardComponent],
      imports: [
        RouterTestingModule,
        SharedModule,
        PipesModule,
        StoreModule.forRoot({})
      ],
      providers: [
        Store,
        HttpClient,
        HttpHandler,
        {providers: BoardService, useClass: BoardServiceMock}
      ],
    })
      .compileComponents();

    fixture = TestBed.createComponent(BoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  fit ('should create', () => {
    expect(component).toBeTruthy();
  });


});
