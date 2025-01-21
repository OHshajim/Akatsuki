export default async function DashboardLayout({
    children,
    params,
  }: {
    children: React.ReactNode
    params: Promise<{ email: string }>
  }) {
    const { email } = await params
   console.log(email);
   
    return (
      <section className="border-4 border-red-200">
        <header>
          <h1>Welcome to {email} s Dashboard</h1>
        </header>
        <main>{children}</main>
      </section>
    )
  }