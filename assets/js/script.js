let applications = $('.applications-content');
const modalBody = $('.modal-body');
const modalTitle = $('.modal-title');
const modalFooter = $('.modal-footer');

const linkModal = imageLink => {
    console.log(imageLink);

    let liveLink = imageLink.previousElementSibling.previousElementSibling.textContent;
    let gitHubLink = imageLink.previousElementSibling.textContent;
    let title = imageLink.previousElementSibling.previousElementSibling.previousElementSibling.firstElementChild.textContent;

    modalTitle.text(title);

    let liveApplication = $('<a>');
    liveApplication.attr('href', `${liveLink}`);
    liveApplication.text('Live Application');
    liveApplication.attr('class', 'col-6');
    liveApplication.attr('target', '_blank');


    let gitHubApplication = $('<a>');
    gitHubApplication.attr('href', `${gitHubLink}`);
    gitHubApplication.text('GitHub Repository');
    gitHubApplication.attr('class', 'col-6');
    gitHubApplication.attr('target', '_blank');

    modalBody.append(liveApplication);
    modalBody.append(gitHubApplication);

    let techUsedContent = imageLink.nextElementSibling.textContent;
    let appDescription = imageLink.nextElementSibling.nextElementSibling.textContent;

    let appDescriptionEl = $('<p>');
    appDescriptionEl.attr('class', 'col-12');
    appDescriptionEl.append(appDescription);

    let techUsedEl = $('<p>');
    techUsedEl.attr('class', 'col-12');
    techUsedEl.append(`${techUsedContent}`);

    modalFooter.append(appDescriptionEl);
    modalFooter.append(techUsedEl);

}

applications.on('click', 'img', function () {
    modalBody.empty();
    modalFooter.empty();
    let imageLink = this;

    linkModal(imageLink);
    console.log('click');
})