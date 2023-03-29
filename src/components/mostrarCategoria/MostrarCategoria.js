import React from 'react'
import styles from '../homeContainer/HomeContainer.module.css'
import { theme } from "../../temas/colorMui"
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { ThemeProvider } from '@emotion/react';

export const MostrarCategoria = ({ elemento }) => {


    return (
        <>
            <div className={styles.iconsOpcion}>
                <Stack direction="row" spacing={2}>
                    <ThemeProvider theme={theme}>
                        <Button variant="contained" color="neutris"><img src={elemento.img} alt="" /></Button>
                    </ThemeProvider>
                </Stack>
            </div>
        </>
    )
}

