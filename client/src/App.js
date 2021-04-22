import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import CheckoutPage from './pages/checkoutPage';
import ThankYouPage from './pages/thankYouPage';
import Layout from './components/Layout';
import { MainProvider } from './context/mainContext';
import { BasketProvider } from './context/basketContext';

function App() {
  return (
    <MainProvider>
      <BasketProvider>
        <div className='App'>
          <Layout>
            <CheckoutPage />
            <ThankYouPage />
          </Layout>
        </div>
      </BasketProvider>
    </MainProvider>
  );
}

export default App;
