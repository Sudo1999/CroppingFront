import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrameListComponent } from './frame-list.component';

describe('FrameListComponent', () => {
  let component: FrameListComponent;
  let fixture: ComponentFixture<FrameListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FrameListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FrameListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
