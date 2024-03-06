export default function layout({children} : {children: React.ReactNode}) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4">{children}</div>
  )
}
