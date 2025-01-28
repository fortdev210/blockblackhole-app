import { useEffect, useState } from "react";
import apiInstance from "../../api/axios";
import { FeedbackType } from "../../types/feedback-type";
import { getSentimentFeedback } from "../../utils/feedback";
import Pagination from "components/molecules/pagination/pagination";

const PAGE_ITEMS_LIMIT = 10;

export default function AdminFeedbacks() {
  const [feedbacks, setFeedbacks] = useState<FeedbackType[]>([]);
  const [curPage, setCurPage] = useState(1);
  const [totalPage, setTotalPage] = useState(1);

  const getFeedbacks = async (curPage: number) => {
    const res = await apiInstance.get(
      `/nlp/feedbacks?curPage=${curPage}&&limit=${PAGE_ITEMS_LIMIT}`
    );
    setFeedbacks(res.data.results);
    setTotalPage(Math.ceil(res.data.total / PAGE_ITEMS_LIMIT));
  };

  useEffect(() => {
    getFeedbacks(curPage);
  }, [curPage]);

  return (
    <div className="max-w-2xl mx-auto mt-6 p-4 bg-white shadow-lg rounded-2xl">
      <h2 className="text-xl font-bold mb-4 text-gray-800">Text and Scores</h2>
      <ul className="divide-y divide-gray-200">
        {feedbacks.map((item, index) => (
          <li
            key={index}
            className="flex justify-between items-center py-3 px-4 hover:bg-gray-50 rounded-lg"
          >
            <span className="text-gray-700 text-sm font-medium break-words max-w-md">
              {item.text}
            </span>
            <span
              className={`text-sm font-semibold px-3 py-1 rounded-lg ${
                item.score > 0
                  ? "bg-green-100 text-green-700"
                  : item.score < 0
                    ? "bg-yellow-100 text-black"
                    : "bg-red-100 text-red-700"
              }`}
            >
              {getSentimentFeedback(item.score)}
            </span>
          </li>
        ))}
      </ul>
      <Pagination
        curPage={curPage}
        totalPage={totalPage}
        onChangeCurPage={(e) => setCurPage(e)}
      />
    </div>
  );
}
