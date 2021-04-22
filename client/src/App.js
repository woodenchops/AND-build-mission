import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import CheckoutPage from './pages/checkoutPage';
import ThankYouPage from './pages/thankYouPage';
import Layout from './components/Layout';
import { MainProvider } from './context/mainContext';

function App() {
  return (
    <MainProvider>
      <div className='App'>
        <Layout>
          <CheckoutPage />
          <ThankYouPage />
        </Layout>
      </div>
    </MainProvider>
  );
}

export default App;
