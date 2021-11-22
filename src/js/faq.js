$(document).ready(function() {
    $("#add").click(function() {
        $("#bottombar").before("" +
            "<div class='element'" +
            "   <label>Question : " +
            "       <input disabled type='text' value='Question random'/>" +
            "   </label>" +
            "   <p class='answer'></p>" +
            "   <div class='tools'>" +
            "       <div class='edit' onclick='editElement(this)'></div>" +
            "       <div class='delete' onclick='deleteElement(this)'></div>" +
            "   </div>" +
            "</div>"
        );
        $("#count").html($(".element").length);
    }).hover(function() {
        $(this).css("background-color", "#7CFC00");
        $(this).css("transition-duration", ".5s");
    }).mouseout(function() {
        $(this).css("background-color", "#FFFF00");
        $(this).css("transition-duration", ".5s");
    }).click(function() {
        $(this).css("background-color", "#FF8C00");
        $(this).css("transition-duration", ".5s");
    });
});

function editElement(field) {
    let parent = $(field).parent("div").parent("div");
    let input = parent.children("input");
    let output = parent.children(".answer");

    if(input.attr("disabled")) {
        input.attr("disabled", false);
        input.focus();
    } else {
        input.attr("disabled", true);
        input.blur();

        let answer = prompt("Quelle est la réponse à \n" + input.value);
        output.html(answer);
    }
}

function deleteElement(field) {
    $(field).parent("div").parent("div").remove();
    $("#count").html($(".element").length);
}