import { BrowserRouter, Route, Routes } from "react-router-dom";
import Inicio from "./paginas/Inicio";
import SobreMim from "./paginas/SobreMim";
import Menu from "./Componentes/Menu";
import Rodape from "Componentes/Rodape";
import PaginaPadrao from "Componentes/PaginaPadrao";
import Post from "paginas/Post";
import NotFound from "paginas/NotFound";
import ScrollToTop from "Componentes/ScrollToTop";





function AppRoutes() {
  return (
    <BrowserRouter>
    <ScrollToTop />
    <Menu/>
       <Routes>

        <Route path="/" element={<PaginaPadrao/>}>
        <Route index element={<Inicio />} />
        <Route path="sobre" element={<SobreMim />} />
     
        </Route>
        <Route path="posts/:id" element={<Post />}/>
        <Route path="*" element={<NotFound/>} />
       </Routes>
       <Rodape/>
    </BrowserRouter>
  );
}

export default AppRoutes;
