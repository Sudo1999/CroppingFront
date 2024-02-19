import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RectangleListComponent } from './rectangle-list.component';

describe('RectangleListComponent', () => {
  let component: RectangleListComponent;
  let fixture: ComponentFixture<RectangleListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RectangleListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RectangleListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
