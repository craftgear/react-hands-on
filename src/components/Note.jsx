import { memo } from "react";

export const Note = memo(({ now }) => (
  <h1 className="text-3xl">This is a note {now}</h1>
));
