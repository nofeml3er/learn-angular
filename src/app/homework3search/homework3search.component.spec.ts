import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Homework3searchComponent } from './homework3search.component';

describe('Homework3searchComponent', () => {
  let component: Homework3searchComponent;
  let fixture: ComponentFixture<Homework3searchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Homework3searchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Homework3searchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
