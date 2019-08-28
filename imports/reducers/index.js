import {combineReducers} from 'redux';
import * as actions from '../actions';
import {Meteor} from 'meteor/meteor';

// this reducer process state relevant to homepage, it has homePgdefaultState
// itemArray is fetched from meteor and it is the total array regardless of user, cate ...
const homePgdefaultState = {
    category: 'Car',
    itemArray: []
}
const homePageReducer = (state = homePgdefaultState, action) => {
    switch (action.type) {
        case actions.CHANGE_CATEGORY:
            return Object.assign({}, state,
                {
                    category: action.chosenCategory,
                }
            );
        case actions.ASSIGN_SERVER_ITEMS_TO_STORE :
            return Object.assign({}, state,
                {
                    itemArray: action.itemsFromServer,
                }
            );
        default:
            return state;
    }
}
const itemBoxfaultState = {
    itemArray: [],
    shouldPopUpInitemBox: false,
    popUpItemInItemBox: {},
    liked: false,
    Unliked: false,
}
const itemBoxReducer = (state = itemBoxfaultState, action) => {
    switch (action.type) {
        case actions.ASSIGN_SERVER_ITEMS_TO_STORE :
            return Object.assign({}, state,
                {
                    itemArray: action.itemsFromServer,
                }
            );
        case actions.VIEW_ONE_IN_ITEM_BOX:
            return Object.assign({}, state,
                {
                    shouldPopUpInitemBox: true,
                    popUpItemInItemBox: state.itemArray[action.indexToPop]
                }
            );
        case actions.CLOSE_ONE_IN_ITEM_BOX:
            return Object.assign({}, state,
                {
                    shouldPopUpInitemBox: false,
                }
            );

        case actions.LIKE_ITEM:
            if (!state.popUpItemInItemBox.like.includes(action.idToAddToLike)) {
                let newLike = [...state.popUpItemInItemBox.like];
                newLike.splice(newLike.length, 0, action.idToAddToLike);
                let revisedPopUpItem = Object.assign({}, state.popUpItemInItemBox,
                    {
                        like: newLike,
                    }
                );

                return Object.assign({}, state,
                    {
                        shouldPopUpInitemBox: true,
                        popUpItemInItemBox: revisedPopUpItem,
                        liked: true,
                    }
                );
            } else {
                alert("you have already liked this item!");
                return Object.assign({}, state,
                    {
                        shouldPopUpInitemBox: true,
                        popUpItemInItemBox: state.popUpItemInItemBox,
                        liked: true,
                    }
                );
            }
        default:
            return state;
    }
}

// this reducer is for showing items in dashboard, defaulte state is just an array, make by henry
const userItemReducer = (state = [], action) => {
    if (action.type === actions.Load_User_Items) {
        return [...action.items];
    }
    return state;
};
// this reducer is for editing posted item, default state is named userEditReducerDefaultState, it has two 
// fields, one is a boolean called popUp the other one is the itemjson for popup, it will be passed to
// popup components, it will also be modified to store the latest user input of the item to edit.
const userEditReducerDefaultState = {
    popUp: false,
    itemForPopUp: {}
}
const userEditReducer = (state = userEditReducerDefaultState, action) => {
    switch (action.type) {
        case actions.VIEW_ONE:
            return {
                popUp: true,
                itemForPopUp: action.itemForPopUp
            };
        case actions.ALLOW_EDIT:
            return {
                popUp: true,
                itemForPopUp: state.itemForPopUp
            }
        case actions.UNVIEW_ONE:
            return {
                popUp: false,
                itemForPopUp: state.itemForPopUp
            };
        case actions.CHANGE_INPUT :
            var newitem = Object.assign({}, state.itemForPopUp,
                {
                    [action.keyToChange]: action.valueToUpdate,
                    'date': new Date().toString
                }
            );
            return {
                popUp: state.popUp,
                itemForPopUp: newitem,
            };
        default:
            return state;
    }
};
const postDefaultState = {
    user_id: Meteor.userId(),
    title: 'An item',
    price: 0,
    category: "",
    description: '',
    location: {lat: 999, lng: -999},
    locationStr: "",
    date: new Date().toString(),
    file: '',
    imagePreviewUrl: '',
    attribute: "",
    like: [],
    owner: {}
}
const postNULLState = {
    user_id: "",
    title: 'An item',
    price: 0,
    category: "",
    description: '',
    location: {lat: 999, lng: -999},
    locationStr: "",
    date: new Date().toString(),
    file: '',
    imagePreviewUrl: '',
    attribute: "",
    like: [],
    owner: {}
}
const postItemReducer = (state = postDefaultState, action) => {
    let new_date = new Date();
    new_date = new_date.toLocaleString();
    switch (action.type) {
        case actions.CHANGE_UNSUBMITTED_ITEM:
            var newitem = Object.assign({}, state,
                {
                    [action.keyToChange]: action.valueToUpdate,
                    // 'date': new Date()
                    'date': new_date
                }
            );
            // line for debugging change in state for changing appliance post ad fields
            return newitem
        case actions.RESET_POST_TO_INITIAL:
            return postNULLState;
        default:
            return state;
    }
};

