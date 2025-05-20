export type DemoSearch = {
  query: string;
  aliases: string[];
  type: 'ticker' | 'term' | 'question';
  size: 'small' | 'medium' | 'large';
  answer: string;
};

export const demoSearches: DemoSearch[] = [
  // Ticker: Apple/AAPL
  {
    query: "AAPL",
    aliases: ["aapl", "apple"],
    type: "ticker",
    size: "small",
    answer: "Apple Inc. (AAPL) is trading at $175.23 (+1.2%)",
  },
  {
    query: "Apple stock price",
    aliases: ["apple price", "aapl price", "apple stock"],
    type: "ticker",
    size: "medium",
    answer: "Apple Inc. (AAPL) is currently trading at $175.23, up 1.2% today. The company remains a leader in consumer electronics and services.",
  },
  {
    query: "What was Apple's closing price last year?",
    aliases: ["apple closing price last year", "aapl last year close", "apple stock last year"],
    type: "ticker",
    size: "large",
    answer: "Apple Inc. (AAPL) closed at $157.65 on December 31st last year. This reflects a strong year for the company, driven by robust iPhone sales and growth in services.",
  },

  // Term: RMD
  {
    query: "RMD",
    aliases: ["rmd", "required minimum distribution"],
    type: "term",
    size: "small",
    answer: "RMD stands for Required Minimum Distribution, a mandatory withdrawal from retirement accounts.",
  },
  {
    query: "What is an RMD",
    aliases: ["what is rmd", "explain rmd", "rmd meaning"],
    type: "term",
    size: "medium",
    answer: "An RMD (Required Minimum Distribution) is the minimum amount you must withdraw from your retirement accounts each year after reaching a certain age.",
  },
  {
    query: "What was my RMD from last year?",
    aliases: ["my rmd last year", "rmd last year amount", "required minimum distribution last year"],
    type: "term",
    size: "large",
    answer: "Your RMD for last year depends on your account balance and age. Please consult your financial records or advisor for the exact amount.",
  },

  // Question: Placeholder (to be filled in later)
  // {
  //   query: "",
  //   aliases: [],
  //   type: "question",
  //   size: "small",
  //   answer: "",
  // },
]; 