jQuery(function() { 
    $("#footer").load("footer.html");
    $("#navbar").load("navbar.html");

    setTimeout(() => {
        wishListFunctionality();
        cartFunctionality();
    }, 500);
})