import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KeyboardComponentComponent } from './keyboard-component.component';

describe('KeyboardComponentComponent', () => {
  let component: KeyboardComponentComponent;
  let fixture: ComponentFixture<KeyboardComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KeyboardComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KeyboardComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should add value',() =>{
    component.currentValue = '3';
    component.stackValue = 5;
    component.operator = '+';
    component.calculate();
    expect(component.currentValue).toBe('8')
  })
  it('should subtract value',() =>{
    component.currentValue = '3';
    component.stackValue = 5;
    component.operator = '-';
    component.calculate();
    expect(component.currentValue).toBe('2')
  })
  it('should multiply value',() =>{
    component.currentValue = '5';
    component.stackValue = 3;
    component.operator = '*';
    component.calculate();
    expect(component.currentValue).toBe('15')
  })
  it('should divide value',() =>{
    component.currentValue = '2';
    component.stackValue = 10;
    component.operator = '/';
    component.calculate();
    expect(component.currentValue).toBe('5')
  })

  it('should only accept one decimal' , ()=>{
    component.currentValue = '2';
    component.stackValue = 10;
    component.setDecimal();
    component.setDecimal();
    component.setNumber(40);
    component.operator = '*';
    component.calculate();
    expect(component.currentValue).toBe('24')
  })

});
