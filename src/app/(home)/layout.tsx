import { Header } from "@/components/header";

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header isHome={true} />
      {children}
    </>
  );
}