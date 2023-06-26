import { useState, useEffect } from 'react';

const Quote = () => {
  const [quote, setQuote] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    fetch('https://api.api-ninjas.com/v1/quotes?category=dreams', {
      headers: {
        'X-Api-Key': '9oR1JCo4Y2LaZ84/K9swAw==mQ8BHlzVb2WtCBqc',
      },
    }).then((response) => response.json()).then((data) => {
      const body = `${data[0].quote}`;
      setQuote(body);
      setLoading(false);
      setError(null);
    }).catch((e) => {
      setError(e.message);
      setLoading(false);
    });
  }, []);

  return (
    <div className="Quote">
      {error && <p>{error}</p>}
      {loading && <p>Loading...</p>}
      {quote && <p>{quote}</p>}
    </div>
  );
};

export default Quote;
