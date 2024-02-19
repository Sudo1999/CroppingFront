import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrameGetComponent } from './frame-get.component';

describe('FrameGetComponent', () => {
  let component: FrameGetComponent;
  let fixture: ComponentFixture<FrameGetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FrameGetComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FrameGetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
