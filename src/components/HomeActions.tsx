import Image from 'next/image'

const features = [
  { name: 'Coleta', icon: '/1.png', notificationCount: 3 },
  { name: 'Tesouro', icon: '/2.png', notificationCount: 0 },
  { name: 'Resgatar', icon: '/3.png', notificationCount: 1 },
  { name: 'Bônus', icon: '/4.png', notificationCount: 0 },
  { name: 'VIP', icon: '/5.png', notificationCount: 5 },
  { name: 'Nível', icon: '/6.png', notificationCount: 2 },
  { name: 'Agente', icon: '/7.png', notificationCount: 0 },
  { name: 'Misterioso', icon: '/8.png', notificationCount: 4 },
  { name: 'Rebate', icon: '/9.png', notificationCount: 0 },
  { name: 'Promoção', icon: '/10.png', notificationCount: 6 },
]

export default function HomeActions() {
  return (
    <div className="mt-2">
      <div className="grid grid-cols-5 gap-2 justify-between items-center">
        {features.map((feature) => (
          <div key={feature.name} className="relative flex flex-col items-center">
            {/* Container para imagem e notificação */}
            <div className="relative mb-2">
              <div className="rounded-2xl overflow-hidden">
                <Image
                  src={feature.icon}
                  alt={feature.name}
                  width={48}
                  height={48}
                  className="w-full h-full object-fill"
                />
              </div>
              {/* Notificação posicionada acima */}
              {feature.notificationCount > 0 && (
                <span className="absolute top-[-6px] right-[-2px] bg-orange-500 border  text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center">
                  {feature.notificationCount}
                </span>
              )}
            </div>
            <span className="text-slate-600 text-[12px]">{feature.name}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
