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
    <div className="min-h-screen bg-[#f5f5f5]">
      <header className="bg-white border-b border-gray-200">
        <div className="container mx-auto px-6 py-6">
          <div className="flex justify-between items-center mb-4">
            <div className="flex items-center gap-4">
              <Icon name="ChefHat" className="text-primary" size={60} />
              <div>
                <h1 className="text-2xl font-bold text-gray-900 uppercase tracking-wide">НАЗВАНИЕ КОМПАНИИ</h1>
                <p className="text-sm text-gray-600">Кейтеринг и выездное обслуживание</p>
              </div>
            </div>
            <div className="text-right space-y-2">
              <div className="flex items-center justify-end gap-2">
                <Icon name="Phone" className="text-primary" size={20} />
                <div>
                  <a href="tel:+79001234567" className="text-gray-900 font-semibold hover:text-primary transition-colors block">
                    +7 (900) 123-45-67
                  </a>
                  <a href="tel:+79001234568" className="text-gray-900 font-semibold hover:text-primary transition-colors block">
                    +7 (900) 123-45-68
                  </a>
                </div>
              </div>
              <div className="flex items-center justify-end gap-2">
                <Icon name="MapPin" className="text-primary" size={20} />
                <span className="text-gray-700 text-sm">Москва, ул. Примерная, дом 1</span>
              </div>
            </div>
          </div>
        </div>
        <nav className="bg-gray-100 border-t border-gray-200">
          <div className="container mx-auto px-6">
            <ul className="flex gap-8 text-sm font-medium uppercase tracking-wide">
              <li><a href="#home" className="block py-4 hover:text-primary transition-colors">Главная</a></li>
              <li><a href="#about" className="block py-4 hover:text-primary transition-colors">О нас</a></li>
              <li><a href="#services" className="block py-4 hover:text-primary transition-colors">Услуги</a></li>
              <li><a href="#menu" className="block py-4 hover:text-primary transition-colors">Меню</a></li>
              <li><a href="#portfolio" className="block py-4 hover:text-primary transition-colors">Галерея</a></li>
              <li><a href="#contact" className="block py-4 hover:text-primary transition-colors">Контакты</a></li>
            </ul>
          </div>
        </nav>
      </header>

      <section id="home" className="relative bg-white">
        <div className="container mx-auto px-6 py-20">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8 animate-fade-in">
              <h2 className="text-7xl font-light text-gray-800 leading-tight">
                Свежие
              </h2>
              <h3 className="text-8xl font-black text-gray-900 leading-tight uppercase">
                ИДЕИ ДЛЯ
              </h3>
              <h2 className="text-6xl font-light text-gray-800 leading-tight">
                вашего кейтеринга
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed max-w-xl">
                Мы предлагаем полный спектр кейтеринговых услуг для организации мероприятий любого уровня: 
                от корпоративных завтраков до масштабных банкетов и свадеб.
              </p>
              <Dialog open={isBookingOpen} onOpenChange={setIsBookingOpen}>
                <DialogTrigger asChild>
                  <Button size="lg" className="bg-primary hover:bg-primary/90 text-white text-base px-10 py-6 uppercase tracking-wider font-bold shadow-lg">
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
            <div className="relative animate-slide-in-right">
              <div className="relative h-[600px] overflow-hidden rounded-lg shadow-2xl">
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
                  </div>
                ))}
              </div>
              <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
                {heroSlides.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-3 h-3 rounded-full transition-all ${
                      currentSlide === index ? 'bg-primary w-8' : 'bg-gray-400'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="py-20 px-6 bg-[#2d2d2d] text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-5xl font-bold mb-8 uppercase tracking-wide">О компании</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-10"></div>
          <p className="text-lg leading-relaxed mb-6 text-gray-300">
            Наша компания работает на рынке кейтеринга более 15 лет. За это время мы организовали 
            сотни успешных мероприятий и заслужили доверие наших клиентов благодаря высокому качеству 
            обслуживания и профессионализму команды.
          </p>
          <p className="text-lg leading-relaxed text-gray-300">
            Мы предлагаем индивидуальный подход к каждому клиенту, разрабатываем уникальные меню 
            и обеспечиваем безупречное проведение мероприятий любого формата.
          </p>
        </div>
      </section>

      <section id="services" className="py-20 px-6 bg-white">
        <div className="container mx-auto">
          <h2 className="text-5xl font-bold text-center mb-4 uppercase tracking-wide">Услуги</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-16"></div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border border-gray-200 hover:shadow-xl transition-all duration-300 bg-white">
              <CardContent className="p-0">
                <div className="h-64 overflow-hidden">
                  <img 
                    src="https://cdn.poehali.dev/files/510101d0-4de8-4d7c-bf71-66c225e2aebc.jpg"
                    alt="Услуга №1"
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-8 text-center">
                  <h3 className="text-2xl font-bold mb-4 uppercase">Услуга №1</h3>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    Организация корпоративных мероприятий с полным циклом обслуживания
                  </p>
                  <Button variant="outline" className="uppercase tracking-wide font-semibold">
                    Подробнее
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="border border-gray-200 hover:shadow-xl transition-all duration-300 bg-white">
              <CardContent className="p-0">
                <div className="h-64 overflow-hidden">
                  <img 
                    src="https://cdn.poehali.dev/files/c4117b02-f3a2-400d-be0b-c6d074a0aa0c.jpg"
                    alt="Услуга №2"
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-8 text-center">
                  <h3 className="text-2xl font-bold mb-4 uppercase">Услуга №2</h3>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    Выездное обслуживание банкетов и торжеств любого масштаба
                  </p>
                  <Button variant="outline" className="uppercase tracking-wide font-semibold">
                    Подробнее
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="border border-gray-200 hover:shadow-xl transition-all duration-300 bg-white">
              <CardContent className="p-0">
                <div className="h-64 overflow-hidden">
                  <img 
                    src="https://cdn.poehali.dev/files/ad5549c1-4f64-4891-a989-affb6f3b3455.jpg"
                    alt="Услуга №3"
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-8 text-center">
                  <h3 className="text-2xl font-bold mb-4 uppercase">Услуга №3</h3>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    Фуршеты и кофе-брейки для деловых мероприятий
                  </p>
                  <Button variant="outline" className="uppercase tracking-wide font-semibold">
                    Подробнее
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="menu" className="py-20 px-6 bg-[#f5f5f5]">
        <div className="container mx-auto">
          <h2 className="text-5xl font-bold text-center mb-4 uppercase tracking-wide">Цены</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-16"></div>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="border-2 border-gray-200 hover:border-primary transition-all duration-300 bg-white">
              <CardContent className="p-10 space-y-6">
                <div className="text-center pb-6 border-b border-gray-200">
                  <h3 className="text-2xl font-bold mb-4 uppercase tracking-wide">Эконом</h3>
                  <div className="text-5xl font-bold text-gray-900 mb-2">1200₽</div>
                  <div className="text-sm text-gray-600 uppercase tracking-wide">на человека</div>
                </div>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2"></div>
                    <span className="text-gray-700">Холодные закуски (3 вида)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2"></div>
                    <span className="text-gray-700">Горячее блюдо</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2"></div>
                    <span className="text-gray-700">Гарнир</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2"></div>
                    <span className="text-gray-700">Салат</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2"></div>
                    <span className="text-gray-700">Напитки</span>
                  </li>
                </ul>
                <Button className="w-full bg-primary hover:bg-primary/90 uppercase tracking-wide font-bold" onClick={() => setIsBookingOpen(true)}>
                  Заказать
                </Button>
              </CardContent>
            </Card>

            <Card className="border-2 border-primary shadow-xl relative bg-white transform scale-105">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-white px-8 py-2 text-sm font-bold uppercase tracking-wider">
                Популярный
              </div>
              <CardContent className="p-10 space-y-6">
                <div className="text-center pb-6 border-b border-gray-200">
                  <h3 className="text-2xl font-bold mb-4 uppercase tracking-wide">Стандарт</h3>
                  <div className="text-5xl font-bold text-gray-900 mb-2">2000₽</div>
                  <div className="text-sm text-gray-600 uppercase tracking-wide">на человека</div>
                </div>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2"></div>
                    <span className="text-gray-700">Холодные закуски (5 видов)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2"></div>
                    <span className="text-gray-700">Горячее блюдо (2 вида)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2"></div>
                    <span className="text-gray-700">Гарнир (2 вида)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2"></div>
                    <span className="text-gray-700">Салаты (2 вида)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2"></div>
                    <span className="text-gray-700">Десерт</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2"></div>
                    <span className="text-gray-700">Напитки расширенные</span>
                  </li>
                </ul>
                <Button className="w-full bg-primary hover:bg-primary/90 uppercase tracking-wide font-bold" onClick={() => setIsBookingOpen(true)}>
                  Заказать
                </Button>
              </CardContent>
            </Card>

            <Card className="border-2 border-gray-200 hover:border-primary transition-all duration-300 bg-white">
              <CardContent className="p-10 space-y-6">
                <div className="text-center pb-6 border-b border-gray-200">
                  <h3 className="text-2xl font-bold mb-4 uppercase tracking-wide">Премиум</h3>
                  <div className="text-5xl font-bold text-gray-900 mb-2">3500₽</div>
                  <div className="text-sm text-gray-600 uppercase tracking-wide">на человека</div>
                </div>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2"></div>
                    <span className="text-gray-700">Холодные закуски (7 видов)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2"></div>
                    <span className="text-gray-700">Горячее блюдо (3 вида)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2"></div>
                    <span className="text-gray-700">Морепродукты</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2"></div>
                    <span className="text-gray-700">Салаты (3 вида)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2"></div>
                    <span className="text-gray-700">Десертная станция</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2"></div>
                    <span className="text-gray-700">Напитки премиум</span>
                  </li>
                </ul>
                <Button className="w-full bg-primary hover:bg-primary/90 uppercase tracking-wide font-bold" onClick={() => setIsBookingOpen(true)}>
                  Заказать
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="portfolio" className="py-20 px-6 bg-white">
        <div className="container mx-auto">
          <h2 className="text-5xl font-bold text-center mb-4 uppercase tracking-wide">Галерея</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-16"></div>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="group relative overflow-hidden aspect-square bg-gray-100 border border-gray-200">
              <img 
                src="https://cdn.poehali.dev/files/ad5549c1-4f64-4891-a989-affb6f3b3455.jpg" 
                alt="Галерея 1" 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
            </div>
            
            <div className="group relative overflow-hidden aspect-square bg-gray-100 border border-gray-200">
              <img 
                src="https://cdn.poehali.dev/files/459a358f-8400-4f4d-b696-306c4c21dc23.jpg" 
                alt="Галерея 2" 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
            </div>
            
            <div className="group relative overflow-hidden aspect-square bg-gray-100 border border-gray-200">
              <img 
                src="https://cdn.poehali.dev/files/ec9b97cc-cbcb-41cb-8edc-d28c9f9d2325.jpg" 
                alt="Галерея 3" 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
            </div>
            
            <div className="group relative overflow-hidden aspect-square bg-gray-100 border border-gray-200">
              <img 
                src="https://cdn.poehali.dev/files/3eef41d9-c70e-4f58-a6e4-d743d0d828aa.jpg" 
                alt="Галерея 4" 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
            </div>
            
            <div className="group relative overflow-hidden aspect-square bg-gray-100 border border-gray-200">
              <img 
                src="https://cdn.poehali.dev/files/510101d0-4de8-4d7c-bf71-66c225e2aebc.jpg" 
                alt="Галерея 5" 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
            </div>
            
            <div className="group relative overflow-hidden aspect-square bg-gray-100 border border-gray-200">
              <img 
                src="https://cdn.poehali.dev/files/b94cb2f3-48de-42a1-99e9-4d6ad382b691.jpg" 
                alt="Галерея 6" 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 px-6 bg-[#2d2d2d] text-white">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-5xl font-bold text-center mb-4 uppercase tracking-wide">Контакты</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-16"></div>
          <div className="grid md:grid-cols-3 gap-12 mb-16">
            <div className="text-center">
              <div className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Icon name="Phone" className="text-primary" size={32} />
              </div>
              <h3 className="font-bold mb-4 uppercase text-sm tracking-wider">Телефоны</h3>
              <a href="tel:+79001234567" className="text-lg text-gray-300 hover:text-primary transition-colors block mb-2">
                +7 (900) 123-45-67
              </a>
              <a href="tel:+79001234568" className="text-lg text-gray-300 hover:text-primary transition-colors block">
                +7 (900) 123-45-68
              </a>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Icon name="Mail" className="text-primary" size={32} />
              </div>
              <h3 className="font-bold mb-4 uppercase text-sm tracking-wider">Email</h3>
              <a href="mailto:info@catering.ru" className="text-lg text-gray-300 hover:text-primary transition-colors">
                info@catering.ru
              </a>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Icon name="MapPin" className="text-primary" size={32} />
              </div>
              <h3 className="font-bold mb-4 uppercase text-sm tracking-wider">Адрес</h3>
              <div className="text-lg text-gray-300">
                Москва, ул. Примерная, дом 1
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

      <footer className="bg-[#1a1a1a] text-gray-400 py-12 px-6">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Icon name="ChefHat" className="text-primary" size={28} />
                <span className="text-xl font-bold text-white">FreshCatering</span>
              </div>
              <p className="text-sm leading-relaxed">
                Профессиональный кейтеринг для ваших мероприятий
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-4 uppercase text-sm tracking-wider text-white">Навигация</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#home" className="hover:text-primary transition-colors">Главная</a></li>
                <li><a href="#about" className="hover:text-primary transition-colors">О нас</a></li>
                <li><a href="#services" className="hover:text-primary transition-colors">Услуги</a></li>
                <li><a href="#menu" className="hover:text-primary transition-colors">Цены</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4 uppercase text-sm tracking-wider text-white">Услуги</h4>
              <ul className="space-y-2 text-sm">
                <li>Корпоративные мероприятия</li>
                <li>Банкеты и торжества</li>
                <li>Фуршеты</li>
                <li>Кофе-брейки</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4 uppercase text-sm tracking-wider text-white">Контакты</h4>
              <ul className="space-y-3 text-sm">
                <li className="flex items-center gap-2">
                  <Icon name="Phone" size={16} />
                  <a href="tel:+79001234567" className="hover:text-primary transition-colors">+7 (900) 123-45-67</a>
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="Mail" size={16} />
                  <a href="mailto:info@catering.ru" className="hover:text-primary transition-colors">info@catering.ru</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-sm">
            © 2024 FreshCatering. Все права защищены.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
