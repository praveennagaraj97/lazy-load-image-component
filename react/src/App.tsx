import './App.css';
import { images } from './data';
import { Image } from './Image';

function App() {
  return (
    <div className="App">
      {images.map((each, i) => {
        return (
          <Image
            key={i}
            src={each}
            width={'360px'}
            height={'230px'}
            alt={Math.random().toString() + i}
          />
        );
      })}
    </div>
  );
}

export default App;
