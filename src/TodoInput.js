import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';

import InputAdornment from '@mui/material/InputAdornment';

function TodoInput({ description, setDescription, onSubmitNewTask}){
    return (
        <Box
            component="form"
            sx={{ '& > :not(style)': { m: 1, width: '36ch'} }}
            noValidate
            autoComplete="off"
            onSubmit={onSubmitNewTask}
        >
            <TextField 
                id="new-task-input"
                label="New Task"
                variant="outlined" 
                value={description}
                onChange={(event) => {
                    setDescription(event.target.value);
                }}
                slotProps={{
                    input: {
                        endAdornment: (
                            <InputAdornment position="end">
                                <AddCircleOutlineOutlinedIcon />
                            </InputAdornment>
                        ),
                    },
                }}
            />
        </Box>
    )
}

export default TodoInput;