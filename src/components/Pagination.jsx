import { MdArrowBack, MdArrowForward } from 'react-icons/md';
import "../styles/Pagination.css";

function Pagination({ currentPage, setCurrentPage, totalPages }) {

  const handlePrev = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <div className="pagination-container">
      <button onClick={handlePrev} disabled={currentPage === 1} className="pagination-button">
        <MdArrowBack size={20} />
      </button>
      <span className="pagination-page">{currentPage}</span>
      <button onClick={handleNext} disabled={currentPage === totalPages} className="pagination-button">
        <MdArrowForward size={20} />
      </button>
    </div>
  );
}

export default Pagination;
