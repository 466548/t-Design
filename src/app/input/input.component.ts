import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.sass']
})
export class InputComponent implements OnInit {

  @Input() label: string;
  @Input() placeholder: string;
  @Input() maxLength: string;
  @Input() required = false;
  @Input() disabled = false;
  @Input() errorMessage: string;
  @Input() value: string;
  @Output() valueChange: EventEmitter<string> = new EventEmitter<string>();
  @Input() pattern: string;
  @Input() patternErrorMsg: string;
  @Output() changeEvent: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  change(value: string) {
    this.value = value;
    this.valueChange.emit(value);
    this.changeEvent.emit();
  }

}
