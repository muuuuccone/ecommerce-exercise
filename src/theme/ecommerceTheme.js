import {createTheme, responsiveFontSizes} from "@mui/material";
import {deepmerge} from "@mui/utils";

const commonTheme = {
    components: {
        MuiButton: {
            styleOverrides:{
              root:{
                  borderRadius:'0.7rem'
              }
            },
            variants: [
                {
                    props: {variant: 'contained'},
                    style: {
                        background: "linear-gradient(90deg, #3576CF 0%, #338FF5 100%) !important"
                    }
                }
            ]
        },
        MuiTabs:{
            styleOverrides: {
                indicator:{
                    background:'transparent'
                }
            }
        },
    },
    palette:{
        text:{
            primary:"#35373B"
        }
    }
}

const light = deepmerge(
    commonTheme,
    {
    components:{
        MuiCssBaseline:{
            styleOverrides: {
                body: {
                    background:"#C9DBF2"
                }
            }
        }
    },
    palette: {
        mode: "light",
        primary: {
            main: "#3576CF"
        },
    }
})

const dark = deepmerge(
    commonTheme,
    {
        palette: {
            mode: "dark",
            primary: {
                main: "#338FF5"
            }
        }
    })

export const lightTheme = responsiveFontSizes(createTheme(light))

export const darkTheme = responsiveFontSizes(createTheme(dark))