(function(){
	// FAQ Template - by CodyHouse.co
  var TableauComparatif = function(element) {
		this.element = element;
		this.info_sections = this.element.getElementsByClassName('info_section');
		this.carousel_section = this.element.getElementsByClassName('tableau_comparatif_carousel owl-wrapper');
		//this.faqContainer = this.element.getElementsByClassName('cd-faq__items')[0];
		//this.faqsCategoriesContainer = this.element.getElementsByClassName('cd-faq__categories')[0];
		//this.faqsCategories = this.faqsCategoriesContainer.getElementsByClassName('cd-faq__category');
  	initTableauComparatifsEvents(this);
  };

  function initTableauComparatifsEvents(tableauComparatif) {
  	
    var mq = getMq(tableauComparatif);
    console.log(mq);
    $(window).resize(function(){
        var mq = getMq(tableauComparatif);
        console.log(mq);
        if( mq == 'mobile'){
            mobileDisplay(tableauComparatif);
            
            
        }else if(mq == "desktop"){
            desktopDisplay(tableauComparatif);
        }
    });

  };


  function mobileDisplay(tableauComparatif){
    $(tableauComparatif.info_sections).css("display","none");
  }
  function desktopDisplay(tableauComparatif){
    $(tableauComparatif.info_sections).css("display","");
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