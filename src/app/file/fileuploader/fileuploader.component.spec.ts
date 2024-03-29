import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FileuploaderComponent } from './fileuploader.component';

describe('UploadComponent', () => {
  let component: FileuploaderComponent;
  let fixture: ComponentFixture<FileuploaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FileuploaderComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FileuploaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
