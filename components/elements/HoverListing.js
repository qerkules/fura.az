'use client'
import { useEffect } from 'react'


const HoverListing = () => {
    useEffect(() => {
        // Function to handle hover effect on thumbnail gallery
        const hoverThumbGallery = () => {
            const elements = document.querySelectorAll('.hover-listing-image')
            elements.forEach((element) => {
                const listingItems = element.querySelectorAll('.listing-item')
                const blItems = element.querySelectorAll('.bl-item')

                // Set the first listing item and bl item as active by default
                listingItems[0].classList.add('active')
                blItems[0].classList.add('active')

                listingItems.forEach((listingItem) => {
                    // Add event listener for mouseenter event
                    listingItem.addEventListener('mouseenter', function () {
                        const index = Array.from(listingItems).indexOf(listingItem)
                        // Remove active class from current active listing item and bl item
                        element.querySelector('.listing-item.active').classList.remove('active')
                        // Add active class to the current listing item and corresponding bl item
                        listingItem.classList.add('active')
                        element.querySelector('.bl-item.active').classList.remove('active')
                        blItems[index].classList.add('active')
                    })

                    // Add event listener for mouseleave event
                    listingItem.addEventListener('mouseleave', function () {
                        // Remove active class from current listing item and corresponding bl item
                        listingItem.classList.remove('active')
                        element.querySelector('.bl-item.active').classList.remove('active')
                        // Set the first listing item and bl item as active again
                        listingItems[0].classList.add('active')
                        blItems[0].classList.add('active')
                    })
                })
            })
        }

        // Call the hoverThumbGallery function when the component mounts
        hoverThumbGallery()
    }, [])

    return null
}

export default HoverListing