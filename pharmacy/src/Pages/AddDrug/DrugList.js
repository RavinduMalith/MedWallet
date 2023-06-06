import React, { useEffect, useState } from "react";
import { Table, Button } from "react-bootstrap";
import DrugDataService from "../Services/crud";

const DrugList = ({ getDrugId }) => {
  const [drugs, setDrugs] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [drugsPerPage] = useState(10);

  useEffect(() => {
    getDrugs();
  }, []);

  const getDrugs = async () => {
    const data = await DrugDataService.getAllDrugs();
    console.log(data.docs);
    setDrugs(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };

  const deleteHandler = async (id) => {
    await DrugDataService.deleteDrug(id);
    getDrugs();
  };

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // Pagination Logic
  const indexOfLastDrug = currentPage * drugsPerPage;
  const indexOfFirstDrug = indexOfLastDrug - drugsPerPage;
  const currentDrugs = drugs.slice(indexOfFirstDrug, indexOfLastDrug);

  return (
    <>
      <div className="mb-2">
        <Button variant="dark edit" onClick={getDrugs}>
          Refresh List
        </Button>
      </div>

      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th>#</th>
            <th>drugname</th>
            <th>NDC</th>
            <th>manufacturer</th>
            <th>exdate</th>
            <th>description</th>
            <th>side_effect</th>
            <th>price</th>
          </tr>
        </thead>
        <tbody>
          {currentDrugs.map((doc, index) => {
            return (
              <tr key={doc.id}>
                <td>{index + 1 + indexOfFirstDrug}</td>
                <td>{doc.drugname}</td>
                <td>{doc.NDC}</td>
                <td>{doc.manufacturer}</td>
                <td>{doc.exdate}</td>
                <td>{doc.description}</td>
                <td>{doc.side_effect}</td>
                <td>{doc.price}</td>
                <td>
                  <Button
                    variant="secondary"
                    className="edit"
                    onClick={(e) => getDrugId(doc.id)}
                  >
                    Edit
                  </Button>
                  <Button
                    variant="danger"
                    className="delete"
                    onClick={(e) => deleteHandler(doc.id)}
                  >
                    Delete
                  </Button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>

      {/* Pagination */}
      <div className="pagination">
        {Array(Math.ceil(drugs.length / drugsPerPage))
          .fill()
          .map((_, index) => (
            <Button
              key={index}
              variant={currentPage === index + 1 ? "primary" : "outline-primary"}
              onClick={() => handlePageChange(index + 1)}
            >
              {index + 1}
            </Button>
          ))}
      </div>
    </>
  );
};

export default DrugList;
