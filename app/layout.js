import Link from "next/link";
import "bootstrap/dist/css/bootstrap.css";

export const metadata = {
  title: "Contact List",
  description: "online contact list app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head></head>
      <body>
        <nav className="navbar navbar-expand-lg bg-dark text-white">
          <div className="container">
            <span className="navbar-brand mx-auto text-white text-center">
              <ul className="navbar-nav">
                <li className="nav-item xm-2">
                  <Link className="nav-link text-white mx-2" href="/">
                    Home
                  </Link>
                </li>
                <li className="nav-item xm-2">
                  <Link href="/contacts" className="nav-link text-white mx-2">
                    Contacts
                  </Link>
                </li>
                <li className="nav-item xm-2">
                  <Link
                    href="/contacts/new"
                    className="nav-link text-white mx-2"
                  >
                    AddContacts
                  </Link>
                </li>
              </ul>
            </span>
          </div>
        </nav>
        {children}
      </body>
    </html>
  );
}
