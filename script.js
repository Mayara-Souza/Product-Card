
function openCloseGif(){
    
    let show_close_icon = document.getElementById('close-icon');
    let show_gif_icon= document.getElementById('open-gif-icon');
    let img_sofa = document.getElementById('img-sofa');
    let gif_sofa = document.getElementById('gif-sofa');

    if(show_gif_icon.classList.contains("closed")){
        console.log('trocando ícone para show_gif')
        show_gif_icon.classList.remove('closed');
        show_close_icon.classList.add('closed');


        console.log('trocando gif para img');
        img_sofa.classList.remove('closed');
        gif_sofa.classList.add('closed');
    }else{
        console.log('trocando ícone para show_close')
        show_gif_icon.classList.add('closed');
        show_close_icon.classList.remove('closed');

        console.log('trocando img para gif');
        img_sofa.classList.add('closed');
        gif_sofa.classList.remove('closed');        
    }


}
