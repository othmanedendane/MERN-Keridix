import $ from 'jquery';

$(function(){
    $(document).ready(function(){
        $("#album").hide();
    
       $("#album").show(1000);

       $("#pic1").css('-webkit-filter',"sepia(100%)").css('filter','sepia(100%)');

       $("#pic2").css('-webkit-filter',"sepia(100%)").css('filter','sepia(100%)');
        });
    


    $("#card1").on({
        mouseenter : function(){
            
            $("#pic1").css('-webkit-transform',"scale(1)").css('transform','scale(1)').css('-webkit-filter',"sepia(0)").css('filter','sepia(0)');
        },
        mouseleave : function(){
            $("#pic1").css('-webkit-filter',"sepia(100%)").css('filter','sepia(100%)').css('-webkit-transition',".3s ease-in-out").css('transition','.3s ease-in-out');
        }
    });

    $("#card2").on({
        mouseenter : function(){
            
            $("#pic2").css('-webkit-transform',"scale(1)").css('transform','scale(1)').css('-webkit-filter',"sepia(0)").css('filter','sepia(0)');
        },
        mouseleave : function(){
            $("#pic2").css('-webkit-filter',"sepia(100%)").css('filter','sepia(100%)').css('-webkit-transition',".3s ease-in-out").css('transition','.3s ease-in-out');
        }
    });


});