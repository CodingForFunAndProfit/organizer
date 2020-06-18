import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeighttrackerComponent } from './weighttracker.component';

describe('WeighttrackerComponent', () => {
  let component: WeighttrackerComponent;
  let fixture: ComponentFixture<WeighttrackerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeighttrackerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeighttrackerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
