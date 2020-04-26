import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CircleloaderComponent } from './circleloader.component';

describe('CircleloaderComponent', () => {
  let component: CircleloaderComponent;
  let fixture: ComponentFixture<CircleloaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CircleloaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CircleloaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
