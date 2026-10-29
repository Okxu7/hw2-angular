import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ImageBinding } from './image-binding';

describe('ImageBinding', () => {
  let component: ImageBinding;
  let fixture: ComponentFixture<ImageBinding>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ImageBinding],
    }).compileComponents();

    fixture = TestBed.createComponent(ImageBinding);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
