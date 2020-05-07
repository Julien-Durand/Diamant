import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JoinTableFormComponent } from './join-table-form.component';

describe('JoinTableFormComponent', () => {
  let component: JoinTableFormComponent;
  let fixture: ComponentFixture<JoinTableFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JoinTableFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JoinTableFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
