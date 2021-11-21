$(document).ready(function() {
    $("#add").click(function() {
        let count = 0;
        
        for(let i in $(".element").length) {
            count++;
        }
        $("#add").before("" +
            "<div class='element' id='e'" +
            "   <label>Question :" +
            "       <input disabled type='text' value='Question random'/>" +
            "   </label>" +
            "   <p class='answer'>Réponse</p>" +
            "   <div class='edit'></div>" +
            "   <div class='delete'></div>" +
            "</div>"
        );
        $("#e").attr("e", "e" + count);
    }).hover(function() {
        $(this).css("background-color", "#00FA9AFF");
        $(this).css("transition-duration", ".5s");
    }).mouseout(function() {
        $(this).css("background-color", "#FFFF00");
        $(this).css("transition-duration", ".5s");
    });

    $(".edit").click(function() {
        $(this).parent("div");
    });

    $(".delete").click(function() {
        $(this).parent("div").remove();
    });
});