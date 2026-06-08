import '../index.css'

export const metadata = {
  title: 'Excellence Corp',
  description: 'Converted from Vite to Next.js',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}