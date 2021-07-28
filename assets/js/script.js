let applications = $('.applications-content');
const modalBody = $('.modal-body');
const modalTitle = $('.modal-title');

const linkModal = imageLink => {
    console.log(imageLink);
    // console.log(imageLink.previousElementSibling.previousElementSibling.textContent);

    let liveLink = imageLink.previousElementSibling.previousElementSibling.textContent;
    let gitHubLink = imageLink.previousElementSibling.textContent;
    let title = imageLink.previousElementSibling.previousElementSibling.previousElementSibling.firstElementChild.textContent;
    console.log(title);

    modalTitle.text(title);

    let liveApplication = $('<a>');
    liveApplication.attr('href', `${liveLink}`);
    liveApplication.text('Live Application');

    let gitHubApplication = $('<a>');
    gitHubApplication.attr('href', `${gitHubLink}`);
    gitHubApplication.text('GitHub Application');

    modalBody.append(liveApplication);
    modalBody.append(gitHubApplication);

}

applications.on('click', 'img', function () {
    modalBody.empty();
    let imageLink = this;

    linkModal(imageLink);
    console.log('click');
})