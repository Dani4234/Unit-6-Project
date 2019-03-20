$("button").click(function(){
    var name=$(".name").val();

    $(".results").append("In the year 2050 " + name);
});

$("button").click(function(){
    var have=parseInt($(".have").val());
    $(".results").append(" will have $" + (1612 * have));
});
    
    $("button").click(function(){
    var earn=parseInt($(".earn").val());
    $(".results").append(" and will earn  $"+(1612* earn));
});