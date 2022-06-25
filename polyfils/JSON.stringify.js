function stringify(data) {
  if (typeof data === "string") {
    return `"${data}"`;
  }
  if (typeof data === "function") {
    return undefined;
  }
  if (
    data === Infinity ||
    data === -Infinity ||
    data === null ||
    data === undefined ||
    typeof data === "symbol"
  ) {
    return "null";
  }
  if (typeof data === "number" || typeof data === "boolean") {
    return `${data}`;
  }

  if (data instanceof Date) {
    return `"${data.toISOString()}"`;
  }
  if (Array.isArray(data)) {
    const arr = data.map((el) => stringify(el));
    return `[${arr.join(",")}]`;
  }
  if (typeof data === "object") {
    const arr = Object.entries(data).reduce((acc, [key, value]) => {
      if (value === undefined) {
        return acc;
      }
      acc.push(`"${key}":${stringify(value)}`);
      return acc;
    }, []);
    return `{${arr.join(",")}}`;
  }
}
