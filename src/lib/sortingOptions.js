export const setSortBy = (prop) => (callback) => (a, b) => callback(a[prop], b[prop]);

export const sortByNameOption = setSortBy('name')((a, b) => (a.toUpperCase() > b.toUpperCase() ? 1 : -1));
