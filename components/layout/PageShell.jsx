export default function PageShell({ children, className = '' }) {
  return (
    <main className={`max-w-[430px] mx-auto w-full pb-20 ${className}`}>
      {children}
    </main>
  )
}
