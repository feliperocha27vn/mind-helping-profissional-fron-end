import { Outlet } from 'react-router'

export function DefaultLayout() {
  return (
    <div>
      <h1>dashboard</h1>
      <Outlet />
    </div>
  )
}
