function wishListFunctionality() {
    bindingWishlist();

    $(".wishist-add").on("click", function () {
        var selectedID = $(this).closest(".card")[0].className.split("-")[1];
        var wishlistIDs = localStorage.getItem("wishlistIDs");

        if (!wishlistIDs) {
            localStorage.setItem("wishlistIDs", selectedID);
            incrementWishlist();
            $("#wishlist-fill").addClass("d-block");
            $("#wishlist-empty").addClass("d-none");
        } else {
            if (wishlistIDs.indexOf(selectedID) == -1) {
                localStorage.setItem("wishlistIDs", wishlistIDs + "," + selectedID);
                incrementWishlist();
            } else {
                alert("Product is already added in the wishlist");
            }
        }
    });
}

function incrementWishlist() {
    var wishlistNumber = $("#wishlist-number");
    var incrementedWishlistNumber = parseInt(wishlistNumber.html()) + 1;
    wishlistNumber.html(incrementedWishlistNumber);
}

function bindingWishlist() {
    var wishlistIDs = localStorage.getItem("wishlistIDs");
    if (wishlistIDs) {
        $("#wishlist-number").html(wishlistIDs.split(",").length);
        $("#wishlist-fill").addClass("d-block");
        $("#wishlist-empty").addClass("d-none");
    }
}
