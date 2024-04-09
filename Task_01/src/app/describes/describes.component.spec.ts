import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DescribesComponent } from './describes.component';

describe('DescribesComponent', () => {
  let component: DescribesComponent;
  let fixture: ComponentFixture<DescribesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DescribesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DescribesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
