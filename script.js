const colors = ['a', 'b', 'c', 'd']
let audio = new Audio('vine-boom.mp3');

$('.button').click(function(evt){
    audio.play();
    let clicked_button = evt.target.id
    if ($('#'+clicked_button).hasClass('hovered')){
        $('#'+clicked_button).removeClass('hovered')
        $('.display_box').removeClass(clicked_button)
    } else {
        $('.button').removeClass('hovered')
        $('#'+clicked_button).addClass('hovered')
        for (let i=0; i<4; i++){
            if ($('.display_box').hasClass(colors[i])){
                $('.display_box').removeClass(colors[i])
            }
        }    
        $('.display_box').addClass(clicked_button)
    }

})

