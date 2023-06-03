import { useEffect, useState } from "react";
import { Bibliotheque } from "../api/bibliotheque";
import { Button, Table } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Categorie = () => {
  const [categorie, setCategorie] = useState();
  const navigation = useNavigate();

  async function GetAllCategories() {
    const result = await Bibliotheque.getAllCategories();
    setCategorie(result);
  }

  useEffect(() => {
    GetAllCategories();
  }, []);

  return (
    <div className="container mt-4">
      <h1>Categorie</h1>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>id</th>
            <th>nom</th>
          </tr>
        </thead>
        <tbody>
          {categorie &&
            categorie.map((categorie) => (
              <tr key={categorie.id}>
                <td>{categorie.id}</td>
                <td>{categorie.nom}</td>
              </tr>
            ))}
          <tr>
            <td colSpan={6}>
              <Button
                onClick={() => navigation("/categorie/new")}
                variant="primary"
              >
                Ajouter une categorie
              </Button>
            </td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
};

export default Categorie;
