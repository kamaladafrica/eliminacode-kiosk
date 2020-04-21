import React from 'react';
import { Link } from 'react-router-dom';
import routes from '../constants/routes.json';
import styles from './Home.css';
import Counter from './Counter';
import env from '../environment';

export default function Home() {


  return (
    <div className={styles.container} data-tid="container">
      <Counter fila={5} newTag={() => {}} progressivo={12} tempoStimato={35} />
    </div>
  );
}
