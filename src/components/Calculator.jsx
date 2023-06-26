import { useState } from 'react';
import calculate from '../logic/calculate';
import Button from './Button';

const Calculator = () => {
  const state = {
    total: null,
    next: null,
    operation: null,
  };

  const [now, toggle] = useState(state);

  const computeFunction = (e) => {
    toggle((now) => calculate(now, e.target.name));
  };

  // Destructuring state
  const { total, next, operation } = now;
  return (
    <div className="panel">
      <table>
        <thead>
          <tr className="result row">
            <td colSpan={4}>
              {total}
              {operation}
              {next}
            </td>
          </tr>
        </thead>
        <tbody>
          <tr className="row">
            <Button computeFunction={computeFunction} name="AC" />
            <Button computeFunction={computeFunction} name="+/-" />
            <Button computeFunction={computeFunction} name="&#37;" />
            <Button computeFunction={computeFunction} name="&#247;" className="orange" />
          </tr>
          <tr className="row">
            <Button computeFunction={computeFunction} name="9" />
            <Button computeFunction={computeFunction} name="8" />
            <Button computeFunction={computeFunction} name="7" />
            <Button computeFunction={computeFunction} name="x" className="orange" />
          </tr>
          <tr className="row">
            <Button computeFunction={computeFunction} name="6" />
            <Button computeFunction={computeFunction} name="5" />
            <Button computeFunction={computeFunction} name="4" />
            <Button computeFunction={computeFunction} name="-" className="orange" />
          </tr>
          <tr className="row">
            <Button computeFunction={computeFunction} name="3" />
            <Button computeFunction={computeFunction} name="2" />
            <Button computeFunction={computeFunction} name="1" />
            <Button computeFunction={computeFunction} name="+" className="orange" />
          </tr>
          <tr className="row">
            <Button computeFunction={computeFunction} name="0" colSpan={2} />
            <Button computeFunction={computeFunction} name="." />
            <Button computeFunction={computeFunction} name="&#61;" className="orange" />
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Calculator;
