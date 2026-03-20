import { cn } from "@/lib/utils";

interface PhoneMockupProps {
  className?: string;
  screenIndex?: number;
  alt?: string;
}

const screens = [
  // Screen 1: Dashboard
  `<svg viewBox="0 0 320 640" xmlns="http://www.w3.org/2000/svg">
    <rect width="320" height="640" fill="#0a1210"/>
    <!-- Status bar -->
    <rect x="0" y="0" width="320" height="36" fill="#060b0a"/>
    <text x="24" y="23" font-family="monospace" font-size="11" fill="rgba(240,253,244,0.5)">9:41</text>
    <circle cx="280" cy="18" r="5" fill="rgba(240,253,244,0.3)"/>
    <rect x="290" y="14" width="16" height="8" rx="2" fill="none" stroke="rgba(240,253,244,0.3)" stroke-width="1.2"/>
    <rect x="291.5" y="15.5" width="11" height="5" rx="1" fill="rgba(34,197,94,0.8)"/>
    <!-- Header -->
    <text x="24" y="72" font-family="sans-serif" font-size="10" fill="rgba(240,253,244,0.4)" letter-spacing="2">CLARIUM</text>
    <text x="24" y="96" font-family="sans-serif" font-size="22" font-weight="700" fill="#f0fdf4">Olá, Carlos</text>
    <text x="24" y="114" font-family="sans-serif" font-size="12" fill="rgba(240,253,244,0.45)">Março 2025</text>
    <!-- Balance card -->
    <rect x="20" y="130" width="280" height="110" rx="16" fill="#0f1c19" stroke="rgba(34,197,94,0.15)" stroke-width="1"/>
    <text x="40" y="158" font-family="sans-serif" font-size="10" fill="rgba(240,253,244,0.45)" letter-spacing="1.5">SALDO TOTAL</text>
    <text x="40" y="186" font-family="sans-serif" font-size="28" font-weight="700" fill="#22c55e">R$ 3.420</text>
    <text x="40" y="204" font-family="sans-serif" font-size="11" fill="rgba(240,253,244,0.35)">,00</text>
    <rect x="40" y="218" width="80" height="8" rx="4" fill="rgba(34,197,94,0.15)"/>
    <rect x="40" y="218" width="52" height="8" rx="4" fill="rgba(34,197,94,0.5)"/>
    <text x="180" y="222" font-family="sans-serif" font-size="10" fill="rgba(240,253,244,0.35)">↑ +12% este mês</text>
    <!-- Quick stats -->
    <rect x="20" y="258" width="132" height="72" rx="12" fill="#0f1c19" stroke="rgba(34,197,94,0.12)" stroke-width="1"/>
    <rect x="164" y="258" width="136" height="72" rx="12" fill="#0f1c19" stroke="rgba(34,197,94,0.12)" stroke-width="1"/>
    <text x="36" y="281" font-family="sans-serif" font-size="9" fill="rgba(240,253,244,0.4)">RECEITAS</text>
    <text x="36" y="302" font-family="sans-serif" font-size="16" font-weight="600" fill="#4ade80">R$ 5.200</text>
    <text x="36" y="318" font-family="sans-serif" font-size="9" fill="rgba(240,253,244,0.3)">este mês</text>
    <text x="180" y="281" font-family="sans-serif" font-size="9" fill="rgba(240,253,244,0.4)">GASTOS</text>
    <text x="180" y="302" font-family="sans-serif" font-size="16" font-weight="600" fill="rgba(240,253,244,0.75)">R$ 1.780</text>
    <text x="180" y="318" font-family="sans-serif" font-size="9" fill="rgba(240,253,244,0.3)">este mês</text>
    <!-- Transactions -->
    <text x="24" y="358" font-family="sans-serif" font-size="12" font-weight="600" fill="rgba(240,253,244,0.9)">Transações recentes</text>
    <!-- tx 1 -->
    <circle cx="40" cy="386" r="14" fill="rgba(34,197,94,0.12)"/>
    <text x="40" y="391" font-family="sans-serif" font-size="13" fill="#4ade80" text-anchor="middle">↑</text>
    <text x="62" y="383" font-family="sans-serif" font-size="12" fill="rgba(240,253,244,0.85)">Salário</text>
    <text x="62" y="396" font-family="sans-serif" font-size="10" fill="rgba(240,253,244,0.35)">01 mar · Renda</text>
    <text x="296" y="383" font-family="sans-serif" font-size="12" font-weight="600" fill="#4ade80" text-anchor="end">+5.200</text>
    <!-- tx 2 -->
    <circle cx="40" cy="424" r="14" fill="rgba(240,253,244,0.06)"/>
    <text x="40" y="429" font-family="sans-serif" font-size="13" fill="rgba(240,253,244,0.4)" text-anchor="middle">↓</text>
    <text x="62" y="421" font-family="sans-serif" font-size="12" fill="rgba(240,253,244,0.85)">Aluguel</text>
    <text x="62" y="434" font-family="sans-serif" font-size="10" fill="rgba(240,253,244,0.35)">05 mar · Moradia</text>
    <text x="296" y="421" font-family="sans-serif" font-size="12" font-weight="600" fill="rgba(240,253,244,0.55)" text-anchor="end">-1.200</text>
    <!-- tx 3 -->
    <circle cx="40" cy="462" r="14" fill="rgba(240,253,244,0.06)"/>
    <text x="40" y="467" font-family="sans-serif" font-size="13" fill="rgba(240,253,244,0.4)" text-anchor="middle">↓</text>
    <text x="62" y="459" font-family="sans-serif" font-size="12" fill="rgba(240,253,244,0.85)">Supermercado</text>
    <text x="62" y="472" font-family="sans-serif" font-size="10" fill="rgba(240,253,244,0.35)">08 mar · Alimentação</text>
    <text x="296" y="459" font-family="sans-serif" font-size="12" font-weight="600" fill="rgba(240,253,244,0.55)" text-anchor="end">-320</text>
    <!-- Bottom nav -->
    <rect x="0" y="590" width="320" height="50" fill="#060b0a"/>
    <line x1="0" y1="590" x2="320" y2="590" stroke="rgba(34,197,94,0.1)" stroke-width="1"/>
    <text x="52" y="620" font-family="sans-serif" font-size="8" fill="#22c55e" text-anchor="middle">Início</text>
    <text x="136" y="620" font-family="sans-serif" font-size="8" fill="rgba(240,253,244,0.3)" text-anchor="middle">Transações</text>
    <text x="220" y="620" font-family="sans-serif" font-size="8" fill="rgba(240,253,244,0.3)" text-anchor="middle">Categorias</text>
    <text x="296" y="620" font-family="sans-serif" font-size="8" fill="rgba(240,253,244,0.3)" text-anchor="middle">Config.</text>
  </svg>`,

  // Screen 2: Transactions
  `<svg viewBox="0 0 320 640" xmlns="http://www.w3.org/2000/svg">
    <rect width="320" height="640" fill="#0a1210"/>
    <rect x="0" y="0" width="320" height="36" fill="#060b0a"/>
    <text x="24" y="23" font-family="monospace" font-size="11" fill="rgba(240,253,244,0.5)">9:41</text>
    <text x="24" y="68" font-family="sans-serif" font-size="22" font-weight="700" fill="#f0fdf4">Transações</text>
    <!-- Filter bar -->
    <rect x="20" y="82" width="80" height="28" rx="14" fill="rgba(34,197,94,0.15)" stroke="rgba(34,197,94,0.3)" stroke-width="1"/>
    <text x="60" y="100" font-family="sans-serif" font-size="11" fill="#22c55e" text-anchor="middle" font-weight="600">Todos</text>
    <rect x="108" y="82" width="80" height="28" rx="14" fill="rgba(240,253,244,0.04)" stroke="rgba(240,253,244,0.08)" stroke-width="1"/>
    <text x="148" y="100" font-family="sans-serif" font-size="11" fill="rgba(240,253,244,0.4)" text-anchor="middle">Receitas</text>
    <rect x="196" y="82" width="80" height="28" rx="14" fill="rgba(240,253,244,0.04)" stroke="rgba(240,253,244,0.08)" stroke-width="1"/>
    <text x="236" y="100" font-family="sans-serif" font-size="11" fill="rgba(240,253,244,0.4)" text-anchor="middle">Gastos</text>
    <!-- Month section -->
    <text x="24" y="138" font-family="sans-serif" font-size="11" fill="rgba(240,253,244,0.4)" letter-spacing="1">MARÇO 2025</text>
    <!-- Transactions list -->
    ${[
      { label: "Salário", cat: "Renda", date: "01", value: "+5.200", pos: true, icon: "↑" },
      { label: "Aluguel", cat: "Moradia", date: "05", value: "-1.200", pos: false, icon: "↓" },
      { label: "Supermercado", cat: "Alimentação", date: "08", value: "-320", pos: false, icon: "↓" },
      { label: "Streaming", cat: "Assinaturas", date: "10", value: "-45", pos: false, icon: "↓" },
      { label: "Freelance", cat: "Renda", date: "15", value: "+800", pos: true, icon: "↑" },
      { label: "Farmácia", cat: "Saúde", date: "18", value: "-87", pos: false, icon: "↓" },
      { label: "Transporte", cat: "Mobilidade", date: "20", value: "-210", pos: false, icon: "↓" },
    ].map((tx, i) => `
      <circle cx="40" cy="${158 + i * 52}" r="16" fill="${tx.pos ? 'rgba(34,197,94,0.12)' : 'rgba(240,253,244,0.05)'}"/>
      <text x="40" y="${164 + i * 52}" font-family="sans-serif" font-size="14" fill="${tx.pos ? '#4ade80' : 'rgba(240,253,244,0.35)'}" text-anchor="middle">${tx.icon}</text>
      <text x="66" y="${154 + i * 52}" font-family="sans-serif" font-size="12" fill="rgba(240,253,244,0.9)">${tx.label}</text>
      <text x="66" y="${167 + i * 52}" font-family="sans-serif" font-size="10" fill="rgba(240,253,244,0.3)">${tx.date} mar · ${tx.cat}</text>
      <text x="298" y="${154 + i * 52}" font-family="sans-serif" font-size="12" font-weight="600" fill="${tx.pos ? '#4ade80' : 'rgba(240,253,244,0.5)'}" text-anchor="end">${tx.value}</text>
      <line x1="64" y1="${176 + i * 52}" x2="300" y2="${176 + i * 52}" stroke="rgba(240,253,244,0.04)" stroke-width="1"/>
    `).join('')}
    <!-- Bottom nav -->
    <rect x="0" y="590" width="320" height="50" fill="#060b0a"/>
    <line x1="0" y1="590" x2="320" y2="590" stroke="rgba(34,197,94,0.1)" stroke-width="1"/>
    <text x="52" y="620" font-family="sans-serif" font-size="8" fill="rgba(240,253,244,0.3)" text-anchor="middle">Início</text>
    <text x="136" y="620" font-family="sans-serif" font-size="8" fill="#22c55e" text-anchor="middle">Transações</text>
    <text x="220" y="620" font-family="sans-serif" font-size="8" fill="rgba(240,253,244,0.3)" text-anchor="middle">Categorias</text>
    <text x="296" y="620" font-family="sans-serif" font-size="8" fill="rgba(240,253,244,0.3)" text-anchor="middle">Config.</text>
  </svg>`,

  // Screen 3: Add transaction
  `<svg viewBox="0 0 320 640" xmlns="http://www.w3.org/2000/svg">
    <rect width="320" height="640" fill="#0a1210"/>
    <rect x="0" y="0" width="320" height="36" fill="#060b0a"/>
    <text x="24" y="23" font-family="monospace" font-size="11" fill="rgba(240,253,244,0.5)">9:41</text>
    <text x="24" y="70" font-family="sans-serif" font-size="22" font-weight="700" fill="#f0fdf4">Nova transação</text>
    <!-- Type toggle -->
    <rect x="20" y="86" width="280" height="40" rx="12" fill="#0f1c19" stroke="rgba(34,197,94,0.1)" stroke-width="1"/>
    <rect x="24" y="90" width="134" height="32" rx="9" fill="rgba(34,197,94,0.18)" />
    <text x="91" y="111" font-family="sans-serif" font-size="12" font-weight="600" fill="#22c55e" text-anchor="middle">Gasto</text>
    <text x="233" y="111" font-family="sans-serif" font-size="12" fill="rgba(240,253,244,0.35)" text-anchor="middle">Receita</text>
    <!-- Amount field -->
    <text x="24" y="162" font-family="sans-serif" font-size="10" fill="rgba(240,253,244,0.4)" letter-spacing="1.5">VALOR</text>
    <rect x="20" y="170" width="280" height="52" rx="12" fill="#0f1c19" stroke="rgba(34,197,94,0.25)" stroke-width="1.5"/>
    <text x="36" y="203" font-family="sans-serif" font-size="22" font-weight="600" fill="#f0fdf4">R$ 320,00</text>
    <!-- Category -->
    <text x="24" y="250" font-family="sans-serif" font-size="10" fill="rgba(240,253,244,0.4)" letter-spacing="1.5">CATEGORIA</text>
    <rect x="20" y="258" width="280" height="48" rx="12" fill="#0f1c19" stroke="rgba(240,253,244,0.08)" stroke-width="1"/>
    <text x="36" y="288" font-family="sans-serif" font-size="13" fill="rgba(240,253,244,0.75)">Alimentação</text>
    <text x="290" y="288" font-family="sans-serif" font-size="14" fill="rgba(240,253,244,0.3)" text-anchor="end">›</text>
    <!-- Description -->
    <text x="24" y="332" font-family="sans-serif" font-size="10" fill="rgba(240,253,244,0.4)" letter-spacing="1.5">DESCRIÇÃO</text>
    <rect x="20" y="340" width="280" height="48" rx="12" fill="#0f1c19" stroke="rgba(240,253,244,0.08)" stroke-width="1"/>
    <text x="36" y="370" font-family="sans-serif" font-size="13" fill="rgba(240,253,244,0.75)">Supermercado</text>
    <!-- Date -->
    <text x="24" y="414" font-family="sans-serif" font-size="10" fill="rgba(240,253,244,0.4)" letter-spacing="1.5">DATA</text>
    <rect x="20" y="422" width="280" height="48" rx="12" fill="#0f1c19" stroke="rgba(240,253,244,0.08)" stroke-width="1"/>
    <text x="36" y="452" font-family="sans-serif" font-size="13" fill="rgba(240,253,244,0.75)">08 de março, 2025</text>
    <!-- Save button -->
    <rect x="20" y="492" width="280" height="52" rx="14" fill="#22c55e"/>
    <text x="160" y="523" font-family="sans-serif" font-size="15" font-weight="700" fill="#060b0a" text-anchor="middle">Salvar transação</text>
    <!-- Bottom nav -->
    <rect x="0" y="590" width="320" height="50" fill="#060b0a"/>
    <line x1="0" y1="590" x2="320" y2="590" stroke="rgba(34,197,94,0.1)" stroke-width="1"/>
    <text x="52" y="620" font-family="sans-serif" font-size="8" fill="rgba(240,253,244,0.3)" text-anchor="middle">Início</text>
    <text x="136" y="620" font-family="sans-serif" font-size="8" fill="rgba(240,253,244,0.3)" text-anchor="middle">Transações</text>
    <text x="220" y="620" font-family="sans-serif" font-size="8" fill="rgba(240,253,244,0.3)" text-anchor="middle">Categorias</text>
    <text x="296" y="620" font-family="sans-serif" font-size="8" fill="rgba(240,253,244,0.3)" text-anchor="middle">Config.</text>
  </svg>`,
];

