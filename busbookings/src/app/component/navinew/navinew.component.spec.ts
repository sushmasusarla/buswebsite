import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavinewComponent } from './navinew.component';

describe('NavinewComponent', () => {
  let component: NavinewComponent;
  let fixture: ComponentFixture<NavinewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavinewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavinewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
