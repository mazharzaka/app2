import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WatchproduectComponent } from './watchproduect.component';

describe('WatchproduectComponent', () => {
  let component: WatchproduectComponent;
  let fixture: ComponentFixture<WatchproduectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WatchproduectComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WatchproduectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
