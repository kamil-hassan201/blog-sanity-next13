"use client";

import Link from "next/link";

interface ClientSideRouteT {
  children: React.ReactNode;
  route: string;
}
function ClientSideRoute({ children, route }: ClientSideRouteT) {
  return <Link href={route}>{children}</Link>;
}

export default ClientSideRoute;
