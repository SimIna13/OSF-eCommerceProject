jQuery(function () {
    $('#slider-intro').owlCarousel({
        items: 1,
        loop: false,
        dots: true,
    });

    $("#featured-products").load("featured-products.html", function () {
        $('#slider-featured-products').owlCarousel({
            items: 4,
            loop: false,
            dots: false,
            nav: true
        });
    });


    $("#footer").load("footer.html");
    $("#navbar").load("navbar.html");
    $("#informations").load("informations.html");
    $("#popular-items").load("popular-items.html", function () {
        $(".card-2 img").on("click", function () {
            window.location.href = "product-detailed.html";
        });
        $(".product-buy").on("click", function () {
            var cartListIDs = localStorage.getItem("cartListIDs");
            if (cartListIDs.indexOf("2") == -1) {
                incrementCartList();
                localStorage.setItem("cartListIDs", cartListIDs + "," + 2);
            } else {
                alert("Product is already added in the cart list");
            }
        });
        $("#load-more-popular-items").on("click", function () {
            $.ajax({
                url: "../assets/JSON/popular-items.json",
                dataType: "json",
                success: function (result) {
                    var output = "";

                    for (var i in result) {
                        var cardNumber = 8 + parseInt(i);
                        output += ' <div class="col-md-3"><div class="card card-' + cardNumber + '"> <img class="card-img-top" src="'
                            + result[i].image_url + '"   alt=""> <div class="image-overlay"> <div class="circles"> <div class="circle cartList-add"><img src="assets/images/Product/plus.png" /></div> <div class="circle wishist-add"><img src="assets/images/Product/heart.png" /></div>  </div>  </div> <div class="card-body text-center">  <p class="card-text mt-3">'
                            + result[i].title + '</p> <p class="card-text">&dollar; '
                            + result[i].price + ' </p></div></div></div> ';
                    }

                    $("#content-more-popular-items").html(output);
                    $("#load-more-popular-items").addClass("d-none");

                    wishListFunctionality();
                    cartFunctionality();
                }
            });
        });

        wishListFunctionality();
        cartFunctionality();
    });

    $("#first-button,#second-button,#third-button").on("click", function () {
        window.location.href = "services.html";
    });

    $("#facebook-button").on("click", function () {
        window.location.href = "http://facebook.com";
    });

    if (localStorage.getItem("cookieSeen") != "shown") {
        $(".cookie-banner").delay(50).fadeIn();
        $(".cookie-overlay").removeClass("d-none");
        localStorage.setItem("cookieSeen", "shown");
    };
    $(".cookie-banner i, .cookie-banner button").on("click", function () {
        $(".cookie-banner").fadeOut();
        $(".cookie-overlay").addClass("d-none");
    });
});
