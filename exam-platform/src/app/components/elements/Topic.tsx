import clsx from "clsx"

export default function Topic({
  children,
  className
}: Readonly<{ children: React.ReactNode, className: string }>) {
  return (
    <div className={clsx("bg-[#F5E7FF] rounded-full py-[10px] px-4 flex items-center justify-center text-sm", className)}>
      {children}
    </div>
  );
}
