import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SendimageComponent} from './sendimage.component';

describe('SendimageComponent', () => {
  let component: SendimageComponent;
  let fixture: ComponentFixture<SendimageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    declarations: [SendimageComponent]
})
    .compileComponents();
    
    fixture = TestBed.createComponent(SendimageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
