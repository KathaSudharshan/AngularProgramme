import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectiveAppComponent } from './directive-app.component';

describe('DirectiveAppComponent', () => {
  let component: DirectiveAppComponent;
  let fixture: ComponentFixture<DirectiveAppComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DirectiveAppComponent]
    });
    fixture = TestBed.createComponent(DirectiveAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
