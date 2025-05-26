import Link from "next/link";
import { Plan } from "@/data/plans";

interface PlanCardProps {
  plan: Plan;
}

export function PlanCard({ plan }: PlanCardProps) {
  return (
    <div className="flex flex-col w-full sm:w-[48%] md:w-[30%] lg:w-[22%] items-center gap-6 border-2 border-white/10 rounded-xl px-6 py-10 h-[650px] bg-black/30 backdrop-blur-sm hover:border-white/20 transition-all duration-300">
      <img src={plan.img} className="w-20 h-20" alt={plan.title} />
      <h1 className="font-[alexandria] text-white text-xl font-bold text-center">
        {plan.title}
      </h1>

      <div className="flex flex-col items-center gap-3">
        {plan.fullPrice ? (
          <>
            <p className="font-[alexandria] text-[#C7C7CC] text-sm">
              Em até 12x de
            </p>
            <p className="font-[alexandria] text-3xl font-bold bg-gradient-to-r from-[#C27AFF] to-[#007DF2] bg-clip-text text-transparent">
              {plan.price}
            </p>
            <p className="font-[alexandria] text-[#C7C7CC] text-sm">
              ou {plan.fullPrice}
            </p>
          </>
        ) : (
          <p className="font-[alexandria] text-2xl font-bold bg-gradient-to-r from-[#C27AFF] to-[#007DF2] bg-clip-text text-transparent">
            {plan.price}
          </p>
        )}
        {plan.fullPrice && (
          <p className="font-[Figtree] text-[#C7C7CC] text-sm">
            + R$95,00/mês de hospedagem, manutenção e suporte.
          </p>
        )}
      </div>

      <div className="flex flex-col gap-4 w-full flex-grow">
        {plan.descriptions.map((description, index) => (
          <div key={index} className="flex justify-start items-start gap-3">
            <img src="./check-circle.png" alt="" className="w-5 h-5 flex-shrink-0" />
            <p className="font-[Figtree] text-[#C7C7CC] text-sm leading-relaxed">{description}</p>
          </div>
        ))}
      </div>

      <Link
        href="https://api.whatsapp.com/send?phone=5511961645108"
        target="_blank"
        rel="noopener noreferrer"
        className="w-full mt-auto"
      >
        <button className="bg-gradient-to-r from-[#C27AFF] to-[#007DF2] text-white font-[Figtree] font-bold text-base px-4 py-3 rounded-xl w-full transition-all duration-300 hover:shadow-[0_0_20px_rgba(194,122,255,0.5)] hover:scale-[1.02]">
          Contratar Agora
        </button>
      </Link>
    </div>
  );
} 