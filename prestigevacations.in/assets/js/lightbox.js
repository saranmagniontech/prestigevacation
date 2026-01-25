$( document ).ready(function() {
  var imageSources = [ 'pv01.jpg'
                      ,'pv02.jpg'
                      ,'pv03.jpg'
                      ,'pv04.jpg'
                      ,'pv05.jpg'
                      ,'pv06.jpg'
                      ,'pv07.jpg'
                      ,'pv08.jpg'
                      ,'pv09.jpg'
                      ,'pv10.jpg'
                      ,'pv11.jpg'
                      ,'pv12.jpg'
                      ,'pv13.jpg'
                      ,'pv14.jpg'
                      ,'pv15.jpg'
                      ,'pv16.jpg'
                      ,'pv17.jpg'
                      ,'pv18.jpg'
                      ,'pv19.jpg'
                      ,'pv20.jpg'
                    ];
    var imageSrc; // Used for left and right arrow in full screen image viewer
    var currentPage = 1;
    var length = imageSources.length;
    var numOfPages = Math.ceil(length/4);
    //populate page numbers
    for(var j = 1; j<=numOfPages;j++){
      $('#pages').append("<a class='galleryButton' value='" + j +"'>" + j + "</a>");
    }
    //populate first row of images
    $('.galleryButton').first().addClass('selectedPage');
    var thePage = $('.galleryButton').first(); //Used for showing selected page when clicking next
    
      for(var i = 0; i<length;i++){
        var html = '<img src= "../assets/img/gallery/' + imageSources[i] + '" class="galleryImage" alt="PrestigeVacations">';
        $('#gallery').append(html);
      }
    
    //click functions
    $('.galleryButton').on("click",galleryButtonClick);
    $('#next').on( "click", nextClick);
    $('#prev').on( "click", prevClick);
    $('.galleryImage').on( "click", galleryImageClick);
    $('.closebtn').on( "click", closeOverlay);
  
    
    function runAnimation(direction,isNext,passedPage){
      $(".galleryButton,#next,#prev").off('click');
      $('#gallery').addClass(direction);
      if(isNext == 'next'){
        setTimeout(function(){
         pageHandler(currentPage,1);
        },1000);
      }else if(isNext == 'prev'){
        setTimeout(function(){
         pageHandler(currentPage,-1);
        },1000);
      }else if(isNext == false) {
        setTimeout(function(){
          pageHandler(passedPage,0);
         },1000);
      }
      setTimeout(function(){
          $('#gallery').removeClass(direction);
        $('.galleryButton').on("click",galleryButtonClick);
        $('#next').on("click",nextClick);
        $('#prev').on("click",prevClick);
         },2000);
    }
    
    function pageHandler(passedPage, pageAddition){
     
      var page = passedPage + pageAddition;
      currentPage = page;
      if(currentPage == 1){
        $('#prev').css('display','none');
      }else{
        $('#prev').css('display','initial');
      }
      if(currentPage == numOfPages){
        $('#next').css('display','none');
      }else{
        $('#next').css('display','initial');
      }
      var startingNumber =  getStartingNumber(page);
      $('#gallery').html("");
       for(var i = startingNumber; i<startingNumber+4;i++){
         var html = '<img src="' + imageSources[i] + '" class="galleryImage">';
         $("#gallery").append(html);
       }
      //Dont show broken link image.
      $(".galleryImage").on("error", function() {
          $(this).hide();
      });
       $('.galleryImage').on( "click", galleryImageClick);
  }
  function getStartingNumber(page){
    /*1 = 0 2 = 4 3 = 8 4 = 12 5 = 16*/
    var startingNumber = 0;
    if(page != 1){
     for(var i = 1; i< page;i++){
       startingNumber = startingNumber + 4;
     }
    }
    return startingNumber;
  }
    
    //galleryButton handler
    function galleryButtonClick(event){
      $('.galleryButton').removeClass('selectedPage');
      $(event.currentTarget).addClass('selectedPage');
      thePage = event.currentTarget;
      var passedPage = parseInt($(event.currentTarget).attr('value'));
      if(passedPage > currentPage){
        runAnimation('right2left',false,passedPage);
      }else if(passedPage < currentPage){
        runAnimation('left2right',false,passedPage);
      }
    }
    
    //next button handler
    function nextClick(){
      if(currentPage != numOfPages){
        $('.galleryButton').removeClass('selectedPage');
        $(thePage).next().addClass('selectedPage');
        thePage = $(thePage).next();
        runAnimation('right2left','next',currentPage);
      }
    }
    
    //prev button handler
    function prevClick(){
      if(currentPage != 1){
        $('.galleryButton').removeClass('selectedPage');
        $(thePage).prev().addClass('selectedPage');
        thePage = $(thePage).prev();
        runAnimation('left2right','prev',currentPage);
      }
    }
    
    function galleryImageClick(){
      $('.overlay-content').html('');
      $('.overlay').css('height','100%');
      var image = '<img src="' + this.src + '" class="overlayImage">';
      imageSrc = this.src;
      // $('.overlay-content').append('<i class="fas fa-angle-left" id="arrowLeft"></i>');
      // $('#arrowLeft').on( "click", leftArrow);
      $('.overlay-content').append(image);
      // $('.overlay-content').append('<i class="fas fa-angle-right" id="arrowRight"></i>');
      // $('#arrowRight').on( "click", rightArrow);
    }
  
    function closeOverlay(){
      $('.overlay').css('height','0');
      $('.overlay-content').html('');
    }
    
    function leftArrow(){
      var currentPosition = imageSources.indexOf(imageSrc);
      if(currentPosition != 0){
        var image = '<img src= "../assets/img/gallery/' + imageSources[currentPosition-1] + '" class="overlayImage">';
        $(".overlay-content").html('');
        $('.overlay-content').append('<i class="fas fa-angle-left" id="arrowLeft"></i>');
        $('.overlay-content').append(image);
        $('.overlay-content').append('<i class="fas fa-angle-right" id="arrowRight"></i>');
        imageSrc = imageSources[currentPosition-1];
        $('#arrowLeft').on( "click", leftArrow);
        $('#arrowRight').on( "click", rightArrow);
      }
    }
    
    function rightArrow(image){
      var currentPosition = imageSources.indexOf(imageSrc);
      if(currentPosition != imageSources.length-1){
        var image = '<img src="assets/img/gallery/' + imageSources[currentPosition+1] + '" class="overlayImage">';
        $(".overlay-content").html('');
        $('.overlay-content').append('<i class="fas fa-angle-left" id="arrowLeft"></i>');
        $('.overlay-content').append(image);
        $('.overlay-content').append('<i class="fas fa-angle-right" id="arrowRight"></i>');
        imageSrc = imageSources[currentPosition+1];
        $('#arrowLeft').on( "click", leftArrow);
        $('#arrowRight').on( "click", rightArrow);
      }
    }
  });
  
  