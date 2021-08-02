import './App.css';
import { QueryClient, QueryClientProvider } from 'react-query'
import Books from './components/Books'

const client = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={client}>
      <div className="App">
        <Books />
      </div>
    </QueryClientProvider>
  );
}

export default App;
