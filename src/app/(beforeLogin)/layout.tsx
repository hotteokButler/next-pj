import {ReactNode} from "react";

export default function BeforeLoginlayout({ children, modal }: { children: ReactNode; modal: ReactNode }) {
  return (
    <div>
      {children}
      {modal}
    </div>
  );
}
