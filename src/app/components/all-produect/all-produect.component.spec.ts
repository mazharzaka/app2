import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllProduectComponent } from './all-produect.component';

describe('AllProduectComponent', () => {
  let component: AllProduectComponent;
  let fixture: ComponentFixture<AllProduectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AllProduectComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllProduectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
