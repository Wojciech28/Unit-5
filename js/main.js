$(document).ready(function($) {
    $('a[data-rel^=lightcase]').lightcase();
    $('a[data-rel=lightcase:myCollection:slideshow]').lightcase({
    transition: 'scrollHorizontal',
    showSequenceInfo: false,
    showTitle: false
    });
});  
$(document).ready(function() {
    $('#search').hideseek({
    list: '.list',
    attribute: 'title',
    hidden_mode: false,
    nodata: 'No result found'
    });
});