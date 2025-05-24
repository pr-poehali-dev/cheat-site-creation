import { Button } from "@/components/ui/button";
import ScreenshotsDialog from "@/components/ScreenshotsDialog";

const Index = () => {
  const features = [
    {
      title: "ESP/Wallhack",
      description: "Видимость игроков через стены",
      icon: "👁️",
    },
    {
      title: "Aimbot",
      description: "Автоматическое наведение на цели",
      icon: "🎯",
    },
    {
      title: "Triggerbot",
      description: "Автоматическая стрельба по врагам",
      icon: "⚡",
    },
    {
      title: "Radar Hack",
      description: "Мини-карта с позициями врагов",
      icon: "📡",
    },
    {
      title: "No Recoil",
      description: "Убирает отдачу от оружия",
      icon: "🔫",
    },
    {
      title: "Speed Hack",
      description: "Увеличение скорости передвижения",
      icon: "💨",
    },
  ];

  const handleDownload = () => {
    window.open("https://disk.yandex.ru/d/Pu2ZrrCOgrz4qg", "_blank");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent glow-text">
            FENIKS CHEAT
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Самый продвинутый чит для доминирования в игре. Непобедимые
            возможности для настоящих профи.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button
              onClick={handleDownload}
              size="lg"
              className="px-12 py-6 text-lg font-bold bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 download-glow transition-all duration-300 transform hover:scale-105"
            >
              💾 СКАЧАТЬ ЧИТ
            </Button>
            <ScreenshotsDialog />
            <div className="text-sm text-gray-400">
              ✅ Обновлено • ✅ Безопасно • ✅ Бесплатно
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-6 neon-border hover:bg-slate-700/50 transition-all duration-300 transform hover:scale-105"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold text-purple-300 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Status Panel */}
        <div className="bg-slate-800/70 backdrop-blur-sm rounded-lg p-8 neon-border">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-green-400 mb-2">
                ✅ ONLINE
              </div>
              <div className="text-gray-400">Статус сервера</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-purple-400 mb-2">
                v2.1.5
              </div>
              <div className="text-gray-400">Последняя версия</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-yellow-400 mb-2">
                15,847
              </div>
              <div className="text-gray-400">Активных пользователей</div>
            </div>
          </div>
        </div>

        {/* Warning */}
        <div className="mt-12 text-center">
          <div className="bg-red-900/30 border border-red-500/50 rounded-lg p-4 inline-block">
            <p className="text-red-300 text-sm">
              ⚠️ Используйте на свой страх и риск. Мы не несем ответственности
              за возможные баны.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
