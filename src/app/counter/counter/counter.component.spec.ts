import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CounterComponent } from './counter.component';
import {FormBuilder} from '@angular/forms';

describe('CounterComponent', () => {
  let component: CounterComponent;
  let fixture: ComponentFixture<CounterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CounterComponent ],
      providers: [ FormBuilder ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should increment counter by 1', () => {
    component.increment();
    expect(component.counter).toBe(1);
  });

  it('should decrement counter by 1', () => {
    component.decrement();
    expect(component.counter).toBe(-1);
  });

  it('should increment value by emitter', () => {
    let result = 0;
    component.counterEmitter.subscribe(v => result = v);
    component.increment();
    expect(result).toBe(1);
  });

  it('should create form with 2 controls', () => {
    expect(component.form?.contains('login')).toBeTruthy();
    expect(component.form?.contains('email')).toBeTruthy();
  });

  it('should mark login as invalid if empty value', () => {
    const control = component.form?.get('login');

    control?.setValue('');

    expect(control?.value).toBeFalsy();
  });
});
