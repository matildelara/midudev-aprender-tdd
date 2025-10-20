export const canReconfigure = (from, to) => {
  if (typeof from !== "string") throw new Error("from must be a string");
  if (typeof to !== "string") throw new Error("to must be a string");
  if (from.length !== to.length) return false;

  const map = {};
  const used = new Set();

  for (let i = 0; i < from.length; i++) {
    const f = from[i];
    const t = to[i];

    if (map[f]) {
      if (map[f] !== t) return false; // conflicto en mapeo
    } else {
      if (used.has(t)) return false; // otra letra ya mapeada aquí
      map[f] = t;
      used.add(t);
    }
  }

  return true;
};
