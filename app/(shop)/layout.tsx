export default function ShopLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return <main className="container">{children}</main>;
}
