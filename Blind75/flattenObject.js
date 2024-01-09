let ob = {
  Company: "GeeksforGeeks",
  Address: "Noida",
  contact: +91 - 999999999,
  mentor: {
    HTML: "GFG",
    CSS: "GFG",
    JavaScript: "GFG",
    address: { city: ["jkhhjkkhjk"] },
  },
};

const flattenObj = (ob) => {
  let result = {};

  for (const i in ob) {
    if (typeof ob[i] === "object" && !Array.isArray(ob[i])) {
      const temp = flattenObj(ob[i]);
      for (const j in temp) {
        result[i + "_" + j] = temp[j];
      }
    } else {
      result[i] = ob[i];
    }
  }
  return result;
};

console.log(flattenObj(ob));
