var burger = document.getElementsByClassName('navbar-burger')[0];
    burger.addEventListener('click', (e) => {
        var navbar = document.getElementById(burger.dataset.target);
        navbar.classList.toggle('is-active');
        burger.classList.toggle('is-active');
    });

    var slideIndex = 1;
    showSlides(slideIndex);

    function plusSlides(n) {
        showSlides(slideIndex += n);
    }

    function currentSlide(n) {
        showSlides(slideIndex = n);
    }

    function showSlides(n) {
        var i;
        var slides = document.getElementsByClassName("mySlides");
        var dots = document.getElementsByClassName("dot");
        if (n > slides.length) { slideIndex = 1 }
        if (n < 1) { slideIndex = slides.length }
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        for (i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" active", "");
        }
        slides[slideIndex - 1].style.display = "block";
        dots[slideIndex - 1].className += " active";
    }

    document. getElementById("btn"). onclick = function () {
        location. href = "donate.html";
        };

        var pay = document.getElementById("btn1");

        var amount = document.getElementById("amount");
        var username = document.getElementById("username");
    
        pay.addEventListener("click", function (e) {
    
            if (parseInt(amount.value) > 0 && username.value !== "" && username.value !== " ") {
    
                var options = {
                    "key": "rzp_test_kntBNZh5gLcJsK", // Enter the Key ID generated from the Dashboard
                    "amount": parseInt(amount.value) * 100, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
                    "currency": "INR",
                    "name": "Trees Nation",
                    "description": "Test Transaction",
                    "handler": function (response) {
                        alert("Donation Done Successfully");
                    },
    
                };
                var rzp1 = new Razorpay(options);
                rzp1.open();
                e.preventDefault();
    
                rzp1.on('payment.failed', function (response) {
                    alert("Oops!!  Transaction Failed!!");
                });
    
                amount.value = "";
                username.value = "";
    
    
            }
            else {
                alert("Invalid Input!!!!");
            }
    
        });
    
        var clear = document.getElementById("btn2");
    
        clear.addEventListener("click", function (e) {
            amount.value = "";
            username.value = "";
        });