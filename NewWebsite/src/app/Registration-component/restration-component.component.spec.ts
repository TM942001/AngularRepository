import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestrationComponentComponent } from './restration-component.component';

describe('RestrationComponentComponent', () => {
  let component: RestrationComponentComponent;
  let fixture: ComponentFixture<RestrationComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RestrationComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RestrationComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
