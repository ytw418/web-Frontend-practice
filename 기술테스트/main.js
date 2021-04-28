$(function(){
    setTimeout(function(){
        var sc_height = $(document).scrollTop();
        var quick = $('#quick');
        var break_point1 = $('#sec1').offset().top;
        var break_point2 = $('#footer').offset().top;
        var footer_height = $('#footer').height();
        var se2_height = $('#sec1').height();
        //console.log(break_point1);
        //console.log(break_point2);
        //console.log(footer_height);
        //console.log(se2_height);
        console.log(break_point2-footer_height);
        console.log(se2_height-break_point1);
        if(sc_height<break_point1){
            $(quick).hide();
        }
        $(window).scroll(function(){
            var sc_height = $(document).scrollTop();
            
            //console.log(sc_height)
            if(sc_height>se2_height-break_point1){
                $(quick).stop();
                $(quick).show();
            }
            if(sc_height<se2_height-break_point1){
                $(quick).stop();
                $(quick).hide();
            }
            if(sc_height>break_point2-footer_height){
                $(quick).stop();
                $(quick).hide();
            }
        });
        $(window).resize(function(){
            sc_height = $(document).scrollTop();
            break_point1 = $('#sec1').offset().top;
            break_point2 = $('#footer').offset().top;
            footer_height = $('#footer').height();
            se2_height = $('#sec1').height();
        })
    },500);
});