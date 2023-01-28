import { ReactNode } from "react";

interface PropsInterface {
  children: ReactNode;
  className?: string;
  id?: string;
}

export default function Section(props: PropsInterface) {
  const { children, className, id } = props;

  return (
    <section id={id} className={`w-full ${className}`}>
      {children}
    </section>
  );
}
