import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayDesignComponent } from './display-design.component';

describe('DisplayDesignComponent', () => {
  let component: DisplayDesignComponent;
  let fixture: ComponentFixture<DisplayDesignComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DisplayDesignComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DisplayDesignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
