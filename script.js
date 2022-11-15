$(document).ready(function(){
    $("select").change(function(){
        $(this).find("option:selected").each(function(){
            var optionValue = $(this).attr("value");
            console.log(optionValue);
            if(optionValue){
                $(".animate").not("." + optionValue).hide();
                $("." + optionValue).show();
            } else{
                $(".animate").hide();
            }
        });
    }).change();
});
 
