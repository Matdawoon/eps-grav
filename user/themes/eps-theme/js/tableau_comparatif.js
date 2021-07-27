(function(){
	// FAQ Template - by CodyHouse.co
  var TableauComparatif = function(element) {
		this.element = element;
		this.info_sections = this.element.getElementsByClassName('info_section');
		this.carousel_section = this.element.getElementsByClassName('tableau_comparatif_carousel');
		//this.faqContainer = this.element.getElementsByClassName('cd-faq__items')[0];
		//this.faqsCategoriesContainer = this.element.getElementsByClassName('cd-faq__categories')[0];
		//this.faqsCategories = this.faqsCategoriesContainer.getElementsByClassName('cd-faq__category');
  	initTableauComparatifsEvents(this);
  };

  function initTableauComparatifsEvents(tableauComparatif) {
  	
    var mq = getMq(tableauComparatif);
    if(mq == 'mobile')  {mobileDisplay(tableauComparatif); $(tableauComparatif.element).addClass("mobile");}
    
    $(window).resize(function(){
        var mq = getMq(tableauComparatif);
        //console.log(!$(tableauComparatif.element).hasClass("mobile"));
        if( mq == 'mobile' && !$(tableauComparatif.element).hasClass("mobile") ){
            $(tableauComparatif.element).addClass("mobile");
            mobileDisplay(tableauComparatif);
            
            
        }else if(mq == "desktop"){
            desktopDisplay(tableauComparatif);
            $(tableauComparatif.element).removeClass("mobile");
        }
    });



  };


  function mobileDisplay(tableauComparatif){
    $(tableauComparatif.info_sections).css("display","none");
    var cards =$(tableauComparatif.carousel_section).find(".owl-item");
    //console.log(cards);
    $(cards).each(function(i){
       
        var cards_sections_list = $(cards).eq(i).find(".card-carousel ul");
        var infos_sections_list = $(tableauComparatif.info_sections).find("ul");
        //console.log(cards_sections_list);
        //console.log(infos_sections_list);
        //console.log("carte : " + i );
        cards_sections_list.each(function(index){

            $(this).children().each(function(index1){
                //console.log("this : "+ this+"carte : " + i + " ul : " + index + " element : " + index1 );
                //console.log(this);
                var info =$(infos_sections_list).eq(index).children().eq(index1);
                //console.log(info.eq(0));
                if($(this).is("hr")) {
                    $(this).replaceWith("<h2 class='hr'>"+$(info).eq(0).text()+"</h2>");
                }else{
                    //console.log($(this));
                    var p =$(this).find("p");
                    p.prepend("<span>"+$(info).eq(0).text()+"</span><br>");

                }
            });
        

        });
    });
   
    $('.tableau_comparatif_carousel .owl-carousel').on('changed.owl.carousel', function (e) {
      $(".tableau_comparatif .bouton_section a").removeClass("active");
      $(".tableau_comparatif .bouton_section a").eq(e.item.index).addClass("active");  
        console.log("event.item.index " +e.item.index);
    });


  }
  
  function desktopDisplay(tableauComparatif){
    $(tableauComparatif.info_sections).css("display","");
    $(tableauComparatif.carousel_section).find(".hr").replaceWith("<hr>");
    $(tableauComparatif.carousel_section).find("span").remove();
  }

  function getMq(tableauComparatif) {
		//get MQ value ('desktop' or 'mobile') 
		return window.getComputedStyle(tableauComparatif.element, '::before').getPropertyValue('content').replace(/'|"/g, "");
  };

  var tableauComparatif = document.getElementsByClassName('tableau_comparatif'),
  	tabArray = [];
  if(tableauComparatif.length > 0) {
		for(var i = 0; i < tableauComparatif.length; i++) {
			tabArray.push(new TableauComparatif(tableauComparatif[i])); 
		}
  };
})();