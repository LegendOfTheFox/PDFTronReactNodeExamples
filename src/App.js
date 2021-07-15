import React from 'react';

import './App.css';
import BasicWebViewer from "./Components/BasicWebViewer";
import ExtractSignatureWebViewer from "./Components/ExtractSignatureWebViewer";
import CustomizedWebViewer from "./Components/CustomizedWebViewer/CustomizedWebViewer";
import AnnotationWebViewer from "./Components/AnnotationWebViewer";
import ProgrammaticAnnotationWebViewer from "./Components/ProgrammaticAnnotationWebViewer";
import DisableFeatureWebViewer from "./Components/DisableWebViewer";
import CustomAnnotationTriangle from "./Components/CustomAnnotationTriangle";
import CustomAnnotationArc from "./Components/CustomAnnotationArc";
//import OCGWebViewer from './Components/OCGWebViewer';
import ZoomTest from './Components/ZoomTest';
import UIChanges from './Components/UIChanges';

const App = () => {

  return (
    <div className="App">
      {/* <BasicWebViewer /> */}
      <UIChanges />
      {/* <CustomAnnotationTriangle /> */}
    </div>
  );
};

export default App;
