import List from '@mui/material/List';

function TodoList({children}){

    return (
        <List 
            sx={{ 
                width: '100%', 
                maxWidth: '36ch', 
                bgcolor: 'background.paper', 
                margin: "0 auto",
            }}
        >
            {children}
        </List>
    )
}

export default TodoList;