import logo from './logo.svg';
import './App.css';
import { Container } from "react-bootstrap";
import { Routes, Route } from "react-router-dom";
import './assets/styles/app.scss';
import 'react-toastify/dist/ReactToastify.css';

// Layout
import Layout from './layouts/Layout';
import { Home } from './pages/Home';
import { Recipes } from './pages/Recipes';
import { Login } from './pages/auth/Login';
import { RecipeView } from './pages/RecipeView';
import { BackOffice } from './pages/BackOffice';


function App() {
  return (
    <Layout>
      <Container>
        <Routes>
          <Route path="/" element={<Home />} exact />
          <Route path="/recipes" element={<Recipes />} />
          <Route path="/recipes/:id" element={<RecipeView />} />
          <Route path="/login" element={<Login />} />
          <Route path="/backoffice" element={<BackOffice />} />
          {/* <Route path='*' element={<NotFound />} /> */}
        </Routes>
      </Container>
    </Layout>
  );
}

export default App;
