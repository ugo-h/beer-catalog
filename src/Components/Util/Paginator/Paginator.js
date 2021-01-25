/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import './Paginator.css';
import { scrollToTop } from '../../../lib/lib';

const Paginator = (props) => {
    const countPages = () => {
        const pagesContainer = [];
        for (let i = 0; i < props.pages; i += 1) {
            const pageIndex = i + 1;
            const active = pageIndex === props.currentPage ? ' active' : '';
            pagesContainer.push(
                <li key={pageIndex} className="Paginator__page">
                    <button className={`Paginator__btn${active}`} type="button">{pageIndex}</button>
                </li>
            );
        }
        return pagesContainer;
    };

    const setPage = ({ target }) => {
        if (!target.type === 'BUTTON') return;
        const page = Number(target.textContent.trim());
        props.setPage(page);
        scrollToTop();
    };

    const nextPage = () => {
        const page = props.currentPage + 1;
        props.setPage(page);
        scrollToTop();
    };

    const prevPage = () => {
        const page = props.currentPage - 1;
        props.setPage(page);
        scrollToTop();
    };

    const hasNext = props.currentPage < props.pages;
    const hasPrev = props.currentPage > 1;

    return (
        props.pages > 1
            ? (
                <div className="Paginator">
                    { hasPrev ? <button className="Paginator__btn" type="button" onClick={prevPage}>Prev</button> : ''}
                    <ul onClick={setPage} className="Paginator__pages list--horizontal">
                        {countPages()}
                    </ul>
                    { hasNext ? <button className="Paginator__btn" type="button" onClick={nextPage}>Next</button> : '' }
                </div>
            )
            : ''
    );
};

export default Paginator;
