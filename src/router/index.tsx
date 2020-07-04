import React from "react"
import { BrowserRouter } from "react-router-dom"
import PageRouter from "./PageRouter"
import { ThemeProvider } from "styled-components"
import theme from "../components/theme/Styles"

export default () => {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <PageRouter />
      </BrowserRouter>
    </ThemeProvider>
  )
}
