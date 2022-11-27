let a;
function viewCerticifate() {
    $(".certWindow").css("visibility", "visible");
    $(document).ready(function(){
        $('.slide').click(function() {
          a = $(this).attr('id');
          switch (a) {
            case "cert1":
                $('.certWindow').empty().append('<img src="images/image 3.png">');
                $.fancybox.open({
                    src: '.certWindow',
                    type: 'inline'
                });
                break;
            case "cert2":
                $('.certWindow').empty().append('<img src="images/image 4.png">');
                $.fancybox.open({
                    src: '.certWindow',
                    type: 'inline'
                });
                break;
            case "cert3":
                $('.certWindow').empty().append('<img src="images/image 3.png">');
                $.fancybox.open({
                    src: '.certWindow',
                    type: 'inline'
                });
                break;
            case "cert4":
                $('.certWindow').empty().append('<img src="images/image 4.png">');
                $.fancybox.open({
                    src: '.certWindow',
                    type: 'inline'
                });
                break;
            case "cert5":
                $('.certWindow').empty().append('<img src="images/image 3.png">');
                $.fancybox.open({
                    src: '.certWindow',
                    type: 'inline'
                });
                break;
            case "cert6":
                $('.certWindow').empty().append('<img src="images/image 4.png">');
                $.fancybox.open({
                    src: '.certWindow',
                    type: 'inline'
                });
                break;
          }
        });
      });
}