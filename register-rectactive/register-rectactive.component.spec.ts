import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterRectactiveComponent } from './register-rectactive.component';

describe('RegisterRectactiveComponent', () => {
  let component: RegisterRectactiveComponent;
  let fixture: ComponentFixture<RegisterRectactiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterRectactiveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterRectactiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
