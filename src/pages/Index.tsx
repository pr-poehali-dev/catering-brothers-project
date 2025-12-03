import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Calendar } from '@/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import Icon from '@/components/ui/icon';
import { format } from 'date-fns';
import { ru } from 'date-fns/locale';

const Index = () => {
  const [date, setDate] = useState<Date>();
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    eventType: '',
    guests: '',
    message: ''
  });

  const heroSlides = [
    'https://cdn.poehali.dev/files/78a0a3b4-0330-4de1-91ec-2c68f965c4ec.jpg',
    'https://cdn.poehali.dev/files/c4117b02-f3a2-400d-be0b-c6d074a0aa0c.jpg',
    'https://cdn.poehali.dev/files/510101d0-4de8-4d7c-bf71-66c225e2aebc.jpg'
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Booking submitted:', { ...formData, date });
    setIsBookingOpen(false);
    alert('Спасибо! Мы свяжемся с вами в ближайшее время.');
  };

  return (
    <div className="min-h-screen bg-white">
      <nav className="absolute top-0 w-full bg-white/95 backdrop-blur-sm z-50 shadow-sm">
        <div className="container mx-auto px-6 py-3">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              <Icon name="ChefHat" className="text-primary" size={32} />
              <span className="text-2xl font-bold text-foreground">FreshCatering</span>
            </div>
            <div className="hidden lg:flex gap-6 text-sm font-medium uppercase tracking-wide">
              <a href="#home" className="hover:text-primary transition-colors py-2">Главная</a>
              <a href="#about" className="hover:text-primary transition-colors py-2">О нас</a>
              <a href="#services" className="hover:text-primary transition-colors py-2">Услуги</a>
              <a href="#menu" className="hover:text-primary transition-colors py-2">Меню</a>
              <a href="#portfolio" className="hover:text-primary transition-colors py-2">Галерея</a>
              <a href="#contact" className="hover:text-primary transition-colors py-2">Контакты</a>
            </div>
            <div className="flex items-center gap-4">
              <a href="tel:+79001234567" className="text-sm font-bold text-foreground hover:text-primary transition-colors">
                +7 (900) 123-45-67
              </a>
            </div>
          </div>
        </div>
      </nav>

      <section id="home" className="relative h-screen overflow-hidden">
        {heroSlides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              currentSlide === index ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img 
              src={slide}
              alt={`Кейтеринг слайд ${index + 1}`}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/40"></div>
          </div>
        ))}
        
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="container mx-auto px-6 text-center text-white">
            <div className="max-w-4xl mx-auto space-y-8">
              <h1 className="text-6xl md:text-8xl font-bold leading-tight animate-fade-in">
                <span className="block text-white/90 text-5xl md:text-6xl mb-2">Свежие</span>
                <span className="block text-white text-7xl md:text-9xl font-black mb-2">ИДЕИ ДЛЯ</span>
                <span className="block text-white/90 text-5xl md:text-7xl">вашего кейтеринга</span>
              </h1>
              <p className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto">
                Организуем банкеты, корпоративы и праздники любого масштаба с кулинарными шоу
              </p>
              <Dialog open={isBookingOpen} onOpenChange={setIsBookingOpen}>
                <DialogTrigger asChild>
                  <Button size="lg" className="bg-primary hover:bg-primary/90 text-white text-lg px-12 py-6 rounded-sm uppercase tracking-wider font-bold shadow-2xl">
                    Оставить заявку
                  </Button>
                </DialogTrigger>
                <DialogContent className="max-w-md max-h-[90vh] overflow-y-auto">
                  <DialogHeader>
                    <DialogTitle>Онлайн-бронирование</DialogTitle>
                  </DialogHeader>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Имя *</Label>
                      <Input 
                        id="name" 
                        required 
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Телефон *</Label>
                      <Input 
                        id="phone" 
                        type="tel" 
                        required 
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input 
                        id="email" 
                        type="email" 
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="eventType">Тип мероприятия *</Label>
                      <Select required value={formData.eventType} onValueChange={(value) => setFormData({...formData, eventType: value})}>
                        <SelectTrigger>
                          <SelectValue placeholder="Выберите тип" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="wedding">Свадьба</SelectItem>
                          <SelectItem value="banquet">Банкет</SelectItem>
                          <SelectItem value="corporate">Корпоратив</SelectItem>
                          <SelectItem value="buffet">Фуршет</SelectItem>
                          <SelectItem value="other">Другое</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label>Дата мероприятия *</Label>
                      <Popover>
                        <PopoverTrigger asChild>
                          <Button variant="outline" className="w-full justify-start text-left font-normal">
                            <Icon name="Calendar" className="mr-2" size={16} />
                            {date ? format(date, 'PPP', { locale: ru }) : 'Выберите дату'}
                          </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0">
                          <Calendar
                            mode="single"
                            selected={date}
                            onSelect={setDate}
                            locale={ru}
                            disabled={(date) => date < new Date()}
                          />
                        </PopoverContent>
                      </Popover>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="guests">Количество гостей</Label>
                      <Input 
                        id="guests" 
                        type="number" 
                        value={formData.guests}
                        onChange={(e) => setFormData({...formData, guests: e.target.value})}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="message">Дополнительная информация</Label>
                      <Textarea 
                        id="message" 
                        rows={3} 
                        value={formData.message}
                        onChange={(e) => setFormData({...formData, message: e.target.value})}
                      />
                    </div>
                    <Button type="submit" className="w-full bg-primary hover:bg-primary/90">
                      Отправить заявку
                    </Button>
                  </form>
                </DialogContent>
              </Dialog>
            </div>
          </div>
        </div>

        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex gap-3">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                currentSlide === index ? 'bg-white w-8' : 'bg-white/50'
              }`}
            />
          ))}
        </div>

        <button
          onClick={() => setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length)}
          className="absolute left-6 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm p-3 rounded-full transition-all"
        >
          <Icon name="ChevronLeft" className="text-white" size={32} />
        </button>
        <button
          onClick={() => setCurrentSlide((prev) => (prev + 1) % heroSlides.length)}
          className="absolute right-6 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm p-3 rounded-full transition-all"
        >
          <Icon name="ChevronRight" className="text-white" size={32} />
        </button>
      </section>

      <section id="about" className="py-24 px-6 bg-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 uppercase tracking-wide">О компании</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-8"></div>
          <p className="text-lg text-muted-foreground leading-relaxed mb-6">
            FreshCatering — это профессиональная кейтеринговая компания с 15-летним опытом организации мероприятий любого масштаба. 
            Мы специализируемся на выездном обслуживании свадеб, банкетов, корпоративных событий и фуршетов.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Наша команда поваров создает не просто блюда — мы дарим незабываемые кулинарные впечатления с эффектными шоу, 
            профессиональной подачей и безупречным сервисом.
          </p>
        </div>
      </section>

      <section id="services" className="py-24 px-6 bg-muted">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 uppercase tracking-wide">Наши услуги</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-16"></div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="hover:shadow-xl transition-all duration-300 border-0 bg-white group">
              <CardContent className="p-0">
                <div className="h-64 overflow-hidden">
                  <img 
                    src="https://cdn.poehali.dev/files/510101d0-4de8-4d7c-bf71-66c225e2aebc.jpg"
                    alt="Банкеты"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-xl font-bold mb-3 uppercase">Банкеты</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Организация банкетов от 10 до 500 гостей с полным сервисом
                  </p>
                </div>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-xl transition-all duration-300 border-0 bg-white group">
              <CardContent className="p-0">
                <div className="h-64 overflow-hidden">
                  <img 
                    src="https://cdn.poehali.dev/files/3eef41d9-c70e-4f58-a6e4-d743d0d828aa.jpg"
                    alt="Корпоративы"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-xl font-bold mb-3 uppercase">Корпоративы</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Профессиональное обслуживание корпоративных мероприятий
                  </p>
                </div>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-xl transition-all duration-300 border-0 bg-white group">
              <CardContent className="p-0">
                <div className="h-64 overflow-hidden">
                  <img 
                    src="https://cdn.poehali.dev/files/c4117b02-f3a2-400d-be0b-c6d074a0aa0c.jpg"
                    alt="Кулинарные шоу"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-xl font-bold mb-3 uppercase">Кулинарные шоу</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Эффектные шоу с огнем, дымом и театральной подачей
                  </p>
                </div>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-xl transition-all duration-300 border-0 bg-white group">
              <CardContent className="p-0">
                <div className="h-64 overflow-hidden">
                  <img 
                    src="https://cdn.poehali.dev/files/ad5549c1-4f64-4891-a989-affb6f3b3455.jpg"
                    alt="Фуршеты"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-xl font-bold mb-3 uppercase">Фуршеты</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Выездные фуршеты с изысканными закусками и канапе
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="menu" className="py-24 px-6 bg-white">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 uppercase tracking-wide">Банкетные меню</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-16"></div>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="border-2 hover:border-primary transition-all duration-300 bg-white">
              <CardContent className="p-8 space-y-6">
                <div className="text-center border-b pb-6">
                  <h3 className="text-2xl font-bold mb-3 uppercase">Классика</h3>
                  <div className="text-4xl font-bold text-primary">1500₽</div>
                  <div className="text-sm text-muted-foreground mt-1">на человека</div>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                    <span className="text-sm">Салаты (3 вида)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                    <span className="text-sm">Горячее блюдо</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                    <span className="text-sm">Гарнир (2 вида)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                    <span className="text-sm">Хлебная корзина</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                    <span className="text-sm">Напитки</span>
                  </li>
                </ul>
                <Button className="w-full bg-primary hover:bg-primary/90 uppercase tracking-wide" onClick={() => setIsBookingOpen(true)}>
                  Выбрать
                </Button>
              </CardContent>
            </Card>

            <Card className="border-2 border-primary shadow-xl relative bg-white scale-105">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-white px-6 py-1.5 text-sm font-bold uppercase tracking-wide">
                Хит
              </div>
              <CardContent className="p-8 space-y-6">
                <div className="text-center border-b pb-6">
                  <h3 className="text-2xl font-bold mb-3 uppercase">Премиум</h3>
                  <div className="text-4xl font-bold text-primary">2500₽</div>
                  <div className="text-sm text-muted-foreground mt-1">на человека</div>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                    <span className="text-sm">Салаты (5 видов)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                    <span className="text-sm">Горячее блюдо (2 вида)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                    <span className="text-sm">Гарнир (3 вида)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                    <span className="text-sm">Морепродукты</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                    <span className="text-sm">Десерты</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                    <span className="text-sm">Напитки премиум</span>
                  </li>
                </ul>
                <Button className="w-full bg-primary hover:bg-primary/90 uppercase tracking-wide" onClick={() => setIsBookingOpen(true)}>
                  Выбрать
                </Button>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-primary transition-all duration-300 bg-white">
              <CardContent className="p-8 space-y-6">
                <div className="text-center border-b pb-6">
                  <h3 className="text-2xl font-bold mb-3 uppercase">VIP</h3>
                  <div className="text-4xl font-bold text-primary">4000₽</div>
                  <div className="text-sm text-muted-foreground mt-1">на человека</div>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                    <span className="text-sm">Салаты авторские (7 видов)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                    <span className="text-sm">Горячее блюдо (3 вида)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                    <span className="text-sm">Морепродукты деликатесы</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                    <span className="text-sm">Кулинарное шоу</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                    <span className="text-sm">Десертная станция</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                    <span className="text-sm">Напитки элит</span>
                  </li>
                </ul>
                <Button className="w-full bg-primary hover:bg-primary/90 uppercase tracking-wide" onClick={() => setIsBookingOpen(true)}>
                  Выбрать
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="portfolio" className="py-24 px-6 bg-muted">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 uppercase tracking-wide">Галерея работ</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-16"></div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="group relative overflow-hidden aspect-square bg-white">
              <img 
                src="https://cdn.poehali.dev/files/ad5549c1-4f64-4891-a989-affb6f3b3455.jpg" 
                alt="Брускетты с лососем" 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <p className="text-white font-bold text-xl uppercase">Брускетты с лососем</p>
              </div>
            </div>
            
            <div className="group relative overflow-hidden aspect-square bg-white">
              <img 
                src="https://cdn.poehali.dev/files/459a358f-8400-4f4d-b696-306c4c21dc23.jpg" 
                alt="Шашлык на огне" 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <p className="text-white font-bold text-xl uppercase">Шашлык шоу</p>
              </div>
            </div>
            
            <div className="group relative overflow-hidden aspect-square bg-white">
              <img 
                src="https://cdn.poehali.dev/files/ec9b97cc-cbcb-41cb-8edc-d28c9f9d2325.jpg" 
                alt="Мастер-класс" 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <p className="text-white font-bold text-xl uppercase">Мастер-класс</p>
              </div>
            </div>
            
            <div className="group relative overflow-hidden aspect-square bg-white">
              <img 
                src="https://cdn.poehali.dev/files/3eef41d9-c70e-4f58-a6e4-d743d0d828aa.jpg" 
                alt="Мини бургеры" 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <p className="text-white font-bold text-xl uppercase">Мини бургеры</p>
              </div>
            </div>
            
            <div className="group relative overflow-hidden aspect-square bg-white">
              <img 
                src="https://cdn.poehali.dev/files/510101d0-4de8-4d7c-bf71-66c225e2aebc.jpg" 
                alt="Корпоративный фуршет" 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <p className="text-white font-bold text-xl uppercase">Фуршет</p>
              </div>
            </div>
            
            <div className="group relative overflow-hidden aspect-square bg-white">
              <img 
                src="https://cdn.poehali.dev/files/b94cb2f3-48de-42a1-99e9-4d6ad382b691.jpg" 
                alt="Десерт-шоу" 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <p className="text-white font-bold text-xl uppercase">Десерт-шоу</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="py-24 px-6 bg-white">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 uppercase tracking-wide">Контакты</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-16"></div>
          <div className="grid md:grid-cols-3 gap-12 mb-16">
            <div className="text-center">
              <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Phone" className="text-primary" size={32} />
              </div>
              <h3 className="font-bold mb-3 uppercase text-sm tracking-wide">Телефон</h3>
              <a href="tel:+79001234567" className="text-lg text-muted-foreground hover:text-primary transition-colors">
                +7 (900) 123-45-67
              </a>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Mail" className="text-primary" size={32} />
              </div>
              <h3 className="font-bold mb-3 uppercase text-sm tracking-wide">Email</h3>
              <a href="mailto:info@freshcatering.ru" className="text-lg text-muted-foreground hover:text-primary transition-colors">
                info@freshcatering.ru
              </a>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="MapPin" className="text-primary" size={32} />
              </div>
              <h3 className="font-bold mb-3 uppercase text-sm tracking-wide">Адрес</h3>
              <div className="text-lg text-muted-foreground">
                г. Москва, ул. Примерная, 1
              </div>
            </div>
          </div>
          <div className="text-center">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-lg px-12 py-6 uppercase tracking-wider font-bold" onClick={() => setIsBookingOpen(true)}>
              Оставить заявку
            </Button>
          </div>
        </div>
      </section>

      <footer className="bg-foreground text-white py-16 px-6">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Icon name="ChefHat" className="text-primary" size={28} />
                <span className="text-xl font-bold">FreshCatering</span>
              </div>
              <p className="text-sm text-gray-400 leading-relaxed">
                Профессиональный кейтеринг для вашего идеального события
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-4 uppercase text-sm tracking-wide">Навигация</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#home" className="hover:text-primary transition-colors">Главная</a></li>
                <li><a href="#about" className="hover:text-primary transition-colors">О нас</a></li>
                <li><a href="#services" className="hover:text-primary transition-colors">Услуги</a></li>
                <li><a href="#menu" className="hover:text-primary transition-colors">Меню</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4 uppercase text-sm tracking-wide">Услуги</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>Банкеты</li>
                <li>Корпоративы</li>
                <li>Кулинарные шоу</li>
                <li>Фуршеты</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4 uppercase text-sm tracking-wide">Контакты</h4>
              <ul className="space-y-3 text-sm text-gray-400">
                <li className="flex items-center gap-2">
                  <Icon name="Phone" size={16} />
                  <a href="tel:+79001234567" className="hover:text-primary transition-colors">+7 (900) 123-45-67</a>
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="Mail" size={16} />
                  <a href="mailto:info@freshcatering.ru" className="hover:text-primary transition-colors">info@freshcatering.ru</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-sm text-gray-400">
            © 2024 FreshCatering. Все права защищены.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
