


function modalCreation(id){
    console.log("id " + id);
        
    // Get the modal
    //var modal = document.getElementById("modal-"+id);
    var modal=$("#modal-"+id);
    var modal_bg=$("#modal-"+id+" .modal-background");
    // Get the button that opens the modal
    var btn = document.getElementById(id);

    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];
    console.log("modal" + modal);
    console.log("btn" + btn);

    // When the user clicks on the button, open the modal
    btn.onclick = function() {
        modal.addClass('active');        
        console.log("active" );
    }

    // When the user clicks on <span> (x), close the modal
    span.onclick = function() {
        modal.animate({top: "-300px", opacity: "0"}, "slow",function(){
            modal.removeClass("active");
            modal.removeAttr("style")
        });
        //Util.removeClass(modal,"active");
    }

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
        if (event.target == modal[0]) {
            modal.animate({top: "-300px", opacity: "0"}, "slow",function(){
                modal.removeClass("active");
                modal.removeAttr("style")
            });
        }
    }
    btn.click();
}