export function PhoneMockup({ className, screenIndex = 0, alt = "Clarium app" }: PhoneMockupProps) {
  const screen = screens[screenIndex % screens.length];
  const encoded = `data:image/svg+xml;base64,${Buffer.from(screen).toString("base64")}`;

  return (
    <div
      className={cn(
        "relative select-none",
        className
      )}
      aria-label={alt}
      role="img"
    >
      {/* Phone shell */}
      <div className="relative w-[220px] mx-auto">
        {/* Outer bezel */}
        <div className="relative rounded-[2.8rem] p-[3px] bg-gradient-to-b from-[rgba(255,255,255,0.12)] to-[rgba(255,255,255,0.04)] shadow-2xl shadow-black/60">
          {/* Inner bezel */}
          <div className="rounded-[2.6rem] bg-[#0a0f0e] overflow-hidden border border-[rgba(255,255,255,0.05)]">
            {/* Notch */}
            <div className="absolute top-3 left-1/2 -translate-x-1/2 w-20 h-5 bg-[#060b0a] rounded-full z-10 flex items-center justify-center gap-2">
              <div className="w-2 h-2 rounded-full bg-[#1a1a1a]" />
              <div className="w-4 h-1.5 rounded-full bg-[#1a1a1a]" />
            </div>
            {/* Screen */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={encoded}
              alt={alt}
              className="w-full block"
              width={320}
              height={640}
            />
          </div>
        </div>
        {/* Side buttons */}
        <div className="absolute -right-[4px] top-24 w-[4px] h-10 bg-[rgba(255,255,255,0.07)] rounded-r-sm" />
        <div className="absolute -left-[4px] top-20 w-[4px] h-7 bg-[rgba(255,255,255,0.07)] rounded-l-sm" />
        <div className="absolute -left-[4px] top-32 w-[4px] h-7 bg-[rgba(255,255,255,0.07)] rounded-l-sm" />
        <div className="absolute -left-[4px] top-44 w-[4px] h-7 bg-[rgba(255,255,255,0.07)] rounded-l-sm" />
      </div>
      {/* Glow */}
      <div
        className="absolute -inset-8 -z-10 rounded-full opacity-25 blur-3xl"
        style={{ background: "radial-gradient(ellipse, rgba(34,197,94,0.4) 0%, transparent 70%)" }}
        aria-hidden
      />
    </div>
  );
}

export { screens };
