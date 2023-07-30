jQuery(function () {
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
        $("#load-more-popular-items").addClass("d-none");
        $("#second-row-popular-items").addClass("d-none");

        wishListFunctionality();
        cartFunctionality();
    });

    wishListFunctionality();
    cartFunctionality();

    $("#image-1").on("click", function () {
        changePictureActive(1);
    });

    $("#image-2").on("click", function () {
        changePictureActive(2);
    });

    $("#image-3").on("click", function () {
        changePictureActive(3);
    });

    $("#image-4").on("click", function () {
        changePictureActive(4);
    });

    $("#read-more").on("click", function () {
        var complete = $(".complete");
        if (complete.hasClass("d-block")) {
            $(this).text("Read more");
            complete.addClass("d-none");
            complete.removeClass("d-block");
        } else {
            $(this).text("Read less");
            complete.addClass("d-block");
            complete.removeClass("d-none");
        }
    });

    $('select').selectpicker();

    $("#image-big").on("click", function () {
        $.fancybox.open({
            src: $("#image-big").attr("src")
        });
    });

    $("#cart-add-single-product").on("click", function () {
        var cartListIDs = localStorage.getItem("cartListIDs");
        if (cartListIDs.indexOf("2") == -1) {
            incrementCartList();
            localStorage.setItem("cartListIDs", cartListIDs + "," + 2);
        } else {
            alert("Product is already added in the cart list");
        }
    });

});

function changePictureActive(imageNumber) {
    // select all the images
    var othersImages = $(".other-images")[0].children;

    // remove active class from the one that had it previous
    for (const image of othersImages) {
        if (image.classList.contains("active")) {
            image.classList.remove("active");
        }
    }

    // add class to selected image
    var selectedImage = "#image-" + imageNumber;
    $(selectedImage).addClass("active");

    var newImageLink = "assets/images/Product-Detailed/Photo" + imageNumber + ".jpg";
    $("#image-big").attr("src", newImageLink);
}