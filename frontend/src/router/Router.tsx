import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"
import { routesAdmin, routesPublic } from ".";
import { PageNotFound } from "../pages";

const isLogged = true;

export const Router = () => {

  return (
    <BrowserRouter>

    {
        isLogged
        ?
        (
            <Routes>
                {
                    routesAdmin.map( ({ path, Template, Component }, index) => (
                        <Route key={index} path={path} element={<Template><Component /></Template>} />
                    ) )
                }

                <Route path='/*' element={<Navigate to='/404' />} />
                <Route path='/404' element={<PageNotFound />} />
            </Routes>
        )
        :
        (
            <Routes>
                {
                    routesPublic.map( ({ path, Component }, index) => (
                        <Route key={index} path={path} element={<Component />} />
                    ) )
                }

                <Route path='/*' element={<Navigate to='/404' />} />
                <Route path='/404' element={<PageNotFound />} />
            </Routes>
        )
    }

    </BrowserRouter>
  )
}
