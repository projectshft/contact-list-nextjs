import 'bootstrap/dist/css/bootstrap.min.css';
import './globals.css';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&family=SN+Pro:ital,wght@0,200..900;1,200..900&display=swap"
          rel="stylesheet"
        />
        <title>React Contacts List</title>
      </head>
      <body style={{ fontFamily: 'Inter ,Roboto, sans-serif' }}>
        {children}
      </body>
    </html>
  );
}
