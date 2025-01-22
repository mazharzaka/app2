import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddprodectComponent } from './addprodect.component';

describe('AddprodectComponent', () => {
  let component: AddprodectComponent;
  let fixture: ComponentFixture<AddprodectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddprodectComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddprodectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
