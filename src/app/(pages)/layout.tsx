import { Navbar } from "../components";

export default function PagesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <nav>
        <Navbar />
      </nav>

      <section>{children}</section>

      <footer></footer>
    </>
  );
}
