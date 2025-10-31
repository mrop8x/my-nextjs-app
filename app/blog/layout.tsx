export default function BlogLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return <section>
        <div>Sidebar</div>
        <div>{children}</div>
        </section>
  }