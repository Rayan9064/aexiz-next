export default function UnderDevelopmentLayout({ children }: { children: React.ReactNode }) {
  // Intentionally do not render the global/site layout here —
  // this route should render standalone (no header/footer wrappers).
  return <>{children}</>;
}
