import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
// import Header from "./components/Header/Header";
import Recipe from "./components/Recipes/Recipe";
import RecipeDetails from "./components/RecipeDetails/RecipeDetails";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Recipe />} />
          <Route path="/:id" element={<RecipeDetails />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
