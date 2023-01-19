import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';

import { TitleComponent } from './title.component';

describe('TitleComponent', () => {
  let component: TitleComponent;
  let fixture: ComponentFixture<TitleComponent>;
  
const fakeActivatedRoute = {
  snapshot: { data: {} }
}

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TitleComponent ],
      providers: [
        { provide: ActivatedRoute, useValue: fakeActivatedRoute },
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
