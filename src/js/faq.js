let count = 1;
let current = 0;
let isEditing = [
    [0, false],
];

$(document).ready(function() {

    $("#add").click(function() {
        if(count === 14) {
            return;
        }
        $("#e" + (count - 1)).after("" +
            "<div id=\"e" + (count + 1) + "\" class=\"element\">\n" +
            "        <label>Question :\n" +
            "            <input value=\"ergettrhbsqemlkj\" type=\"text\" disabled/>\n" +
            "        </label>\n" +
            "        <p class=\"answer\">\n" +
            "            ergerihol\n" +
            "        </p>\n" +
            "        <div class=\"edit\"></div>\n" +
            "        <div class=\"delete\"></div>\n" +
            "    </div>");
        count++;
        isEditing.push([count, false]);

        $(".delete").click(function() {
            $("#e0").remove();
        });
    }).hover(function() {
        $(this).css("background-color", "#00FA9AFF");
        $(this).css("transition-duration", ".5s");
    }).mouseout(function() {
        $(this).css("background-color", "#FF8C00FF");
        $(this).css("transition-duration", ".5s");
    });

    $(".edit").click(function() {
        current = $(".edit").attr("id");
        console.log(isEditing)
        console.log(current);
        let id = $("#e" + current + " input");
        isEditing[current][1] = !isEditing[current][1];

        if(isEditing[current][1]) {
            id.prop("disabled", isEditing[current][1]).blur();
        } else {
            id.prop("disabled", isEditing[current][1]).focus();
        }
    });

    $(".delete").click(function() {
        $("#e0").remove();
    });
});