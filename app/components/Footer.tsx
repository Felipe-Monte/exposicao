export default function Footer() {
  return (
    <footer className="bg-stone-900 text-stone-400 px-6 py-6 border-t border-stone-800">
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-lg bg-[#66AFDA] flex items-center justify-center">
            <svg
              className="w-4 h-4 text-stone-900"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2.5"
                d="M12 3v18M5 9h14"
              />
            </svg>
          </div>
        </div>
        <p className="text-xs text-stone-500 text-center md:text-right">
          &copy; 2026. Todos os direitos reservados.
          <br />
          Criado com carinho para inspirar e unir.
        </p>
      </div>
    </footer>
  );
}
