export default function NotesLayout({
  children,
  sidebar,
  modal,
}: {
  children: React.ReactNode;
  sidebar: React.ReactNode;
  modal: React.ReactNode;
}) {
  return (
    <>
      <div style={{ display: "flex" }}>
        <aside>{sidebar}</aside>
        <main>{children}</main>
      </div>
      {modal}
    </>
  );
}
