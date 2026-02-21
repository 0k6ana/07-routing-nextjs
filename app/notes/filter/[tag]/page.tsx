import NotesClient from "../../Notes.client";

export default function Page({ params }: { params: { tag: string } }) {
  const tag = params.tag === "all" ? undefined : params.tag;

  return <NotesClient tag={tag} />;
}