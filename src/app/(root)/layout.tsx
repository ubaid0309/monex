import LeftSidebar from "@/components/LeftSidebar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const loggedInUser = { firstName: "Blaze", lastName: "Mastery" };
  return (
    <main className="flex h-screen w-full ">
      <LeftSidebar user={loggedInUser} />
      {children}
    </main>
  );
}
