function cartFunctionality() {
    bindingCartList();

    $(".cartList-add").on("click", function () {
        var selectedID = $(this).closest(".card")[0].className.split("-")[1];
        var cartListIDs = localStorage.getItem("cartListIDs");

        if (!cartListIDs) {
            localStorage.setItem("cartListIDs", selectedID);
            incrementCartList();
            $("#cartlist-fill").addClass("d-block");
            $("#cartList-empty").addClass("d-none");
        } else {
            if (cartListIDs.indexOf(selectedID) == -1) {
                localStorage.setItem("cartListIDs", cartListIDs + "," + selectedID);
                incrementCartList();
            } else {
                alert("Product is already added in the cart list");
            }
        }
    });
}

function incrementCartList() {
    var cartListNumber = $("#cartList-number");
    var incrementedcartListNumber = parseInt(cartListNumber.html()) + 1;
    cartListNumber.html(incrementedcartListNumber);
}

function bindingCartList() {
    var cartListIDs = localStorage.getItem("cartListIDs");
    if (cartListIDs) {
        $("#cartList-number").html(cartListIDs.split(",").length);
        $("#cartlist-fill").addClass("d-block");
        $("#cartList-empty").addClass("d-none");
    }
}