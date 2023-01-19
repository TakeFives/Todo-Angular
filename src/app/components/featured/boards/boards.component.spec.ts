import { HttpClient, HttpHandler } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { Store, StoreModule } from '@ngrx/store';
import { BoardServiceMock } from 'src/app/mocks/board.service.mock';
import { PipesModule } from 'src/app/pipes/pipes.module';
import { BoardService } from 'src/app/services/board.service';
import { SharedModule } from '../../shared/shared.module';

import { BoardsComponent } from './boards.component';

describe('BoardsComponent', () => {
  let component: BoardsComponent;
  let fixture: ComponentFixture<BoardsComponent>;
  let router: Router;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoardsComponent ],
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
      ]
    })
    .compileComponents();

    router = TestBed.inject(Router);
    spyOn(router, 'navigate')

    fixture = TestBed.createComponent(BoardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create boards', () => {
    expect(component).toBeTruthy();
  });
  it('should go to board', () => {
    const id = 1
    component.goToBoard(1);
    expect(router.navigate).toHaveBeenCalledWith(['/board', id])
  });
  
});
