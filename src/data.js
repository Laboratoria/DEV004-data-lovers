export const lol = (data)

const newArray = data;
  if (sortBy === 'name' && sortOrder === 'ascending') {
    newArray.sort((a, b) => ((a.name > b.name) ? 1 : -1));
  }
  if (sortBy === 'name' && sortOrder === 'descending') {
    newArray.sort((a, b) => ((a.name < b.name) ? 1 : -1));
  }
  return newArray;
