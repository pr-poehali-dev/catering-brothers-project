import { useState } from 'react';
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
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    eventType: '',
    guests: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Booking submitted:', { ...formData, date });
    setIsBookingOpen(false);
    alert('Спасибо! Мы свяжемся с вами в ближайшее время.');
  };

  return (
    <div className="min-h-screen bg-white">
      <nav className="fixed top-0 w-full bg-white border-b border-border z-50 shadow-sm">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              <Icon name="ChefHat" className="text-primary" size={28} />
              <span className="text-2xl font-bold text-primary">FreshCatering</span>
            </div>
            <div className="hidden lg:flex gap-8 text-sm font-medium">
              <a href="#home" className="hover:text-primary transition-colors">Главная</a>
              <a href="#services" className="hover:text-primary transition-colors">Услуги</a>
              <a href="#menu" className="hover:text-primary transition-colors">Меню</a>
              <a href="#portfolio" className="hover:text-primary transition-colors">Портфолио</a>
              <a href="#contact" className="hover:text-primary transition-colors">Контакты</a>
            </div>
            <div className="flex items-center gap-4">
              <a href="tel:+79001234567" className="text-sm font-semibold text-foreground hover:text-primary transition-colors">
                +7 (900) 123-45-67
              </a>
              <Dialog open={isBookingOpen} onOpenChange={setIsBookingOpen}>
                <DialogTrigger asChild>
                  <Button className="bg-secondary hover:bg-secondary/90 text-white rounded-md">
                    Заказать
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
                    <Button type="submit" className="w-full bg-secondary hover:bg-secondary/90">
                      Отправить заявку
                    </Button>
                  </form>
                </DialogContent>
              </Dialog>
            </div>
          </div>
        </div>
      </nav>

      <section id="home" className="pt-32 pb-20 px-6">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight text-foreground">
                Свежий кейтеринг для вашего <span className="text-primary">события</span>
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Организуем кулинарные шоу, банкеты и фуршеты любого масштаба. Только свежие продукты, эффектная подача и профессиональный сервис.
              </p>
              <div className="flex gap-4">
                <Button size="lg" className="bg-secondary hover:bg-secondary/90 rounded-md text-white px-8" onClick={() => setIsBookingOpen(true)}>
                  Заказать кейтеринг
                </Button>
                <Button size="lg" variant="outline" className="rounded-md border-2">
                  <a href="#services">Наши услуги</a>
                </Button>
              </div>
              <div className="grid grid-cols-3 gap-6 pt-4">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">500+</div>
                  <div className="text-sm text-muted-foreground mt-1">Мероприятий</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">98%</div>
                  <div className="text-sm text-muted-foreground mt-1">Довольных клиентов</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">15+</div>
                  <div className="text-sm text-muted-foreground mt-1">Лет опыта</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-3xl blur-2xl"></div>
              <img 
                src="https://cdn.poehali.dev/files/78a0a3b4-0330-4de1-91ec-2c68f965c4ec.jpg" 
                alt="Кулинарное шоу на природе" 
                className="relative rounded-2xl shadow-xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-20 px-6 bg-muted">
        <div className="container mx-auto">
          <h2 className="text-4xl lg:text-5xl font-bold text-center mb-4">Наши услуги</h2>
          <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto">
            Полный комплекс кейтеринговых услуг для любых мероприятий
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="hover:shadow-lg transition-all duration-300 border-0">
              <CardContent className="p-8 space-y-4">
                <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Icon name="Utensils" className="text-primary" size={28} />
                </div>
                <h3 className="text-xl font-bold">Банкеты</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Организация банкетов любого формата от 10 до 500 гостей
                </p>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-lg transition-all duration-300 border-0">
              <CardContent className="p-8 space-y-4">
                <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Icon name="Users" className="text-primary" size={28} />
                </div>
                <h3 className="text-xl font-bold">Корпоративы</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Профессиональное обслуживание корпоративных мероприятий
                </p>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-lg transition-all duration-300 border-0">
              <CardContent className="p-8 space-y-4">
                <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Icon name="Flame" className="text-primary" size={28} />
                </div>
                <h3 className="text-xl font-bold">Кулинарные шоу</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Эффектные шоу с дымом, огнем и театральной подачей блюд
                </p>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-lg transition-all duration-300 border-0">
              <CardContent className="p-8 space-y-4">
                <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Icon name="Wine" className="text-primary" size={28} />
                </div>
                <h3 className="text-xl font-bold">Фуршеты</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Выездные фуршеты с изысканными закусками и канапе
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="menu" className="py-20 px-6">
        <div className="container mx-auto">
          <h2 className="text-4xl lg:text-5xl font-bold text-center mb-4">Банкетные меню</h2>
          <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto">
            Разнообразные меню на любой вкус и бюджет
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-2 hover:border-primary transition-all duration-300">
              <CardContent className="p-8 space-y-6">
                <div>
                  <h3 className="text-2xl font-bold mb-2">Классика</h3>
                  <div className="text-3xl font-bold text-primary mb-1">от 1500₽</div>
                  <div className="text-sm text-muted-foreground">на человека</div>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="text-primary mt-0.5 flex-shrink-0" size={20} />
                    <span className="text-muted-foreground">Салаты (3 вида)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="text-primary mt-0.5 flex-shrink-0" size={20} />
                    <span className="text-muted-foreground">Горячее блюдо</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="text-primary mt-0.5 flex-shrink-0" size={20} />
                    <span className="text-muted-foreground">Гарнир (2 вида)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="text-primary mt-0.5 flex-shrink-0" size={20} />
                    <span className="text-muted-foreground">Хлебная корзина</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="text-primary mt-0.5 flex-shrink-0" size={20} />
                    <span className="text-muted-foreground">Напитки</span>
                  </li>
                </ul>
                <Button className="w-full bg-secondary hover:bg-secondary/90 rounded-md" onClick={() => setIsBookingOpen(true)}>
                  Выбрать
                </Button>
              </CardContent>
            </Card>

            <Card className="border-2 border-primary shadow-lg relative">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-white px-4 py-1 rounded-full text-sm font-semibold">
                Популярное
              </div>
              <CardContent className="p-8 space-y-6">
                <div>
                  <h3 className="text-2xl font-bold mb-2">Премиум</h3>
                  <div className="text-3xl font-bold text-primary mb-1">от 2500₽</div>
                  <div className="text-sm text-muted-foreground">на человека</div>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="text-primary mt-0.5 flex-shrink-0" size={20} />
                    <span className="text-muted-foreground">Салаты (5 видов)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="text-primary mt-0.5 flex-shrink-0" size={20} />
                    <span className="text-muted-foreground">Горячее блюдо (2 вида)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="text-primary mt-0.5 flex-shrink-0" size={20} />
                    <span className="text-muted-foreground">Гарнир (3 вида)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="text-primary mt-0.5 flex-shrink-0" size={20} />
                    <span className="text-muted-foreground">Морепродукты</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="text-primary mt-0.5 flex-shrink-0" size={20} />
                    <span className="text-muted-foreground">Десерты</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="text-primary mt-0.5 flex-shrink-0" size={20} />
                    <span className="text-muted-foreground">Напитки премиум</span>
                  </li>
                </ul>
                <Button className="w-full bg-secondary hover:bg-secondary/90 rounded-md" onClick={() => setIsBookingOpen(true)}>
                  Выбрать
                </Button>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-primary transition-all duration-300">
              <CardContent className="p-8 space-y-6">
                <div>
                  <h3 className="text-2xl font-bold mb-2">VIP</h3>
                  <div className="text-3xl font-bold text-primary mb-1">от 4000₽</div>
                  <div className="text-sm text-muted-foreground">на человека</div>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="text-primary mt-0.5 flex-shrink-0" size={20} />
                    <span className="text-muted-foreground">Салаты авторские (7 видов)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="text-primary mt-0.5 flex-shrink-0" size={20} />
                    <span className="text-muted-foreground">Горячее блюдо (3 вида)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="text-primary mt-0.5 flex-shrink-0" size={20} />
                    <span className="text-muted-foreground">Морепродукты деликатесы</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="text-primary mt-0.5 flex-shrink-0" size={20} />
                    <span className="text-muted-foreground">Кулинарное шоу</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="text-primary mt-0.5 flex-shrink-0" size={20} />
                    <span className="text-muted-foreground">Десертная станция</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="text-primary mt-0.5 flex-shrink-0" size={20} />
                    <span className="text-muted-foreground">Напитки элит</span>
                  </li>
                </ul>
                <Button className="w-full bg-secondary hover:bg-secondary/90 rounded-md" onClick={() => setIsBookingOpen(true)}>
                  Выбрать
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="portfolio" className="py-20 px-6 bg-muted">
        <div className="container mx-auto">
          <h2 className="text-4xl lg:text-5xl font-bold text-center mb-4">Наши работы</h2>
          <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto">
            Фотографии наших мероприятий
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="group relative overflow-hidden rounded-xl bg-white shadow-sm hover:shadow-xl transition-all duration-300">
              <img 
                src="https://cdn.poehali.dev/files/ad5549c1-4f64-4891-a989-affb6f3b3455.jpg" 
                alt="Брускетты с лососем" 
                className="w-full h-72 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <p className="text-white font-semibold">Брускетты с лососем</p>
              </div>
            </div>
            
            <div className="group relative overflow-hidden rounded-xl bg-white shadow-sm hover:shadow-xl transition-all duration-300">
              <img 
                src="https://cdn.poehali.dev/files/459a358f-8400-4f4d-b696-306c4c21dc23.jpg" 
                alt="Шашлык на огне" 
                className="w-full h-72 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <p className="text-white font-semibold">Шашлык шоу</p>
              </div>
            </div>
            
            <div className="group relative overflow-hidden rounded-xl bg-white shadow-sm hover:shadow-xl transition-all duration-300">
              <img 
                src="https://cdn.poehali.dev/files/ec9b97cc-cbcb-41cb-8edc-d28c9f9d2325.jpg" 
                alt="Мастер-класс приготовление" 
                className="w-full h-72 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <p className="text-white font-semibold">Мастер-класс</p>
              </div>
            </div>
            
            <div className="group relative overflow-hidden rounded-xl bg-white shadow-sm hover:shadow-xl transition-all duration-300">
              <img 
                src="https://cdn.poehali.dev/files/3eef41d9-c70e-4f58-a6e4-d743d0d828aa.jpg" 
                alt="Мини бургеры" 
                className="w-full h-72 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <p className="text-white font-semibold">Мини бургеры</p>
              </div>
            </div>
            
            <div className="group relative overflow-hidden rounded-xl bg-white shadow-sm hover:shadow-xl transition-all duration-300">
              <img 
                src="https://cdn.poehali.dev/files/510101d0-4de8-4d7c-bf71-66c225e2aebc.jpg" 
                alt="Корпоративный фуршет" 
                className="w-full h-72 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <p className="text-white font-semibold">Корпоративный фуршет</p>
              </div>
            </div>
            
            <div className="group relative overflow-hidden rounded-xl bg-white shadow-sm hover:shadow-xl transition-all duration-300">
              <img 
                src="https://cdn.poehali.dev/files/b94cb2f3-48de-42a1-99e9-4d6ad382b691.jpg" 
                alt="Десерт-шоу с декором" 
                className="w-full h-72 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <p className="text-white font-semibold">Десерт-шоу</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <img 
              src="https://cdn.poehali.dev/files/c4117b02-f3a2-400d-be0b-c6d074a0aa0c.jpg" 
              alt="Шашлык шоу на углях" 
              className="rounded-2xl shadow-xl w-full"
            />
            <div className="space-y-6">
              <h2 className="text-4xl lg:text-5xl font-bold">Кулинарные шоу</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Превратим ваше мероприятие в незабываемое зрелище! Наши повара не только готовят изысканные блюда, 
                но и создают настоящие кулинарные шоу с огнем, дымом и театральной подачей.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Icon name="Check" className="text-primary" size={16} />
                  </div>
                  <div>
                    <div className="font-semibold mb-1">Шашлычное шоу</div>
                    <div className="text-muted-foreground text-sm">Приготовление шашлыков на открытом огне с эффектной подачей</div>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Icon name="Check" className="text-primary" size={16} />
                  </div>
                  <div>
                    <div className="font-semibold mb-1">Фламбирование</div>
                    <div className="text-muted-foreground text-sm">Приготовление блюд с использованием открытого пламени</div>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Icon name="Check" className="text-primary" size={16} />
                  </div>
                  <div>
                    <div className="font-semibold mb-1">Молекулярная кухня</div>
                    <div className="text-muted-foreground text-sm">Современные техники приготовления с жидким азотом и дымом</div>
                  </div>
                </li>
              </ul>
              <Button size="lg" className="bg-secondary hover:bg-secondary/90 rounded-md" onClick={() => setIsBookingOpen(true)}>
                Заказать шоу
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 px-6 bg-muted">
        <div className="container mx-auto max-w-4xl">
          <div className="bg-white rounded-2xl shadow-lg p-12">
            <div className="text-center mb-12">
              <h2 className="text-4xl lg:text-5xl font-bold mb-4">Свяжитесь с нами</h2>
              <p className="text-muted-foreground">
                Готовы обсудить ваше мероприятие? Оставьте заявку или позвоните нам!
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Phone" className="text-primary" size={28} />
                </div>
                <div className="font-semibold mb-2">Телефон</div>
                <a href="tel:+79001234567" className="text-muted-foreground hover:text-primary transition-colors">
                  +7 (900) 123-45-67
                </a>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Mail" className="text-primary" size={28} />
                </div>
                <div className="font-semibold mb-2">Email</div>
                <a href="mailto:info@freshcatering.ru" className="text-muted-foreground hover:text-primary transition-colors">
                  info@freshcatering.ru
                </a>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="MapPin" className="text-primary" size={28} />
                </div>
                <div className="font-semibold mb-2">Адрес</div>
                <div className="text-muted-foreground">
                  г. Москва, ул. Примерная, 1
                </div>
              </div>
            </div>
            <div className="text-center">
              <Button size="lg" className="bg-secondary hover:bg-secondary/90 rounded-md px-12" onClick={() => setIsBookingOpen(true)}>
                Оставить заявку
              </Button>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-foreground text-white py-12 px-6">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Icon name="ChefHat" className="text-primary" size={24} />
                <span className="text-xl font-bold">FreshCatering</span>
              </div>
              <p className="text-sm text-gray-400">
                Свежий кейтеринг для незабываемых событий
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Навигация</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#home" className="hover:text-primary transition-colors">Главная</a></li>
                <li><a href="#services" className="hover:text-primary transition-colors">Услуги</a></li>
                <li><a href="#menu" className="hover:text-primary transition-colors">Меню</a></li>
                <li><a href="#portfolio" className="hover:text-primary transition-colors">Портфолио</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Услуги</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>Банкеты</li>
                <li>Корпоративы</li>
                <li>Кулинарные шоу</li>
                <li>Фуршеты</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Контакты</h4>
              <ul className="space-y-2 text-sm text-gray-400">
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
