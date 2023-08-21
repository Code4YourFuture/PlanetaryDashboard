import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanetdashboardComponent } from './planetdashboard.component';

describe('PlanetdashboardComponent', () => {
  let component: PlanetdashboardComponent;
  let fixture: ComponentFixture<PlanetdashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlanetdashboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlanetdashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
