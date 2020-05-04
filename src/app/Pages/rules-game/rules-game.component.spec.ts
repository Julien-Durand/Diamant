import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RulesGameComponent } from './rules-game.component';

describe('RulesGameComponent', () => {
  let component: RulesGameComponent;
  let fixture: ComponentFixture<RulesGameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RulesGameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RulesGameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
