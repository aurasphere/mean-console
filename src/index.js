import insults from "./insults.json" assert { type: "json" };

if (console) {
  const oldError = console.error;
  console.error = (message, ...params) => {
    const randomInsultIndex = Math.floor(Math.random() * insults.length);
    const insult = insults[randomInsultIndex];
    oldError(insult);
    oldError(message, ...params);
  };
}

export default {};
