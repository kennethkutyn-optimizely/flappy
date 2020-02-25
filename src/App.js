import React from 'react';
import logo from './logo.svg';
import './App.css';
import FlappyBird from './flappy-bird';
import {
  createInstance,
  OptimizelyProvider,
  OptimizelyFeature,
  OptimizelyExperiment,
  OptimizelyVariation,
  withOptimizely,
} from '@optimizely/react-sdk'

const urlParams = new URLSearchParams(window.location.search);

const optimizely = createInstance({
  sdkKey: urlParams.get('sdkKey') || 'Vj8G36GZaqNDCKvUKmVFLY',
  datafileOptions: {
    updateInterval: 1000,
    autoUpdate: true,
  }
})

function getId() {
  var key = 'optimizely-ctf-userId'
  var userId = localStorage.getItem(key);
  if (!userId) {
    userId = String(Math.random());
    localStorage.setItem(key, userId);
  }
  return userId;
}

function getScale() {
  return (window.innerWidth / 288);
}

function App() {
  var scale = getScale();

  var scaleStyles = {
    // Remove scaling
    //transform: `scale(${scale})`,
  }

  return (
    <OptimizelyProvider
      optimizely={optimizely}
      user={{
        id: getId(),
        attributes: {
          table: Number(urlParams.get('table')),
          row: Number(urlParams.get('table')),
        }
      }}
    >
      <div className="App" style={{...styles.app, ...scaleStyles}}>
        <OptimizelyFeature feature="pipes" autoUpdate>
          {(isEnabled, variables) => (
            <FlappyBird
              id="A"
              pipesFeatureEnabled={isEnabled}
              gap={variables.gap || 120}
              gravity={variables.gravity || 9.8}
            />
          )}
        </OptimizelyFeature>
      </div>
    </OptimizelyProvider>
  );
}

const styles = {
  app: {
    width: '100%',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }
}

export default App;
