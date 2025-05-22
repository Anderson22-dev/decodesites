import { Alexandria, Figtree } from "next/font/google";
import Link from "next/link";

const alexandria = Alexandria({ subsets: ["latin"] });
const figtree = Figtree({ subsets: ["latin"] });





export default function Home() {
  return (
    <div className={`${alexandria.className} ${figtree.className}`}>
      <section className="bg-[radial-gradient(ellipse_at_center,rgba(107,33,168,0.8)_0%,rgba(0,0,0,1)_40%,rgba(0,0,0,1)_100%)] h-[700px] flex flex-col items-center justify-center gap-16 p-20">
        <div className="text-center flex flex-col gap-12">
          <span>
            <h1 className="font-[alexandria] bg-clip-text text-transparent bg-gradient-to-r from-[#C27AFF] to-[#00D3F2] text-[2rem] sm:text-6xl font-bold">
              Sites Profissionais
            </h1>
            <h1 className="font-[alexandria] text-white text-[2rem] sm:text-6xl font-bold">
              para o seu negócio
            </h1>
          </span>
          <p className="text-xl sm:text-2xl font-[Figtree] font-semibold text-[#C7C7CC]">
            Somos especializados em projetar e desenvolver sites profissionais.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row sm:items-center gap-4">
          <button className="bg-gradient-to-r from-[#C27AFF]  to-[#007DF2] text-white font-[Figtree] font-bold text-xl px-5 py-5 rounded-xl">
            ★ Quero um site
          </button>
          <p className="text-xl sm:text-xl font-[Figtree] text-[#A15CFF]">
            Veja nossos serviços
          </p>
          <img src="./arrow-icon.png" className="w-6 h-6" alt="Ícone de seta" />
        </div>
      </section>
      <section className="bg-black px-[20px] sm:px-[80px] py-[80px] flex flex-col gap-[64px]">
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-[0.75rem] font-[alexandria] tracking-[12px] text-[#C7C7CC]">
            DESENVOLVIMENTO DE SITES
          </h1>
          <h1 className="text-[2rem] font-[alexandria] font-bold">
            Tenha sua presença online com um site
          </h1>
        </div>
        <div className="flex flex-col sm:flex-row gap-[64px]">
          <div className="flex flex-col w-full gap-[24px] border-2 border-white rounded-[1.25rem] px-[28px] py-[40px]">
            <h1 className="font-[alexandria] text-[1.25rem] font-bold">
              Copywriting Persuasivo
            </h1>
            <p className="font-[Figtree] text-[#C7C7CC] text-[1rem]">
              Textos que falam diretamente com seu público-alvo, destacando os
              benefícios do seu produto ou serviço e incentivando a ação.
            </p>
          </div>
          <div className="flex flex-col w-full gap-[24px] border-2 border-white rounded-[1.25rem] px-[28px] py-[40px]">
            <h1 className="font-[alexandria] text-[1.25rem] font-bold">
              Sites Otimizados para SEO
            </h1>
            <p className="font-[Figtree] text-[#C7C7CC] text-[1rem]">
              Desenvolvemos páginas que carregam rapidamente e são adaptadas
              para todos os dispositivos, melhorando sua posição nos mecanismos
              de busca.
            </p>
          </div>
          <div className="flex flex-col w-full gap-[24px] border-2 border-white rounded-[1.25rem] px-[28px] py-[40px]">
            <h1 className="font-[alexandria] text-[1.25rem] font-bold">
              Design Estratégico
            </h1>
            <p className="font-[Figtree] text-[#C7C7CC] text-[1rem]">
              Criamos layouts que guiam o visitante até a ação desejada,
              utilizando princípios de UX e psicologia do consumidor para
              maximizar resultados.
            </p>
          </div>
        </div>
      </section>
      <section className="bg-[url('../../public/background.png')] bg-no-repeat bg-center sm:bg-cover px-[20px] sm:px-[80px] py-[80px] flex flex-col gap-[80px]">
        <div className="flex flex-col gap-[64px]">
          <div className="flex flex-col items-center justify-center">
            <h1 className="text-[0.75rem] font-[alexandria] tracking-[12px] text-[#C7C7CC]">
              ETAPAS
            </h1>
            <h1 className="text-[2rem] font-[alexandria] font-bold">
              COMO FUNCIONA?
            </h1>
          </div>
          <div className="flex flex-col gap-[32px] sm:flex-row sm:gap-[48px] md:gap-[64px]">
            {[
              {
                img: "./whatsapp-icon.png",
                title: "1. Escolha o serviço e entre em contato",
              },
              {
                img: "./file-check-icon.png",
                title: "2. Envie textos e imgns que deseja usar no site.",
              },
              {
                img: "./deployment-icon.png",
                title:
                  "3. O desenvolvimento começa e logo seu site está no ar!",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="flex flex-col gap-[24px] w-full items-center justify-center border-2 border-white rounded-[1.25rem] bg-black/50 backdrop-blur-[20px] px-6 py-8 md:px-9 md:py-10"
              >
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-[2rem] h-[2rem] md:w-[2.5rem] md:h-[2.5rem]"
                />
                <h1 className="font-[alexandria] text-[1rem] md:text-[1.25rem] font-bold text-center">
                  {item.title}
                </h1>
              </div>
            ))}
          </div>
        </div>
        <div className="bg-black/50 backdrop-blur-[20px] rounded-[1.25rem] px-[40px] py-[40px] flex flex-col gap-[64px]">
          <h1 className="text-[2rem] font-[alexandria] font-bold">
            SEU SITE CRIADO COM QUALIDADE E EXCELÊNCIA
          </h1>
          <div className="flex gap-[12px]">
            <img
              src="./trending-up.png"
              alt=""
              className="w-[2.5rem] h-[2.5rem]"
            />
            <div>
              <h1 className="font-[alexandria] text-[1.5rem] font-bold">
                Aumento nas Conversões
              </h1>
              <p className="font-[Figtree] text-[#C7C7CC] text-[1rem]">
                Designs otimizados para conversão que transformam visitantes em
                clientes e aumentam sua taxa de conversão.
              </p>
            </div>
          </div>
          <div className="flex gap-[12px]">
            <img src="./phone.png" alt="" className="w-[2.5rem] h-[2.5rem]" />
            <div>
              <h1 className="font-[alexandria] text-[1.5rem] font-bold">
                Sites Responsivos
              </h1>
              <p className="font-[Figtree] text-[#C7C7CC] text-[1rem]">
                Vamos garantir que o seu site funcione em todos os dispositivos.
              </p>
            </div>
          </div>
          <div className="flex gap-[12px]">
            <img src="./code.png" alt="" className="w-[2.5rem] h-[2.5rem]" />
            <div>
              <h1 className="font-[alexandria] text-[1.5rem] font-bold">
                Código de Qualidade
              </h1>
              <p className="font-[Figtree] text-[#C7C7CC] text-[1rem]">
                Desenvolvimento com as melhores práticas que garantem
                velocidade, segurança e facilidade de manutenção.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-radial from-[#0E1629] from-30% to-black px-5 sm:px-20 py-20 flex flex-col gap-12">
        <div className="flex flex-col items-center justify-center text-center">
          <h1 className="text-xs sm:text-sm font-[alexandria] tracking-[12px] text-[#C7C7CC]">
            NOS CONTRATE
          </h1>
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-[alexandria] font-bold">
            ESCOLHA O SERVIÇO E ENTRE EM CONTATO
          </h1>
        </div>

        <div className="flex flex-wrap gap-6 justify-center">
          {[
            {
              img: "./figma.png",
              title: "Layout no Figma",
              price: "R$ 34,00",
              fullPrice: "R$ 349,00 à vista",
              desc1: "Construção do design no Figma",
              desc2: "Design Personalizado",
              desc3: "100% Responsivo",
            },
            {
              img: "./window.png",
              title: "Criação de Landing Page",
              price: "R$ 69,00",
              fullPrice: "R$ 697,00 à vista",
              desc1: "Design no Figma e implementação",
              desc2: "Design Personalizado",
              desc3: "100% Responsivo",
            },
            {
              img: "./layout.png",
              title: "Site Institucional",
              price: "R$ 259,00",
              fullPrice: "R$ 2597,00 à vista",
              desc1: "Construção do design no Figma",
              desc2: "Design Personalizado",
              desc3: "100% Responsivo",
            },
            {
              img: "./settings.png",
              title: "Site Sob Medida",
              price: "Sob Orçamento",
              fullPrice: "",
              desc1: "Construção do design no Figma",
              desc2: "Design Personalizado",
              desc3: "100% Responsivo",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="flex flex-col w-full sm:w-[48%] md:w-[30%] lg:w-[22%] items-center gap-6 border-2 border-white rounded-xl px-6 py-10"
            >
              <img src={item.img} className="w-20 h-20" alt={item.title} />
              <h1 className="font-[Figtree] text-[#C7C7CC] text-lg font-semibold text-center">
                {item.title}
              </h1>

              <div className="flex flex-col items-center gap-3">
                {item.fullPrice ? (
                  <>
                    <p className="font-[alexandria] text-base font-bold">
                      Em até 12x de
                    </p>
                    <p className="font-[alexandria] text-2xl leading-8 font-bold">
                      {item.price}
                    </p>
                    <p className="font-[alexandria] text-base font-bold">
                      ou {item.fullPrice}
                    </p>
                  </>
                ) : (
                  <p className="font-[alexandria] text-xl font-bold">
                    {item.price}
                  </p>
                )}
              </div>

              <div className="flex w-full justify-start items-start gap-3">
                <img src="./check-circle.png" alt="" />
                <p className="font-[Figtree] text-sm">{item.desc1}</p>
              </div>
              <div className="flex w-full justify-start items-start gap-3">
                <img src="./check-circle.png" alt="" />
                <p className="font-[Figtree] text-sm">{item.desc2}</p>
              </div>
              <div className="flex w-full justify-start items-start gap-3">
                <img src="./check-circle.png" alt="" />
                <p className="font-[Figtree] text-sm">{item.desc3}</p>
              </div>

              <button className="bg-[#34C759] text-white font-[Figtree] font-bold text-lg px-4 py-3 rounded-3xl w-full">
                Contratar Agora
              </button>
            </div>
          ))}
        </div>
      </section>
      <section className="bg-black px-[20px] sm:px-[80px] py-[80px] flex flex-col gap-[64px]">
        <h1 className="text-[2rem] font-[alexandria] font-bold">
          DÚVIDAS FREQUENTES
        </h1>
        <div className="flex flex-col gap-4">
          {[
            {
              title: "Como um site ajuda o meu negócio?",
              desc: "Um site é uma ferramenta poderosa para expandir sua base de clientes. Ao disponibilizar informações sobre sua expertise, áreas de atuação e casos anteriores, você pode atrair potenciais clientes que estão buscando os produtos que você oferece. Além disso, um site que esteja posicionado entre os primeiros nos resultados do Google pode aumentar sua visibilidade online, permitindo que você seja encontrado por aqueles que precisam de seus serviços."
            },
            {
              title: "Quanto tempo leva para meu site ficar pronto?",
              desc: "depende bastante do tipo de projeto, mas geralmente tem um prazo médio de 7 a 15 dias úteis."
            },            
          ].map((item, index) => (
            <div key={index} className="flex flex-col gap-4 border-2 border-white rounded-xl px-6 py-10">
              <h1 className="font-[alexandria] text-[1.25rem] font-bold">{item.title}</h1>
              <p className="font-[Figtree] text-[#C7C7CC] text-[1rem]">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>
      <footer className="border-t border-gray-800 py-12">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 md:grid-cols-4">
            <div>
              <div className="flex items-center gap-2">
                             
                <span className="text-lg font-bold">Decode Sites</span>
              </div>
              <p className="mt-4 text-sm text-gray-400">
                Criamos sites profissionais que convertem visitantes em clientes.
              </p>
            </div>
            
            <div>
              <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider">Empresa</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <p className="hover:text-white">
                    Sobre nós
                  </p>
                </li>
                <li>
                  <p className="hover:text-white">
                    Portfólio
                  </p>
                </li>
                <li>
                  <p className="hover:text-white">
                    Blog
                  </p>
                </li>
                <li>
                  <p className="hover:text-white">
                    Contato
                  </p>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider">Contato</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li className="flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-purple-400"
                  >
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                  <span>(11) 96164-5108</span>
                </li>
                <li className="flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-purple-400"
                  >
                    <rect width="20" height="16" x="2" y="4" rx="2" />
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                  </svg>
                  <span>decodesites@gmail.com</span>
                </li>
              </ul>
              <div className="mt-4 flex gap-4">
                <Link href="#" className="text-gray-400 hover:text-white">
                  <span className="sr-only">Instagram</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
          <div className="mt-8 border-t border-gray-800 pt-8 text-center">
            <p className="text-xs text-gray-400">
              &copy; 2025 TechSites. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
