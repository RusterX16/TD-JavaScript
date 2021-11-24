$(document).ready(function() {
    $("#add").click(function() {
        let count = $(".element").length;

        $("#bottombar").before("" +
            "<div class='element'>" +
            "   <label id='tempLabel'>" +
            "       <input disabled type='text' placeholder='Posez votre question' <!--onblur='editElement(this, true)-->'/>" +
            "   </label>" +
            "   <p class='answer'></p>" +
            "   <div class='tools'>" +
            "       <div class='edit' onclick='editElement(this, false)'>" +
            "           <img width='auto' height='16px' src='../../res/img/edit.png' alt='edit'/>" +
            "       </div>" +
            "       <div class='delete' onclick='deleteElement(this)'>" +
            "           <img width='auto' height='16px' src='../../res/img/delete.png' alt='remove'/>" +
            "       </div>" +
            "   </div>" +
            "</div>"
        )
        $("#tempLabel").prepend("Question " + (count + 1) + " : ⠀").removeAttr("id");
        $("#count").html(count + 1);
    }).hover(function() {
        $(this)
            .css("background-color", "#7CFC00")
            .css("transition-duration", ".5s");
    }).mouseout(function() {
        $(this)
            .css("background-color", "#FFFF00")
            .css("transition-duration", ".5s");
    }).click(function() {
        $(this)
            .css("background-color", "#FF8C00")
            .css("transition-duration", ".5s");
    });
}).keyup(function(event) {
    if(event.which === 13) {

    }
});

function editElement(field, onBlur) {
    let parent = $(field).parent(onBlur ? "label" : ".tools").parent(".element");
    let input = parent.children("label").children("input");
    let output = parent.children(".answer");

    if(input.attr("disabled")) {
        input.attr("disabled", false).focus();
    } else {
        input.attr("disabled", true).blur();
        output.html(prompt("Insérez la réponse : \n"));
    }
}

function deleteElement(field) {
    $(field).parent("div").parent("div").remove();
    $("#count").html($(".element").length);
}