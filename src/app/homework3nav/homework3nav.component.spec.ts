import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Homework3navComponent } from './homework3nav.component';

describe('Homework3navComponent', () => {
  let component: Homework3navComponent;
  let fixture: ComponentFixture<Homework3navComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Homework3navComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Homework3navComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
