import React from 'react';
import { bindActionCreators, Dispatch } from 'redux';
import {
  decrement,
  increment,
  incrementAsync,
  incrementIfOdd,
} from '../actions/counter';
import Counter from '../components/Counter';
import { useTag } from '../hooks/useTag';
import { counterStateType } from '../reducers/types';
import { printTag } from '../utils/printer';

function mapStateToProps(state: counterStateType) {
  return {
    counter: state.counter,
  };
}

function mapDispatchToProps(dispatch: Dispatch) {
  return bindActionCreators(
    {
      increment,
      decrement,
      incrementIfOdd,
      incrementAsync,
    },
    dispatch
  );
}

// export default connect(mapStateToProps, mapDispatchToProps)(Counter);
export default () => {
  const [state, newTag] = useTag(
    (progressivo: number, qrCodeImageUrl: string) => {
      printTag({
        progressivo,
        qrCodeImageUrl,
      });
    }
  );

  return (
    <Counter
      fila={state.fila.length}
      newTag={newTag}
      progressivo={state.progressivo}
      tempoStimato={state.tempoStimato}
    />
  );
};
