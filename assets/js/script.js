let applications = $('.applications-content');

const linkModal = imageLink => {
    console.log(imageLink);


}

applications.on('click', 'img', function () {
    let imageLink = this;
    linkModal(imageLink);
    console.log('click');
})