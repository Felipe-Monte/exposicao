export default function TextArea({ children }: { children: React.ReactNode }) {
  return (
    <div className="max-w-2xl mx-auto">
      <div className="font-serif text-lg text-stone-700 leading-relaxed space-y-6">
        {children}
      </div>
    </div>
  );
}
