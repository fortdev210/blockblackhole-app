interface PaginationProps {
  totalPage: number;
  curPage: number;
  onChangeCurPage: (curPage: number) => void;
}

export default function Pagination({
  curPage,
  totalPage,
  onChangeCurPage,
}: PaginationProps) {
  const handleClick = (page: number) => {
    if (page >= 1 && page <= totalPage) {
      onChangeCurPage(page);
    }
  };

  return (
    <div className="flex justify-center items-center space-x-2 mt-4">
      <button
        onClick={() => handleClick(curPage - 1)}
        className="px-4 py-2 border rounded-lg bg-gray-100 text-gray-700 hover:bg-blue-100"
        disabled={curPage === 1}
      >
        Previous
      </button>
      <button className="px-4 py-2 border rounded-lg mx-1 bg-blue-500 text-white">
        {curPage}
      </button>
      <button
        onClick={() => handleClick(curPage + 1)}
        className="px-4 py-2 border rounded-lg bg-gray-100 text-gray-700 hover:bg-blue-100"
        disabled={curPage === totalPage}
      >
        Next
      </button>
    </div>
  );
}
