//acciones
import {ADD_ITEM, EDIT_ITEM, DELETE_ITEM} from "./types"

function addItem(item) {
    return {
        type: ADD_ITEM,
        newItem: item
    }
}

function editItem(item){
    return {
        type:EDIT_ITEM,
        newItem:item
    }
}

function deleteItem(item){
    return {
        type:DELETE_ITEM,
        newItem:item
    }
}
const actionCreators = {
    addItem,
    editItem,
    deleteItem
}

export {actionCreators}