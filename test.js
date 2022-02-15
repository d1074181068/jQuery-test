$(document).ready(function () {

    // 語法hide show
    $('.btn-h1-hide').click(function () { 
        $('.btn-hide-show h1').hide();
    });
    $('.btn-h1-show').click(function () { 
        $('.btn-hide-show h1').show();
    });

    //語法 toggle 會自動偵測元素狀態做切換
    $('.btn-h2-toggle').click(function () { 
        $('.btn-toggle h2').toggle();
    });

    //語法 slideDown/slideUp/slideToggle(毫秒) 滑動
    $('.btn-comment').click(function () { 
        $('.text').slideToggle();
    }); 

    //語法 fadeIn/fadeOut/fadeToggle(毫秒)  淡入淡出
    $('.fadeIn').click(function () { 
        $('.fade-item').fadeIn(2000);
    });
    $('.fadeOut').click(function () { 
        $('.fade-item').fadeOut(2000);
    });
    $('.fadeToggle').click(function (e) { 
      $('.fade-item').stop().fadeToggle(2000);
    });
    
    //語法 addClass/removeClass/toggleClass('class名稱')  增加刪除class
    $('.class-active').click(function () { 
        $('.toggleclass-item').toggleClass('active');
    });

    //下拉式選單
    $('.jquery-dropdown .jquery-contact a').click(function (e) { 
        e.preventDefault();
        $('.jquery-contact>a').toggleClass('active');
        $('.jquery-contact-open').slideToggle();
        $('.jquery-order a').removeClass('active');
        $('.jquery-order-open').slideUp(100);
    });
    $('.jquery-dropdown .jquery-order a').click(function (e) { 
        e.preventDefault();
        $('.jquery-order>a').toggleClass('active');
        $('.jquery-order-open').slideToggle();
        $('.jquery-contact a').removeClass('active');
        $('.jquery-contact-open').slideUp(100);
    });

    //語法 delay(毫秒)  
    //語法 attr---$("欲修改的元素或class").attr("想修改的屬性","修改的值")
    $('.btn-delay').click(function () { 
        $('.red').delay(0).slideDown();
        $('.orange').delay(1000).slideDown();
        $('.yellow').delay(2000).slideDown();
        $(".green").delay(3000).queue(function(){
            $('.green').attr("class", 'box green active').dequeue();
          });
        $(".blue").delay(4000).queue(function(){
             $('.blue').attr('class', 'box blue active').dequeue();
          });
        $(".indigo").delay(5000).queue(function(){
          $('.indigo').attr('class', 'box indigo active').dequeue();
          });
        $(".purple").delay(6000).queue(function(){
          $('.purple').attr('class', 'box purple active').dequeue();
          });
        $(".black").delay(7000).queue(function(){
          $('.black').attr('class', 'box black active').dequeue();
          });
        $(".Platinum").delay(8000).queue(function(){
          $('.Platinum').attr('class', 'box Platinum active').dequeue();
          });
        $(".Platinum").delay(1500).queue(function(){
          $('.Platinum').attr('class', 'box Platinum close').dequeue();
          });
        $(".black").delay(3500).queue(function(){
          $('.black').attr('class', 'box black close').dequeue();
          });
        $(".purple").delay(5500).queue(function(){
             $('.purple').attr('class', 'box purple close').dequeue();
          });
        $(".indigo").delay(7500).queue(function(){
          $('.indigo').attr('class', 'box indigo close').dequeue();
          });
        $(".blue").delay(9500).queue(function(){
          $('.blue').attr('class', 'box blue close').dequeue();
         });
        $(".green").delay(11500).queue(function(){
          $('.green').attr('class', 'box green close').dequeue();
          });
        $('.yellow').delay(13000).slideUp();
        $('.orange').delay(15000).slideUp();
        $('.red').delay(17000).slideUp();
    });

    //語法 css() 調整css樣式
    $('.font-large').click(function (e) { 
        e.preventDefault();
        $('.article').css('font-size', '22px');
    });
    $('.font-medium').click(function (e) { 
        e.preventDefault();
        $('.article').css('font-size', '18px');
    });
    $('.font-small').click(function (e) { 
        e.preventDefault();
        $('.article').css('font-size', '14px');
    });

    //fixed 做固定式廣告
    $('.ad-close').click(function (e) { 
      e.preventDefault();
      $('.ad').slideUp();
    });

    //用加class 來使用animate動畫效果
    $('.btn-animate').click(function () { 
      $('.hinge').attr('class', 'hinge animate__animated animate__hinge');
      $(".hinge").delay(2500).queue(function(){
        $('.hinge').attr('class', 'hinge').dequeue();
        });

      $('.roll-in-out').attr('class', 'roll-in-out animate__animated animate__rollIn');
      $(".roll-in-out").delay(1000).queue(function(){
          $('.roll-in-out').attr('class', 'roll-in-out animate__animated animate__rollOut').dequeue();
        });
      $(".roll-in-out").delay(1500).queue(function(){
          $('.roll-in-out').attr('class', 'roll-in-out').dequeue();
          });

      $('.wobble').attr('class', 'wobble animate__animated animate__wobble');
      $(".wobble").delay(2500).queue(function(){
        $('.wobble').attr('class', 'wobble').dequeue();
        });
    });
    //實作offcanvas
    $('.menu-bt').click(function (e) { 
      e.preventDefault();
      $('.main').toggleClass('open');
    });
    $('.aside-bt a').click(function (e) { 
      e.preventDefault();
      
    });
});