import React from 'react';
import Counter from '../components/Counter';
import { useTag } from '../hooks/useTag';
import { printTag } from '../utils/printer';

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
      last={state.lastBruciato}
      tempoStimato={state.tempoStimato}
    />
  );
};
