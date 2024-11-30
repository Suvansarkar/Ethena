import clsx from "clsx";

export default function Button({
  children,
  className,
}: Readonly<{ children: React.ReactNode; className?: string }>) {
  return (
    <button
      className={clsx(
        "bg-transparent box-border border border-white/40 rounded-lg hover:bg-white/20 text-white p-2 flex items-center justify-center px-4 gap-2",
        className
      )}
    >
      {children}
    </button>
  );
}
