import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MutantDetailComponent } from './mutant-detail.component';

describe('MutantDetailComponent', () => {
  let component: MutantDetailComponent;
  let fixture: ComponentFixture<MutantDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MutantDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MutantDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
