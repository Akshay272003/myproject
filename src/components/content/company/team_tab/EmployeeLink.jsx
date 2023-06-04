import { Avatar, Button } from "@mui/material"
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { purple } from '@mui/material/colors';


const theme = createTheme({
    palette: {
        neutral: {
            main: '#EEEDED',
            contrastText: '#6f6f6f',
        }
    },
});

const EmployeeLink = ({ name, avatar, role }) => {
    return (
        <>
            <div className="flex justify-content-between items-center">
                <div className="flex gap-1 items-center">
                    <Avatar alt={name} src={avatar} sx={{ width: 30, height: 30 }} />

                    <div>
                        <p className="font-small font-dark">
                            {name}
                        </p>
                        <p className="font-small font-light">
                            {role}
                        </p>
                    </div>
                </div>

                <ThemeProvider theme={theme}>
                    <Button color="neutral" variant="contained" size="small" style={{
                        textTransform:'none',
                        minWidth:'40px',
                        padding:'4px 2px',
                        lineHeight:'1',
                        fontSize:'0.6rem',
                        borderRadius:'0'
                    }}>
                        View
                    </Button>
                </ThemeProvider>

            </div>
        </>

    );
}

export default EmployeeLink;