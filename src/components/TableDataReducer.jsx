

const TableDataReducer=(state,action)=>{
    switch (action.type) {
        case 'ASC_SORT':
            return [...state].sort((a, b) =>
                action.column === "user"
                    ? a.user.name.localeCompare(b.user.name)
                    : action.column === "post"
                    ? a.post.title.localeCompare(b.post.title)
                    : a.comments.length - b.comments.length
            );
        case 'DSC_SORT':
            return [...state].sort((a,b)=>
                action.column === "user"
                    ?b.user.name.localeCompare(a.user.name)
                    :action.column === "post"
                    ?b.post.title.localeCompare(a.post.title)
                    :b.comments.length - a.comments.length
            );
        case 'RESET':
            // Wróć do początkowego stanu
            return action.payload;
        default:
            return state; // Jeżeli akcja jest nieznana, zwróć niezmieniony stan
    }
}

export default TableDataReducer;