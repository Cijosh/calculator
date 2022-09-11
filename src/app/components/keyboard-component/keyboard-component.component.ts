import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-keyboard-component',
  templateUrl: './keyboard-component.component.html',
  styleUrls: ['./keyboard-component.component.css']
})
export class KeyboardComponentComponent implements OnInit {
  currentValue = '0';
  stackValue=0;
  operator : string = '';
  dotCounter = false;
  @Output() displayValue = new EventEmitter<string>();
  
  constructor() { }

  ngOnInit(): void {
  }
  clear(){
    this.dotCounter = false;
    this.currentValue = '0';
    this.stackValue = 0;
    this.displayValue.emit(this.currentValue);
  }

  setNumber(val:number){
    if(this.currentValue == '0'){
      this.currentValue = '';
    }
      this.currentValue=`${this.currentValue}${val}`;
      this.displayValue.emit(this.currentValue);
  }

  setDecimal(){
    if(!this.dotCounter){
      this.currentValue=this.currentValue + '.'
      this.dotCounter = true;
    }
  }

  selectOperator(operator:string){
    this.stackValue = Number(this.currentValue);
    this.currentValue = '0';
    this.operator = operator;
    this.dotCounter = false;
  }

  calculate() {
    const a = this.stackValue;
    const b = Number(this.currentValue);
    let result : number = 0;
    if (this.operator === '*') {
      result = a * b;
    }
    else if (this.operator === '/') {
      result = a / b;
    }
    else if (this.operator === '+') {
      result = a + b;
    }
    else if (this.operator === '-') {
      result = a - b;
    }
    this.stackValue = result;
    this.currentValue = result.toString();
    this.displayValue.emit(this.currentValue);  
  }

}
