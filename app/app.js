var userName = "Jay Dawson";

function initListeners() {
    $(".save").on("click", (e) => {
        $(".modal").css("display", "flex");
        console.log("Successfully Logged In..")
        openModal(`Successfully Logged In..`)
    })

    // $("#contact").on("click", (e) => {
    //     openModal(`Contact <span>US</span> !!!`)
    //     $(".save").css("display", "block");
    // })

    console.log("listen");
    $("#open").on("click", (e) => {
        console.log("open modal")
        openModal(`<span>Username: </span>
    <input type="text" id="username" name="username"><br><br>
    <span>Password: </span>
    <input type="password" id="password" name="password"><br><br>`)
    })

    $(".close-modal").on("click", (e) => {
        console.log("click modal")
        $(".modal").css("display", "none");
    })

}
function openModal(feedbackText, needSaveButton) {
    $(".feedback").html(feedbackText);
    if (!needSaveButton) {
        $(".save").css("display", "flex");
    }
    $(".modal").css("display", "flex");
}

// $(window).on("load", function () {
//     console.log("loaded");
//     // $(".modal").css("display", "none");
// });

$(document).ready(function () {
    initListeners();

});