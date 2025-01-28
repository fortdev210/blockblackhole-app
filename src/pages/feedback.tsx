import { useState } from "react";
import Button from "components/atoms/button";
import apiInstance from "api/axios";

export default function Feedback() {
  const [feedback, setFeedback] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    try {
      await apiInstance.post(`/nlp/feedbacks`, { text: feedback });
      setFeedback("");
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  };

  return (
    <section className="h-screen">
      <div className="h-full p-10">
        <div className="m-auto w-96">
          <p className="text-2xl mb-2">Submit your feedback</p>
          <div className="flex flex-col flex-center justify-center m-auto w-[500px]">
            <textarea
              value={feedback}
              onChange={(e) => setFeedback(e.target.value)}
              placeholder="write your feedback"
              className="rounded-md mb-3 p-1"
            />
            <Button loading={loading} onClick={handleSubmit}>
              Submit
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
