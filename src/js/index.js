import {
    DEFAULT_PROJECT_STATE,
    PROJECT_TYPE_LIST
} from './constants';

import { getNodeListArray } from './utils';

const buttonGroupElement = document.querySelector('.projects-map__button-group');

const delegateButtonGroupClick = e => {
    if (e.target.dataset.filterType) {
        filterProjectsByType(e.target.dataset.filterType);
    }
};

const filterProjectsByType = type => {
    if (type === 'all') {
        const hiddenElements = getNodeListArray('.hide');

        hiddenElements.forEach(element => removeClassFromElement('hide', element));
    }

    else {
        const filteredProjectElements =
        getNodeListArray('li[data-project-type]:not([data-project-type="' + type + '"])');

        const hiddenElements = getNodeListArray('.hide');

        hiddenElements.forEach(element => removeClassFromElement('hide', element));

        filteredProjectElements.forEach(element => applyClassToElement('hide', element));
    }
};

const applyClassToElement = (className, element) => element.classList.add(className);

const removeClassFromElement = (className, element) => element.classList.remove(className);

buttonGroupElement.addEventListener('click', delegateButtonGroupClick, false);