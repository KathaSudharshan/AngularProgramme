import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DependencyInjectionAppComponent } from './dependency-injection-app.component';

describe('DependencyInjectionAppComponent', () => {
  let component: DependencyInjectionAppComponent;
  let fixture: ComponentFixture<DependencyInjectionAppComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DependencyInjectionAppComponent]
    });
    fixture = TestBed.createComponent(DependencyInjectionAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
