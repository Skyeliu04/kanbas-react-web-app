import VariablesAndConstants from './variables/VariablesAndConstants';
import VariableTypes from './variables/VariableTypes';
import BooleanVariables from './variables/BooleanVariables';
import IfElse from './conditionals/IfElse';
import TenaryOperator from './conditionals/TenaryOperator';
import WorkingWithFunctions from './functions/WorkingWithFunctions';
import WorkingWithArrays from './arrays/WorkingWithArrays';
import JsonStringify from './json/JsonStringify';
import TemplateLiterals from './string/TemplateLiterals';
import House from './json/House';
import Spreading from './json/Spreading';
import Destructing from './json/Destructing';
import FunctionDestructing from './functions/FunctionDestructing';
import PathParameters from '../routing/PathParameters';

function JavaScript() {
  console.log('Hello World!');
  return (
    <div>
      <h1>JavaScript</h1>
      <VariablesAndConstants />
      <VariableTypes />
      <BooleanVariables />
      <IfElse />
      <TenaryOperator />
      <WorkingWithFunctions />
      <WorkingWithArrays />
      <JsonStringify />
      <TemplateLiterals />
      <House />
      <Spreading />
      <Destructing />
      <FunctionDestructing />
      <PathParameters />
    </div>
  );
}

export default JavaScript;
