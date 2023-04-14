export default function AuthRootLayout({children}) {
    return (
        <html lang="en">
            <head />
            <body className="w-screen h-screen">
                {children}
            </body>
        </html>
    )
}