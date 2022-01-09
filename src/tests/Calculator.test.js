import React from 'react';
import Calculator from '../containers/Calculator';
import {mount, configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({adapter: new Adapter()});

describe('Calculator', () => {
  let container;
  beforeEach(() => {
    container = mount(<Calculator/>)
  });

// // calculator.add() - add 1 to 4 and get 5
it('should be able to add 1 to 4 and get 5', () => {
  const button1 = container.find('#number1');
  const buttonPlus = container.find('#operator_add');
  const button4 = container.find('#number4');
  const buttonEquals = container.find('#operator-equals')
  const runningTotal=container.find('#running-total');
  button1.simulate('click');
  buttonPlus.simulate('click');
  button4.simulate('click');
  buttonEquals.simulate('click');
  expect(runningTotal.text()).toEqual('5');
});


  it('should change running total on number enter', () => {
    const button4 = container.find('#number4');
    const runningTotal = container.find('#running-total');
    button4.simulate('click');
    expect(runningTotal.text()).toEqual('4');
  });
// calculator.subtract() subtract 4 from 7 and get 3
it('should be able to subtract 4 from 7 and get 3', () => {
  container.find("#number7").simulate("click");
  container.find("#operator-subtract").simulate("click");
  container.find("#number4").simulate("click");
  container.find("#operator-equals").simulate("click");
  const runningTotal = container.find('#running-total');
  expect(runningTotal.text()).toEqual('3');
});


// calculator.multiply() - multiply 3 by 5 and get 15

it('should be able to multiply 3 by 5 and get 15', () => {
  container.find("#number3").simulate("click");
  container.find("#operator-multiply").simulate("click");
  container.find("#number5").simulate("click");
  container.find("#operator-equals").simulate("click");
  const runningTotal = container.find('#running-total');
  expect(runningTotal.text()).toEqual('15');
});

// calculator.divide() - divide 21 by 7 and get 3

it('should be able to divide 21 by 7 and get 3', () => {
  container.find("#number2").simulate("click");
  container.find("#number1").simulate("click");
  container.find("#operator-divide").simulate("click");
  container.find("#number7").simulate("click");
  container.find("#operator-equals").simulate("click");
  const runningTotal = container.find('#running-total');
  expect(runningTotal.text()).toEqual('3');
});


// calculator.numberClick() - concatenate multiple number button clicks

it('should be able to concatenate multiple numbers', () => {
  container.find("#number2").simulate("click");
  container.find("#number1").simulate("click");
  container.find("#number6").simulate("click");
  // container.find("#operator-equals").simulate("click");
  const runningTotal = container.find('#running-total');
  expect(runningTotal.text()).toEqual('216');
});


// calculator.operatorClick() - chain multiple operations together

it('should be able to chain multuple operations together', () => {
  container.find("#number4").simulate("click");
  container.find("#operator-divide").simulate("click");
  container.find("#number2").simulate("click");
  container.find("#operator_add").simulate("click");
  container.find("#number9").simulate("click");
  container.find("#operator-equals").simulate("click");
  const runningTotal = container.find('#running-total');
  expect(runningTotal.text()).toEqual('11');
});

// calculator.clearClick() - clear the running total without affecting the calculation
it('should be able to cclear the running total without affecting the calculation', () => {
  container.find("#number4").simulate("click");
  container.find("#operator-divide").simulate("click");
  container.find("#number2").simulate("click");
  container.find("#operator_add").simulate("click");
  container.find("#number9").simulate("click");
  container.find("#operator_add").simulate("click");
  container.find("#number7").simulate("click");
  container.find("#operator-subtract").simulate("click");
  container.find("#number4").simulate("click");
  container.find("#clear").simulate("click");

  container.find("#operator-equals").simulate("click");
  const runningTotal = container.find('#running-total');
  expect(runningTotal.text()).toEqual('18');

});

});