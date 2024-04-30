import { ContactsProvider } from "./contexts/ContactsContext"
import '../node_modules/bootstrap/dist/css/bootstrap.css'

export default function RootLayout({ children }) {
  
  return (
    <html lang="en">
      <body>
        <ContactsProvider>
          {children}
        </ContactsProvider>
      </body>
    </html>
  )
}
