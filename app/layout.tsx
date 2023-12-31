import './globals.css'
import TopNav from './TopNav';
import SideNav from './SideNav';


export const metadata = {
  title: 'YouTube Clone',
  description: 'Created by Alex Joshua',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-zinc-900 text-zinc-100">
        <div className="flex flex-col h-screen">
          <TopNav />
          <div className="flex flex-1 ">
            <SideNav />
            {children}
          </div>
        </div>
      </body>
    </html>
  )
}
