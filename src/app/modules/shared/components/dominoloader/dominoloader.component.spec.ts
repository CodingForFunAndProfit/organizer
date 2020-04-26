import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DominoloaderComponent } from './dominoloader.component';

describe('DominoloaderComponent', () => {
  let component: DominoloaderComponent;
  let fixture: ComponentFixture<DominoloaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DominoloaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DominoloaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
