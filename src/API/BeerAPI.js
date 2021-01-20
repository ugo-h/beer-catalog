import { fetchGetJson } from '../lib/lib';

export default () => {
    const url = 'https://api.punkapi.com/v2/beers';

    return {
        getBeerPage(page) {
            return fetchGetJson(url, {
                page,
                per_page: 20
            });
        }
    };
};
