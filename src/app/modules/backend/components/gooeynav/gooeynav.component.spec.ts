import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GooeynavComponent } from './gooeynav.component';

describe('GooeynavComponent', () => {
  let component: GooeynavComponent;
  let fixture: ComponentFixture<GooeynavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GooeynavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GooeynavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
