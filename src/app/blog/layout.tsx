export default function layout({children} : {children: React.ReactNode}) {
  return (
    <div className="grid grid-cols-4 w-full">{children}</div>
  )
}
