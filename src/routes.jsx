import { DashboardPage } from "./dashboard"
import { Auth } from "./auth/Auth"

const routes = [
    {path: '/auth', element: <Auth/>},
    {path: '/*', element: <DashboardPage/>},
    
]

export default routes