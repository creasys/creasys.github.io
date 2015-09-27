
$( document ).ready( function () {
                    
                    

    $('.navbar .dropdown').hover(function() {
        $(this).find('.dropdown-menu').first().stop(true, true).delay(100).slideDown();
    }, function() {
        $(this).find('.dropdown-menu').first().stop(true, true).delay(100).slideUp();
    });
                    
    $('.sort').hover(function() {
        $(this).find('.dropdown-menu').first().stop(true, true).delay(100).slideDown();
    }, function() {
        $(this).find('.dropdown-menu').first().stop(true, true).delay(100).slideUp();});
                    
    $( '.searchSubmit' ).click( function() {
        if ( !$(this).hasClass('active') ) {
            var doc = this.id;
            $('.searchSubmit').not($(this)).removeClass('active');
            $(this).addClass('active');
            $('#results').html('<div id="spinner"></div>');
            startSpinner();
            if ( $('#eq-sort-date').hasClass('active')) {
                $( '#results' ).load( '/eqs_date/?doc=' + doc);
            }
            else {
                $( '#results' ).load( '/eqs_name/?doc=' + doc);
            }
            $( '#results2' ).html( '&nbsp;' );
                               
        }
    });
                    
    $('#doc-sort-name').click( function() {
        if ( !$(this).hasClass('active') ) {
            $('#doc-sort-date').removeClass('active');
            $('#check-doc-date').css('visibility', 'hidden');
            $(this).addClass('active');
            $('#check-doc-name').css('visibility', 'visible');
            $('#doc-list').html('<div id="spinner"></div>');
            startSpinner();
            $( '#doc-list' ).load( '/docs_name/');
            $( '#results' ).html( '&nbsp;' );
            $( '#results2' ).html( '&nbsp;' );
                              
         }
    });
                    
    $('#doc-sort-date').click( function() {
        if ( !$(this).hasClass('active') ) {
            $('#doc-sort-name').removeClass('active');
            $('#check-doc-name').css('visibility', 'hidden');
            $(this).addClass('active');
            $('#check-doc-date').css('visibility', 'visible');
            $('#doc-list').html('<div id="spinner"></div>');
            startSpinner();
            $( '#doc-list' ).load( '/docs_date/');
            $( '#results' ).html( '&nbsp;' );
            $( '#results2' ).html( '&nbsp;' );
                              
         }
     });
                    
     $('#eq-sort-name').click( function() {
        if ( !$(this).hasClass('active') ) {
            $('#eq-sort-date').removeClass('active');
            $('#check-eq-date').css('visibility', 'hidden');
            $(this).addClass('active');
            $('#check-eq-name').css('visibility', 'visible');
            var btnGroup = $(this).parents('#main-container').find('#doc-list-buttons');
            var doc;
            var doc_set = false;
            btnGroup.find('.document').find('.list-group-item').each(function() {
                if (!doc_set && $(this).hasClass('active')) {
                    doc = this.id;
                    doc_set = true;
                }
            });
            if (doc_set) {
                $('#results').html('<div id="spinner"></div>');
                startSpinner();
                $( '#results' ).load( '/eqs_name/?doc=' + doc);
                $( '#results2' ).html( '&nbsp;' );
                             
            }
        }
    });
                    
    $('#eq-sort-date').click( function() {
        if ( !$(this).hasClass('active') ) {
            $('#eq-sort-name').removeClass('active');
            $('#check-eq-name').css('visibility', 'hidden');
            $(this).addClass('active');
            $('#check-eq-date').css('visibility', 'visible');
            var btnGroup = $(this).parents('#main-container').find('#doc-list-buttons');
            var doc;
            var doc_set = false;
            btnGroup.find('.document').find('.list-group-item').each(function() {
                if (!doc_set && $(this).hasClass('active')) {
                    doc = this.id;
                    doc_set = true;
                }
            });
            $('#results').html('<div id="spinner"></div>');
            startSpinner();
            $( '#results' ).load( '/eqs_date/?doc=' + doc);
            $( '#results2' ).html( '&nbsp;' );
                        
        }
    });

                    
});

function startSpinner() {

    var spinner = new Spinner({
                              lines: 10, // The number of lines to draw
                              length: 7, // The length of each line
                              width: 4, // The line thickness
                              radius: 10, // The radius of the inner circle
                              color: '#000', // #rbg or #rrggbb
                              speed: 1, // Rounds per second
                              trail: 100, // Afterglow percentage
                              shadow: false // Whether to render a shadow
                              }).spin(document.getElementById("spinner"));
    
    return spinner;
}

