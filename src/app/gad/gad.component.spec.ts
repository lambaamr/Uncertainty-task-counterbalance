import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GadComponent } from './gad.component';

describe('GadComponent', () => {
  let component: GadComponent;
  let fixture: ComponentFixture<GadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
