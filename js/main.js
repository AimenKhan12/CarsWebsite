(function ($) {
    "use strict";
    
    // Dropdown on mouse hover
    $(document).ready(function () {
        function toggleNavbarMethod() {
            if ($(window).width() > 992) {
                $('.navbar .dropdown').on('mouseover', function () {
                    $('.dropdown-toggle', this).trigger('click');
                }).on('mouseout', function () {
                    $('.dropdown-toggle', this).trigger('click').blur();
                });
            } else {
                $('.navbar .dropdown').off('mouseover').off('mouseout');
            }
        }
        toggleNavbarMethod();
        $(window).resize(toggleNavbarMethod);
    });


    // Date and time picker
    $('.date').datetimepicker({
        format: 'L'
    });
    $('.time').datetimepicker({
        format: 'LT'
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Team carousel
    $(".team-carousel, .related-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        center: true,
        margin: 30,
        dots: false,
        loop: true,
        nav : true,
        navText : [
            '<i class="fa fa-angle-left" aria-hidden="true"></i>',
            '<i class="fa fa-angle-right" aria-hidden="true"></i>'
        ],
        responsive: {
            0:{
                items:1
            },
            576:{
                items:1
            },
            768:{
                items:2
            },
            992:{
                items:3
            }
        }
    });


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1500,
        margin: 30,
        dots: true,
        loop: true,
        center: true,
        responsive: {
            0:{
                items:1
            },
            576:{
                items:1
            },
            768:{
                items:2
            },
            992:{
                items:3
            }
        }
    });

    document.addEventListener("DOMContentLoaded", () => {
        const rentButtons = document.querySelectorAll(".rent-btn");
        const topConfirmationPopup = document.getElementById("topConfirmationPopup");
        const confirmationMessage = document.getElementById("confirmationMessage");
        let selectedCar = "";

        // Show confirmation popup
        function showConfirmationPopup(message) {
            confirmationMessage.textContent = message;
            topConfirmationPopup.style.display = "block";

            // Hide the popup after 3.5 seconds
            setTimeout(() => {
                topConfirmationPopup.style.display = "none";
            }, 3500);
        }

        rentButtons.forEach((button) => {
            button.addEventListener("click", () => {
                selectedCar = button.getAttribute("data-car");
                showConfirmationPopup(`Thank you for renting the ${selectedCar}!`);
            });
        });
    });

    

    document.addEventListener("DOMContentLoaded", function () {
        // Select the input field and button
        const searchInput = document.getElementById("searchInput");
        const searchButton = document.getElementById("searchButton");

        // Add a click event listener to the button
        searchButton.addEventListener("click", function () {
            const query = searchInput.value.trim().toLowerCase(); // Normalize input

            if (!query) {
                // If the input is empty, alert the user
                alert("Please enter a search query.");
                return;
            }

            // Redirect based on specific car names
            if (query.includes("bmw")) {
                window.location.href = "booking.html";
            } else if (query.includes("mercedes")) {
                window.location.href = "booking2.html";
            } else if (query.includes("audi")) {
                window.location.href = "booking3.html";
            } else if (query.includes("audi q3")) {
                window.location.href = "booking4.html";
            } else if (query.includes("mercedes benz r3")) {
                window.location.href = "booking5.html";
            }

            else if (query.includes("audi r8")) {
                window.location.href = "booking6.html";
            }
            else if (query.includes("audi q2")) {
                window.location.href = "booking7.html";
            }
            else if (query.includes("dodge")) {
                window.location.href = "booking8.html";
            }
            else if (query.includes("van")) {
                window.location.href = "booking9.html";
            }
            else {
                // If no match, show an alert
                alert("No results found for your query.");
            }
        });
    });






    // Vendor carousel
    $('.vendor-carousel').owlCarousel({
        loop: true,
        margin: 30,
        dots: true,
        loop: true,
        center: true,
        autoplay: true,
        smartSpeed: 1000,
        responsive: {
            0:{
                items:2
            },
            576:{
                items:3
            },
            768:{
                items:4
            },
            992:{
                items:5
            },
            1200:{
                items:6
            }
        }
    });
    
})(jQuery);

