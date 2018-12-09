import { ADD_ITEM, EDIT_ITEM, DELETE_ITEM } from './types'

const initialState = {
    items: [],
};

/**
 * Metodo que agrega un elemento a la lista de items
 * @param {*} state 
 * @param {*} newItem 
 */
function addItemToList(state, newItem) {
  
    return {
        ...state,
        items: state.items.concat(newItem)
    }
}

/**
 * Metodo que edita un elemento especifico cambiandole el estado y el color dependiendo de su estado
 * @param {*} state 
 * @param {*} newItem 
 */
function editItemToList(state, newItem){
    var color ="";
    if(newItem.estado){
        color = 'red';
    }else{
        color = 'green';
    }

    var index = findIndexItem(state.items,newItem);    

    state.items[index].estado = !newItem.estado
    state.items[index].color = color;

    return {
        ...state,
        items: [...state.items]
    }

} 

function deleteItemToList(state, newItem){
    var index = findIndexItem(state.items,newItem);
    state.items.splice(index, 1);

    return {
        ...state,
        items: [...state.items]
    }

}

function findIndexItem(list,item){
    let index = list.map(e=>{
        return e.id
    }).indexOf(item.id); 

    return index;
}

function reducer(state = initialState, action) {
    switch (action.type) {
        case ADD_ITEM:
            return addItemToList(state, action.newItem);
        case EDIT_ITEM:
            return editItemToList(state, action.newItem);
        case DELETE_ITEM:
            return deleteItemToList(state, action.newItem);
        default:
            return state;
    }
}

export default reducer;