$(document).ready(function(){
    // Open the contact form modal
    $('#contactUsBtn').click(function() {
        $('#contactFormModal').show();
    });

    // Close the modal
    $('.close').click(function() {
        $('#contactFormModal').hide();
    });

    // Handle form submission
    $('#contactForm').submit(function(event) {
        event.preventDefault();
        $.ajax({
            url: 'https://getform.io/f/zaxdeopa',
            method: 'POST',
            data: $(this).serialize(),
            success: function(response) {
                alert('Form submitted successfully!');
                $('#contactFormModal').hide();
            },
            error: function(error) {
                alert('An error occurred. Please try again.');
            }
        });
    });
});
$(document).ready(function() {
    $('.project-content').click(function() {
        // Remove active class from all project content
        $('.project-content').removeClass('active');
        // Add active class to the clicked content
        $(this).addClass('active');
        // Change the image based on the data-image attribute of the clicked content
        var newImage = $(this).data('image');
        $('#projectImage').attr('src', newImage);
    });
});
let slideIndex = 0;
    const slides = document.querySelector('.slides');
    const dots = document.querySelectorAll('.dot');

    function showSlides() {
        if (slideIndex >= dots.length) { slideIndex = 0 }
        if (slideIndex < 0) { slideIndex = dots.length - 1 }
        slides.style.transform = `translateX(${-slideIndex * 100}%)`;
        dots.forEach(dot => dot.classList.remove('active'));
        dots[slideIndex].classList.add('active');
    }

    function currentSlide(n) {
        slideIndex = n;
        showSlides();
    }

    setInterval(() => {
        slideIndex++;
        showSlides();
    }, 3000); // Change slide every 3 seconds

    showSlides(); // Initialize slides
