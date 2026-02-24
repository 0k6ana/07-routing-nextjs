import NotesClient from "./filter/[...slug]/Notes.client";
import type { FetchTagNote } from "@/types/note"; 

interface NotesPageProps {
  params: {
    slug?: string[];
  };
}

export default function NotesPage({ params }: NotesPageProps) {
  const tag = (params.slug?.[0] ?? 'all') as FetchTagNote;

  return <NotesClient tag={tag} />;
}