type Pagination = {
  page: number;
  setPage: (page: number) => void;
};

export default function NavPage({ page, setPage }: Pagination) {
  return (
    <>
      <header className="flex gap-4 justify-center align-middle mb-7 mt-7">
        
        <button className="bg-slate-600 py-1 px-2 rounded-md" onClick={() => setPage(page - 1)}>
          Page {page - 1}
        </button>

        <button className="bg-slate-600 py-1 px-2 rounded-md" onClick={() => setPage(page + 1)}>
          Page {page + 1}
        </button>
      </header>
    </>
  );
}
