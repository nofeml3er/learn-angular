import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Homework3headComponent } from './homework3head.component';

describe('Homework3headComponent', () => {
  let component: Homework3headComponent;
  let fixture: ComponentFixture<Homework3headComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Homework3headComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Homework3headComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