// Reducer for LogIn Page
const updateEmailInput = (str = '', action) => {
    if (action.type === actions.CHANGE_EMAIL_INPUT) {
        return action.payload
    }
    return str
};

const updatePasswordInput = (str = '', action) => {
    if (action.type === actions.CHANGE_PASSWORD_INPUT) {
        return action.payload
    }
    return str
};

// Reducer for Sign Up Page

const updateFNameInput = (str = '', action) => {
    if (action.type === actions.CHANGE_FNAME_INPUT) {
        return action.payload
    }
    return str
};
const updateLNameInput = (str = '', action) => {
    if (action.type === actions.CHANGE_LNAME_INPUT) {
        return action.payload
    }
    return str
};
const updateCreateEmailInput = (str = '', action) => {
    if (action.type === actions.CHANGE_CREATE_EMAIL_INPUT) {
        return action.payload
    }
    return str
};
const updateCreatePasswordInput = (str = '', action) => {
    if (action.type === actions.CHANGE_CREATE_PW_INPUT) {
        return action.payload
    }
    return str
};

const toggleLogin = (bool = false, action) => {
    switch (action.type) {
        case 'LOG_IN_OUT':
            return !bool
        default:
            return bool;
    }
}


const displayReview = (popReviewWindow = false, action) => {
    if (action.type === actions.SHOW_REVIEW) {
        return true;
    }
    if (action.type === actions.CLOSE_REVIEW) {
        return false;
    }
    return popReviewWindow;
}

// const renderChoices = ['home','post','viewPost','login','signup']
// const renderChoices = ['home','post','viewPost','login','signup',''User']
const renderChoiceAssigner = (renderChoice = 'home', action) => {
    switch (action.type) {
        case actions.CHANGE_CHOICE_ON_NAV:
            return action.choice;
        default:
            return renderChoice;
    }
}

const isSearchedFromNavBar = (boolean = false, action) => {
    if (action.type === 'SEARCH_FROM_NAV_BAR') {
        return action.payload;
    }
    return boolean;
}

const keywordFromNavBar = (string = 'test', action) => {
    if (action.type === 'KEYWORD_NAV_BAR') {
        return action.payload;
    }
    return string;
}


export default combineReducers({
    homePageReducer,
    userItemReducer,
    userEditReducer,
    itemBoxReducer,
    // for post Item change and submit
    postItemReducer,
    // for LogIn Page
    emailInput: updateEmailInput,
    passwordInput: updatePasswordInput,
    toggleLogin: toggleLogin,
    // for Sign Up Page
    fNameInput: updateFNameInput,
    lNameInput: updateLNameInput,
    createEmailInput: updateCreateEmailInput,
    createPasswordInput: updateCreatePasswordInput,
    // for postItem show review
    displayReview,
    // for viewOneItem allow edit posted items
    // updateItem,
    // for change choice on Nav
    renderChoiceAssigner,
    // Item was searched from Nav bar
    isSearchedFromNavBar: isSearchedFromNavBar,
    // keyword from Nav Bar
    keywordFromNavBar: keywordFromNavBar
});
