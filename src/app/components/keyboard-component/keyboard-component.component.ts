import { Component, OnInit } from '@angular/core';

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
  
  constructor() { }

  ngOnInit(): void {
  }
  clear(){
    this.dotCounter = false;
    this.currentValue = '0';
    this.stackValue = 0;
  }

  setNumber(val:number){
      this.currentValue=`${this.currentValue}${val}`;
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
    debugger;
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
  }

}
