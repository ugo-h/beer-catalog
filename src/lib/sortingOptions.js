const options = {
    string: (a, b) => (a.toUpperCase() > b.toUpperCase() ? 1 : -1),
    number: (a, b) => (a - b)
};

export const setSortBy = (prop, type = 'string') => (isAccending) => (
    isAccending
        ? (a, b) => options[type](a[prop], b[prop])
        : (a, b) => options[type](b[prop], a[prop])
);

export const sortByNameOption = setSortBy('name', 'string');
