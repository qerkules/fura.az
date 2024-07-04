'use client'
import { useEffect } from 'react';

const TabList = () => {
    useEffect(() => {
        const onClickViewListingType = () => {
            if (document.querySelector('.tf-my-listing-search')) {
                document.querySelector('.btn-display-listing-grid').addEventListener('click', function (event) {
                    event.preventDefault();
                    localStorage.setItem('VIEW_LISTING_TYPE', 'grid');
                    checkViewListing();
                });
                document.querySelector('.btn-display-listing-list').addEventListener('click', function (event) {
                    event.preventDefault();
                    localStorage.setItem('VIEW_LISTING_TYPE', 'list');
                    checkViewListing();
                });
            }
        };

        const checkViewListing = () => {
            if (document.querySelector('.tf-my-listing-search')) {
                const type = localStorage.getItem('VIEW_LISTING_TYPE');
                switch (type) {
                    case 'grid':
                        document.querySelector('.listing-list-car-wrap .listing-list-car-grid').classList.remove('listing-list-car-list');
                        document.querySelector('.btn-display-listing-grid').classList.add('active');
                        document.querySelector('.btn-display-listing-list').classList.remove('active');
                        break;
                    case 'list':
                        document.querySelector('.listing-list-car-wrap .listing-list-car-grid').classList.add('listing-list-car-list');
                        document.querySelector('.btn-display-listing-list').classList.add('active');
                        document.querySelector('.btn-display-listing-grid').classList.remove('active');
                        break;
                    default:
                        break;
                }
            }
        };

        onClickViewListingType();
    }, []);

    return null
};

export default TabList;
