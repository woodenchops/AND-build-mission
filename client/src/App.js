
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Main from './components/Main';
import Layout from './components/Layout';

function App() {
  return (
    <div className="App">
      <Layout>
        <Main/>
      </Layout>
    </div>
  );
}

export default App;
