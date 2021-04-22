import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Main from './components/Main';
import Layout from './components/Layout';
import { MainProvider } from './context/mainContext';

function App() {
  return (
    <MainProvider>
      <div className='App'>
        <Layout>
          <Main />
        </Layout>
      </div>
    </MainProvider>
  );
}

export default App;
