import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';

function TodoItem({value, checked, id, onCheckBoxClick, onDeleteClick}){

    return (
        <ListItem
            key={value}
            secondaryAction={
                <IconButton edge="end" aria-label="comments"
                    onClick={() => onDeleteClick(id)}
                >
                    <DeleteIcon />
                </IconButton>
            }
            disablePadding
            sx={{ 
                bgcolor: '#dadada', 
                borderRadius: "8px",
                margin: "0.75rem 0",
            }}
        >
            <ListItemButton 
                role={undefined} 
                onClick={() => onCheckBoxClick(id)}
                dense
            >
                <ListItemIcon>
                    <Checkbox
                        edge="start"
                        checked={checked}
                        tabIndex={-1}
                        disableRipple
                        inputProps={{ 'aria-labelledby': id }}
                    />
                </ListItemIcon>
                <ListItemText id={id} primary={value} />
            </ListItemButton>
        </ListItem>

    )
}

export default TodoItem;