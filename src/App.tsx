import './App.css';
import React, { useEffect, useState } from 'react';
import Table from './Table';

import { FlavanoidsAnalysisObject, GammaAnalysisObject } from './types';
import { getAlcoholClassList, getFlavanoidAnalysis, getGammaAnalysis } from './utilities';

function App() {
  const [classList, setClassList] = useState<string[]>([]);
  const [flavanoidAnalysis, setFlavanoidAnalysis] = useState<string[][]>([]);
  const [gammaAnalysis, setGammaAnalysis] = useState<string[][]>([]);

  useEffect(()=>{
    setClassList(getAlcoholClassList())
    setFlavanoidAnalysis(getFlavanoidAnalysis())
    setGammaAnalysis(getGammaAnalysis())
  },[])
 
  return (
    <div className="App">
      <h1>Wine Data Analysis</h1>
      <div className="main-cointainer">
        <Table heading={'Flavanoids Analysis'} classList={classList} list={flavanoidAnalysis} />
        <Table heading={'Gamma Analysis'} classList={classList} list={gammaAnalysis} />
      </div>
    </div>
  );
}

export default App;
