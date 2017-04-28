import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DebreifDisasterComponent } from './debreif-disaster.component';

describe('DebreifDisasterComponent', () => {
  let component: DebreifDisasterComponent;
  let fixture: ComponentFixture<DebreifDisasterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DebreifDisasterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DebreifDisasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
