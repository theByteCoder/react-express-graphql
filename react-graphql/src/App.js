import './App.css';
import { QueryClient, QueryClientProvider } from 'react-query'
import Lists from './components/Lists'

const client = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={client}>
      <div className="App">
        <Lists />
      </div>
    </QueryClientProvider>
  );
}

export default App;
