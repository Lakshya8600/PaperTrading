import React from "react";
import { useLocalStorage } from "usehooks-ts";

const History = () => {
  const [history, setHistory] = useLocalStorage("history", []);

  return (
    <div>
      <h3 className="text-xl font-semibold mb-3">Trade History</h3>
      {history.length > 0 ? (
        history.map((trade, index) => (
          <div key={index} className="flex justify-between items-center mb-4">
            <div>
              <p>{trade.stock}</p>
              <p>Quantity: {trade.quantity}</p>
              <p>Price: ₹{trade.price}</p>
              <p>Date: {trade.date}</p>
              <p>Action: {trade.action}</p>
            </div>
          </div>
        ))
      ) : (
        <p>No trades completed yet.</p>
      )}
    </div>
  );
};

export default History;
