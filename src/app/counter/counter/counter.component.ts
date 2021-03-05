import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent implements OnInit {
  counter = 0;
  public form: FormGroup | undefined;

  @Output() counterEmitter = new EventEmitter<number>();

  constructor(private fb: FormBuilder) {
    this.form = fb.group({
      login: ['', Validators.required],
      email: ['']
    });
  }

  ngOnInit(): void {
  }

  increment(): void {
    this.counter++;
    this.counterEmitter.emit(this.counter);
  }

  decrement(): void {
    this.counter--;
  }
}
