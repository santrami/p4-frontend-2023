type Pagination = {
    page: number;
    setPage: (page: number) => void;
  };
  
  export default function NavPage({ page, setPage }: Pagination) {
    return (
      <>
        <header className="d-flex justify-content-between align-items-center">
          <p>Page: {page}</p>
  
          <button className="button" onClick={() => setPage(page - 1)}>
            Page {page - 1}
          </button>
  
          <button className="button" onClick={() => setPage(page + 1)}>
            Page {page + 1}
          </button>
        </header>
      </>
    );
  }