export const sortAscending = (data, setData) => {
  const sorted = [...data].sort((a, b) => {
    return a.name.localeCompare(b.name) || a.title.localeCompare(b.title);
  });
  setData(sorted);
};

export const sortDescending = (data, setData) => {
  const sorted = [...data].sort((a, b) => {
    return b.name.localeCompare(a.name) || b.title.localeCompare(a.title);
  });
  setData(sorted);
};
