jQuery(document).ready(function($)
{
    $('div.flash .right a').click(function(e){
        $(this).parent().parent().hide(100);
    });

    hljs.initHighlightingOnLoad();

    if(!Modernizr.svg) {
        $('img[src*="svg"]').attr('src', function() {
            return $(this).attr('src').replace('.svg', '.png');
        });
    }
});
