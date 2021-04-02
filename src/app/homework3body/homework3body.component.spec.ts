import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Homework3bodyComponent } from './homework3body.component';

describe('Homework3bodyComponent', () => {
  let component: Homework3bodyComponent;
  let fixture: ComponentFixture<Homework3bodyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Homework3bodyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Homework3bodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
