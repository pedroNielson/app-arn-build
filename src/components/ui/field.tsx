import * as React from "react";
import { cn } from "@/lib/utils";

const base =
  "h-12 w-full rounded-lg border border-slate-300 bg-white px-4 text-slate-900 placeholder:text-slate-400";

export function Field({ label, className, children, ...p }: { label: string } & React.InputHTMLAttributes<HTMLInputElement> & { children?: never }) {
  return (
    <label className="grid gap-1.5 text-sm font-medium text-slate-700">
      {label}
      <input className={cn(base, className)} {...p} />
    </label>
  );
}

export function SelectField({ label, children, ...p }: { label: string } & React.SelectHTMLAttributes<HTMLSelectElement>) {
  return (
    <label className="grid gap-1.5 text-sm font-medium text-slate-700">
      {label}
      <select className={base} {...p}>{children}</select>
    </label>
  );
}
