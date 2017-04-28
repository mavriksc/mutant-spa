import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignSquadComponent } from './assign-squad.component';

describe('AssignSquadComponent', () => {
  let component: AssignSquadComponent;
  let fixture: ComponentFixture<AssignSquadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssignSquadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssignSquadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
