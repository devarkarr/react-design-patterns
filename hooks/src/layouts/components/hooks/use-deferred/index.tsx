import { useState, useDeferredValue, useEffect } from "react";

function SlowResults({ query }: { query: string }) {
  const [results, setResults] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (query.trim() === "") {
      setResults([]);
      return;
    }

    setIsLoading(true);

    // Fake API call with delay
    const timer = setTimeout(() => {
      const fakeResults = [
        `${query} result 1`,
        `${query} result 2`,
        `${query} result 3`,
        `${query} result 4`,
        `${query} result 5`,
      ];
      setResults(fakeResults);
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, [query]);

  return (
    <div className="mt-4">
      {isLoading ? (
        <div className="flex items-center space-x-2 text-gray-600">
          <svg
            className="animate-spin h-5 w-5 text-blue-500"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            ></circle>
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            ></path>
          </svg>
          <span>"{query}" အတွက် ရလဒ်များရှာဖွေနေပါသည်...</span>
        </div>
      ) : (
        <ul className="divide-y divide-gray-200">
          {results.map((result, index) => (
            <li
              key={index}
              className="py-3 px-2 hover:bg-gray-50 transition-colors"
            >
              <div className="flex items-center">
                <svg
                  className="h-5 w-5 text-green-500 mr-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                {result}
              </div>
            </li>
          ))}
        </ul>
      )}

      {!isLoading && results.length === 0 && query && (
        <p className="text-gray-500 italic">
          "{query}" နှင့်သက်ဆိုင်သော ရလဒ်များမတွေ့ရှိပါ
        </p>
      )}
    </div>
  );
}

export default function UseDeferred() {
  const [query, setQuery] = useState("");
  const deferredQuery = useDeferredValue(query);

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md mt-10">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">
        🔍 ပစ္စည်းရှာဖွေရန်
      </h2>

      <div className="relative">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="ဤနေရာတွင်ရှာဖွေရန်..."
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
        />
        {query && (
          <button
            onClick={() => setQuery("")}
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
          >
            <svg
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        )}
      </div>

      <div className="mt-6 p-4 border border-gray-200 rounded-lg min-h-40">
        <h3 className="font-medium text-gray-700 mb-2">ရှာဖွေမှုရလဒ်များ:</h3>
        <SlowResults query={deferredQuery} />
      </div>

      <p className="mt-4 text-sm text-gray-500">
        မှတ်ချက်: ရလဒ်များကို နည်းနည်းနောက်ကျမှပြသပေးမည် (useDeferredValue ဖြင့်
        optimize လုပ်ထားသည်)
      </p>
    </div>
  );
}
