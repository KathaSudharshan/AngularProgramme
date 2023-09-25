import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PeekABooComponent } from './peek-aboo.component';

describe('PeekABooComponent', () => {
  let component: PeekABooComponent;
  let fixture: ComponentFixture<PeekABooComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PeekABooComponent]
    });
    fixture = TestBed.createComponent(PeekABooComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
