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
                    alert("Transaction Failed!!");
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