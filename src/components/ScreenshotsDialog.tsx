import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const ScreenshotsDialog = () => {
  const [selectedImage, setSelectedImage] = useState(0);

  const screenshots = [
    {
      url: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=800&h=450&fit=crop&crop=center",
      title: "ESP/Wallhack в действии",
      description: "Видимость игроков через стены",
    },
    {
      url: "https://images.unsplash.com/photo-1593376853899-fbb47f7ca1db?w=800&h=450&fit=crop&crop=center",
      title: "Aimbot интерфейс",
      description: "Настройки автоматического наведения",
    },
    {
      url: "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=800&h=450&fit=crop&crop=center",
      title: "Radar Hack",
      description: "Мини-карта с позициями врагов",
    },
    {
      url: "https://images.unsplash.com/photo-1552820728-8b83bb6b773f?w=800&h=450&fit=crop&crop=center",
      title: "Меню чита",
      description: "Главное меню настроек",
    },
  ];

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          size="lg"
          variant="outline"
          className="px-12 py-6 text-lg font-bold border-purple-500 text-purple-300 hover:bg-purple-900/50 hover:border-purple-400 transition-all duration-300 transform hover:scale-105"
        >
          📸 СКРИНШОТЫ
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-4xl bg-slate-900 border-purple-500/50">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-purple-300">
            Скриншоты Feniks Cheat
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-4">
          {/* Main Image */}
          <div className="relative">
            <img
              src={screenshots[selectedImage].url}
              alt={screenshots[selectedImage].title}
              className="w-full h-64 object-cover rounded-lg border border-purple-500/30"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 rounded-b-lg">
              <h3 className="text-lg font-bold text-white mb-1">
                {screenshots[selectedImage].title}
              </h3>
              <p className="text-gray-300 text-sm">
                {screenshots[selectedImage].description}
              </p>
            </div>
          </div>

          {/* Thumbnails */}
          <div className="grid grid-cols-4 gap-2">
            {screenshots.map((screenshot, index) => (
              <button
                key={index}
                onClick={() => setSelectedImage(index)}
                className={`relative overflow-hidden rounded-lg border-2 transition-all duration-200 ${
                  selectedImage === index
                    ? "border-purple-400 scale-105"
                    : "border-gray-600 hover:border-purple-500"
                }`}
              >
                <img
                  src={screenshot.url}
                  alt={screenshot.title}
                  className="w-full h-16 object-cover"
                />
              </button>
            ))}
          </div>

          <div className="text-center text-gray-400 text-sm">
            ⚡ Все функции работают в последней версии CS2
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ScreenshotsDialog;
