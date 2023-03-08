import SideBar from '../components/SideBar'
import '../styles/globals.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <div className='flex'>
        <div className='bg-[#252b37] max-w-xs h-screen overflow-y-auto md:min-w-[20rem]'>
        <SideBar/>
        </div>
        
        {/*ClientProvidre */}

        <div className='bg-[#262838] flex-1'>{children}</div>
        </div>
        </body>
    </html>
  )
}
