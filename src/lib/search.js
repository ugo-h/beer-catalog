const compareSringWithQuery = (str, query) => {
    const formattedStr = str
        .toLowerCase()
        .trim()
        .split('')
        .slice(0, query.length)
        .join('');
    const formattedQuery = query.toLowerCase();
    return formattedStr === formattedQuery;
};

export const searchBy = (prop) => (array, query) => (
    array.filter((item) => {
        if (item[prop] === query) return item;
        const components = item[prop].split(' ');
        return components.find((component) => (
            compareSringWithQuery(component, query)
        ));
    })
);
