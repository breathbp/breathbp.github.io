$(document).ready(function () {
    $(".iziModal").iziModal({
        radius: 5,
        padding: 20,
        headerColor: '#0A1971',
        bodyOverflow: true,
        zindex: 9999,
        width: 1000,
        top: 50
    });
    const mainVideoHeight = $('.main-video video').height();
    $('.main-video .black-layer').height(mainVideoHeight);

    const lightbox = new PhotoSwipeLightbox({
        gallery: '#photosAmpouleGallery',
        children: 'a',
        showHideAnimationType: 'none',
        pswpModule: PhotoSwipe,
    });
    lightbox.init();

    $('.close-tab-arrow').on('click', function(){
        window.close();
    });

    $(document).on('click', '.pdfIframeModalBtn', function (e) {
        const iframesArray = $(this).data('pdf-iframe');
        const modalTitle = $(this).data('modal-title');
        iframesArray.forEach(iframe => {
            const html = `
                <div class="mb-4">
                    <iframe src="${iframe}" height="600" width="100%"></iframe>
                </div>
            `;
            $('#pdfIframeModal .modal-body').empty().append(html);
        });
        $('#pdfIframeModal').iziModal('setTitle', modalTitle);
        $('#pdfIframeModal').iziModal('open');
    });

    $(document).on('click', '.videoIframeModalBtn', function (e) {
        const iframesArray = $(this).data('video-iframe');
        const modalTitle = $(this).data('modal-title');
        $('#videoIframeModal .modal-body').empty()
        iframesArray.forEach(iframe => {
            const html = `
                <div class="mb-5 d-flex justify-content-center">
                <iframe width="560" height="315" src="${iframe}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </div>
            `;
            $('#videoIframeModal .modal-body').append(html);
        });
        $('#videoIframeModal').iziModal('setTitle', modalTitle);
        $('#videoIframeModal').iziModal('open');
    });

});