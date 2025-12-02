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
    <div className="min-h-screen">
      <nav className="fixed top-0 w-full bg-background/95 backdrop-blur-sm z-50 border-b border-border">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold text-gradient">BrosCatering</div>
          <div className="hidden md:flex gap-6">
            <a href="#home" className="hover:text-primary transition-colors">Главная</a>
            <a href="#about" className="hover:text-primary transition-colors">О нас</a>
            <a href="#services" className="hover:text-primary transition-colors">Услуги</a>
            <a href="#menu" className="hover:text-primary transition-colors">Меню</a>
            <a href="#portfolio" className="hover:text-primary transition-colors">Портфолио</a>
            <a href="#masterclass" className="hover:text-primary transition-colors">Мастер-классы</a>
            <a href="#reviews" className="hover:text-primary transition-colors">Отзывы</a>
            <a href="#contact" className="hover:text-primary transition-colors">Контакты</a>
          </div>
          <Dialog open={isBookingOpen} onOpenChange={setIsBookingOpen}>
            <DialogTrigger asChild>
              <Button className="bg-primary hover:bg-primary/90">
                Забронировать
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
                      <SelectItem value="family">Семейный ужин</SelectItem>
                      <SelectItem value="poetry">Поэтический вечер</SelectItem>
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
      </nav>

      <section id="home" className="pt-24 pb-16 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-slide-in-left">
              <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                Кулинарное <span className="text-gradient">шоу</span> для вашего события
              </h1>
              <p className="text-xl text-muted-foreground">
                Два брата. Одна страсть. Незабываемые вкусы и эффектные кулинарные шоу для любого мероприятия.
              </p>
              <div className="flex gap-4">
                <Button size="lg" className="bg-primary hover:bg-primary/90" onClick={() => setIsBookingOpen(true)}>
                  Забронировать
                </Button>
                <Button size="lg" variant="outline">
                  <a href="#services">Наши услуги</a>
                </Button>
              </div>
            </div>
            <div className="animate-slide-in-right">
              <img 
                src="https://cdn.poehali.dev/files/78a0a3b4-0330-4de1-91ec-2c68f965c4ec.jpg" 
                alt="Chef cooking show outdoor" 
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center space-y-6 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold">О компании</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Мы — два брата, объединённых любовью к кулинарии и стремлением создавать незабываемые гастрономические впечатления. 
              Наш кейтеринг — это не просто еда, это искусство, атмосфера и шоу. Мы готовим на свадьбах, банкетах, 
              корпоративах и семейных мероприятиях, превращая каждое событие в праздник вкуса.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8">
              <div className="space-y-2">
                <div className="text-4xl font-bold text-primary">500+</div>
                <div className="text-sm text-muted-foreground">Мероприятий</div>
              </div>
              <div className="space-y-2">
                <div className="text-4xl font-bold text-primary">10K+</div>
                <div className="text-sm text-muted-foreground">Довольных гостей</div>
              </div>
              <div className="space-y-2">
                <div className="text-4xl font-bold text-primary">100+</div>
                <div className="text-sm text-muted-foreground">Уникальных блюд</div>
              </div>
              <div className="space-y-2">
                <div className="text-4xl font-bold text-primary">8+</div>
                <div className="text-sm text-muted-foreground">Лет опыта</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 animate-fade-in">Наши услуги</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: 'Heart', title: 'Свадьбы', desc: 'Создаём волшебную атмосферу самого важного дня в вашей жизни' },
              { icon: 'Users', title: 'Корпоративы', desc: 'Делаем рабочие мероприятия незабываемыми и вкусными' },
              { icon: 'Home', title: 'Семейные ужины', desc: 'Домашний уют с ресторанным качеством' },
              { icon: 'Wine', title: 'Банкеты', desc: 'Торжественные приёмы с изысканными блюдами' },
              { icon: 'Music', title: 'Поэтические вечера', desc: 'Интеллектуальная атмосфера с утончённой кухней' },
              { icon: 'Sparkles', title: 'Фуршеты', desc: 'Элегантные закуски и напитки для любого повода' }
            ].map((service, i) => (
              <Card key={i} className="border-border bg-card hover:border-primary transition-all duration-300 hover:scale-105 animate-scale-in" style={{animationDelay: `${i * 100}ms`}}>
                <CardContent className="p-6 space-y-4">
                  <div className="w-14 h-14 rounded-full bg-primary/20 flex items-center justify-center">
                    <Icon name={service.icon} className="text-primary" size={28} />
                  </div>
                  <h3 className="text-2xl font-semibold">{service.title}</h3>
                  <p className="text-muted-foreground">{service.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="menu" className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 animate-fade-in">Наше меню</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Богатый выбор блюд для любого мероприятия. От классических канапе до премиум деликатесов.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="border-border bg-card">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Icon name="Sandwich" className="text-primary" size={28} />
                  <h3 className="text-2xl font-semibold">Канапе</h3>
                </div>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• С лососем, сливочным сыром и огурцом</li>
                  <li>• С жареной креветкой и ананасом</li>
                  <li>• С прошутто, сыром дор-блю и грушей</li>
                  <li>• Креветки темпура с соусом</li>
                  <li>• Капрезе с песто</li>
                  <li>• С сыром бри и виноградом</li>
                  <li className="text-primary font-medium">...и ещё 20+ видов</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-border bg-card">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Icon name="Beef" className="text-primary" size={28} />
                  <h3 className="text-2xl font-semibold">Горячее мясо</h3>
                </div>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Каре ягненка с ягодным соусом</li>
                  <li>• Премиум стейки</li>
                  <li>• Шашлычки (курица, баранина, свинина)</li>
                  <li>• Свиные медальоны в беконе</li>
                  <li>• Томленые щечки</li>
                  <li>• Люля всех видов</li>
                  <li className="text-primary font-medium">...и многое другое</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-border bg-card">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Icon name="Fish" className="text-primary" size={28} />
                  <h3 className="text-2xl font-semibold">Рыба и морепродукты</h3>
                </div>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Лосось под сливочным соусом</li>
                  <li>• Дорадо или сибас на гриле</li>
                  <li>• Жареные креветки</li>
                  <li>• Филе судака с томатами и сыром</li>
                  <li>• Кальмар на гриле</li>
                  <li>• Мидии в томатном соусе</li>
                  <li className="text-primary font-medium">...и другие деликатесы</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-border bg-card">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Icon name="Salad" className="text-primary" size={28} />
                  <h3 className="text-2xl font-semibold">Салаты</h3>
                </div>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Лосось гриль с авокадо</li>
                  <li>• Цезарь с курицей/креветками</li>
                  <li>• С ростбифом и шампиньонами</li>
                  <li>• Нисуаз</li>
                  <li>• С утиной грудкой и грушей</li>
                  <li>• Греческий</li>
                  <li className="text-primary font-medium">...10+ вариантов</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-border bg-card">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Icon name="Soup" className="text-primary" size={28} />
                  <h3 className="text-2xl font-semibold">Супы</h3>
                </div>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Борщ классический</li>
                  <li>• Куриная лапша</li>
                  <li>• Тыквенный крем-суп</li>
                  <li>• Грибной крем-суп</li>
                  <li>• Сырный крем с семгой в хлебе</li>
                  <li>• Гаспачо с креветкой</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-border bg-card">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Icon name="CakeSlice" className="text-primary" size={28} />
                  <h3 className="text-2xl font-semibold">Десерты и выпечка</h3>
                </div>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Кейк попсы в глазури</li>
                  <li>• Корзиночки с кремом и фруктами</li>
                  <li>• Пирожное картошка</li>
                  <li>• Хачапури</li>
                  <li>• Пирожки в ассортименте</li>
                  <li>• Авторские десерты</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-border bg-card">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Icon name="Croissant" className="text-primary" size={28} />
                  <h3 className="text-2xl font-semibold">Брускетты</h3>
                </div>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• С ростбифом</li>
                  <li>• С лососем</li>
                  <li>• С печеными овощами и брынзой</li>
                  <li>• С жареным осьминогом</li>
                  <li>• С тунцом и авокадо</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-border bg-card">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Icon name="Coffee" className="text-primary" size={28} />
                  <h3 className="text-2xl font-semibold">Кофе-брейки</h3>
                </div>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Круассаны с разными начинками</li>
                  <li>• Сэндвичи</li>
                  <li>• Оладьи и блинчики</li>
                  <li>• Сырники с топингами</li>
                  <li>• Драники с лососем</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-primary border-2 bg-gradient-to-br from-card to-primary/5">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Icon name="Crown" className="text-primary" size={28} />
                  <h3 className="text-2xl font-semibold">Премиум меню</h3>
                </div>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Канапе с икрой и устрицами</li>
                  <li>• Тартар из мраморной говядины с трюфелем</li>
                  <li>• Карпаччо с золотыми лепестками</li>
                  <li>• Террин из фуа-гра</li>
                  <li>• Стейки вагю</li>
                  <li>• Стерлядь и осетр</li>
                  <li className="text-primary font-medium">...эксклюзивные блюда</li>
                </ul>
              </CardContent>
            </Card>
          </div>
          
          <div className="mt-12 text-center">
            <p className="text-muted-foreground mb-6">
              Полное меню с ценами можно запросить при бронировании
            </p>
            <Button size="lg" className="bg-primary hover:bg-primary/90" onClick={() => setIsBookingOpen(true)}>
              Запросить полное меню
            </Button>
          </div>
        </div>
      </section>

      <section id="portfolio" className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 animate-fade-in">Портфолио</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <img 
              src="https://cdn.poehali.dev/files/ad5549c1-4f64-4891-a989-affb6f3b3455.jpg" 
              alt="Брускетты с лососем" 
              className="rounded-xl hover:scale-105 transition-transform duration-300 w-full h-64 object-cover"
            />
            <img 
              src="https://cdn.poehali.dev/files/459a358f-8400-4f4d-b696-306c4c21dc23.jpg" 
              alt="Шашлык на огне" 
              className="rounded-xl hover:scale-105 transition-transform duration-300 w-full h-64 object-cover"
            />
            <img 
              src="https://cdn.poehali.dev/files/ec9b97cc-cbcb-41cb-8edc-d28c9f9d2325.jpg" 
              alt="Мастер-класс приготовление" 
              className="rounded-xl hover:scale-105 transition-transform duration-300 w-full h-64 object-cover"
            />
            <img 
              src="https://cdn.poehali.dev/files/3eef41d9-c70e-4f58-a6e4-d743d0d828aa.jpg" 
              alt="Мини бургеры" 
              className="rounded-xl hover:scale-105 transition-transform duration-300 w-full h-64 object-cover"
            />
            <img 
              src="https://cdn.poehali.dev/files/510101d0-4de8-4d7c-bf71-66c225e2aebc.jpg" 
              alt="Корпоративный фуршет" 
              className="rounded-xl hover:scale-105 transition-transform duration-300 w-full h-64 object-cover"
            />
            <img 
              src="https://cdn.poehali.dev/files/b94cb2f3-48de-42a1-99e9-4d6ad382b691.jpg" 
              alt="Десерт-шоу с декором" 
              className="rounded-xl hover:scale-105 transition-transform duration-300 w-full h-64 object-cover"
            />
          </div>
        </div>
      </section>

      <section id="masterclass" className="py-16 px-4">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 animate-fade-in">Мастер-классы и шоу</h2>
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <img 
                src="https://cdn.poehali.dev/files/c4117b02-f3a2-400d-be0b-c6d074a0aa0c.jpg" 
                alt="Шашлык шоу на углях" 
                className="rounded-xl shadow-xl"
              />
              <div className="space-y-6">
                <div className="space-y-3">
                  <Icon name="Flame" className="text-primary" size={32} />
                  <h3 className="text-2xl font-semibold">Кулинарные шоу с шефом</h3>
                  <p className="text-muted-foreground">
                    Эффектное приготовление блюд прямо на глазах у гостей. Огонь, дым и невероятные вкусы.
                  </p>
                </div>
                <div className="space-y-3">
                  <Icon name="GraduationCap" className="text-primary" size={32} />
                  <h3 className="text-2xl font-semibold">Интерактивные мастер-классы</h3>
                  <p className="text-muted-foreground">
                    Научим готовить авторские блюда, поделимся секретами и создадим атмосферу творчества.
                  </p>
                </div>
                <Button size="lg" className="bg-primary hover:bg-primary/90" onClick={() => setIsBookingOpen(true)}>
                  Заказать шоу
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="reviews" className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 animate-fade-in">Отзывы</h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[
              { name: 'Анна и Дмитрий', event: 'Свадьба', text: 'Спасибо за волшебный вечер! Гости до сих пор вспоминают ваше кулинарное шоу. Всё было идеально!' },
              { name: 'Компания "TechCorp"', event: 'Корпоратив', text: 'Организовали корпоратив на 150 человек. Все в восторге! Профессионально, вкусно, креативно.' },
              { name: 'Мария', event: 'Семейный ужин', text: 'Заказали приготовление на дому. Братья создали ресторанную атмосферу прямо на нашей кухне!' }
            ].map((review, i) => (
              <Card key={i} className="border-border bg-card animate-scale-in" style={{animationDelay: `${i * 150}ms`}}>
                <CardContent className="p-6 space-y-4">
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, j) => (
                      <Icon key={j} name="Star" className="text-primary fill-primary" size={18} />
                    ))}
                  </div>
                  <p className="text-muted-foreground italic">{review.text}</p>
                  <div>
                    <div className="font-semibold">{review.name}</div>
                    <div className="text-sm text-muted-foreground">{review.event}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 animate-fade-in">Контакты</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-border bg-card">
              <CardContent className="p-6 space-y-6">
                <div className="flex items-start gap-4">
                  <Icon name="Phone" className="text-primary mt-1" size={24} />
                  <div>
                    <div className="font-semibold mb-1">Телефон</div>
                    <a href="tel:+79991234567" className="text-muted-foreground hover:text-primary transition-colors">
                      +7 (999) 123-45-67
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Icon name="Mail" className="text-primary mt-1" size={24} />
                  <div>
                    <div className="font-semibold mb-1">Email</div>
                    <a href="mailto:info@broscatering.ru" className="text-muted-foreground hover:text-primary transition-colors">
                      info@broscatering.ru
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Icon name="MapPin" className="text-primary mt-1" size={24} />
                  <div>
                    <div className="font-semibold mb-1">Адрес</div>
                    <div className="text-muted-foreground">
                      г. Москва, ул. Примерная, 123
                    </div>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Icon name="Clock" className="text-primary mt-1" size={24} />
                  <div>
                    <div className="font-semibold mb-1">Часы работы</div>
                    <div className="text-muted-foreground">
                      Пн-Вс: 9:00 - 22:00
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="border-border bg-card">
              <CardContent className="p-6">
                <h3 className="text-2xl font-semibold mb-6">Напишите нам</h3>
                <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); alert('Сообщение отправлено!'); }}>
                  <Input placeholder="Ваше имя" />
                  <Input type="email" placeholder="Email" />
                  <Textarea rows={4} placeholder="Ваше сообщение" />
                  <Button type="submit" className="w-full bg-primary hover:bg-primary/90">
                    Отправить
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <footer className="py-8 px-4 border-t border-border">
        <div className="container mx-auto text-center text-muted-foreground">
          <p>&copy; 2024 BrosCatering. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;