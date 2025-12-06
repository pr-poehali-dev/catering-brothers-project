import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setIsBookingOpen(false);
    alert('Спасибо! Мы свяжемся с вами в ближайшее время.');
  };

  return (
    <div className="min-h-screen bg-[#f0ebe5]">
      <header className="bg-[#f0ebe5] py-6 px-6">
        <div className="container mx-auto">
          <div className="flex justify-between items-start mb-2">
            <div className="flex items-center gap-4">
              <div className="w-20 h-20 bg-gradient-to-br from-[#6b4e3d] to-[#8b6e5d] rounded-full flex items-center justify-center shadow-lg relative overflow-hidden">
                <div className="absolute inset-0 bg-[#c4a57b] opacity-20 rounded-full transform rotate-45"></div>
                <span className="text-white font-bold text-3xl relative z-10" style={{ fontFamily: "'Comforter Brush', cursive" }}>К</span>
              </div>
              <div>
                <h1 className="text-2xl font-bold text-[#6b4e3d] uppercase tracking-wide">КейтерЕв</h1>
                <p className="text-sm text-[#6b4e3d]/70">Кейтеринг в Москве</p>
              </div>
            </div>
            <div className="flex gap-8">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-[#6b4e3d] rounded-full flex items-center justify-center">
                  <Icon name="Phone" className="text-white" size={20} />
                </div>
                <div>
                  <a href="tel:+79854208331" className="block text-[#6b4e3d] font-bold text-sm hover:text-[#8b6e5d] transition-colors">
                    +7 (985) 420-83-31
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-[#6b4e3d] rounded-full flex items-center justify-center">
                  <Icon name="MapPin" className="text-white" size={20} />
                </div>
                <div className="text-[#6b4e3d] font-semibold text-sm">
                  г. Москва, ул. Театральный проезд 5с1
                </div>
              </div>
            </div>
          </div>
          <nav className="flex justify-end gap-8">
            <a href="#home" className="text-[#6b4e3d] font-bold text-sm uppercase tracking-wide hover:text-[#8b6e5d] transition-colors">Главная</a>
            <a href="#about" className="text-[#6b4e3d] font-bold text-sm uppercase tracking-wide hover:text-[#8b6e5d] transition-colors">О нас</a>
            <a href="#services" className="text-[#6b4e3d] font-bold text-sm uppercase tracking-wide hover:text-[#8b6e5d] transition-colors">Услуги</a>
            <a href="#contact" className="text-[#6b4e3d] font-bold text-sm uppercase tracking-wide hover:text-[#8b6e5d] transition-colors">Контакты</a>
            <a href="#faq" className="text-[#6b4e3d] font-bold text-sm uppercase tracking-wide hover:text-[#8b6e5d] transition-colors">Вопросы и ответы</a>
            <button className="w-8 h-8 bg-[#6b4e3d] rounded flex items-center justify-center hover:bg-[#8b6e5d] transition-colors">
              <Icon name="Menu" className="text-white" size={20} />
            </button>
          </nav>
        </div>
      </header>

      <section id="home" className="relative py-0">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-0 items-start">
            <div className="relative flex items-start justify-center pt-0 -mt-16">
              <div className="absolute top-12 left-8 w-32 opacity-20 z-10">
                <svg viewBox="0 0 200 300" fill="none" className="text-[#8b6e5d]">
                  <path d="M50 50 Q 100 100 50 150 T 50 250" stroke="currentColor" strokeWidth="3" fill="none"/>
                  <circle cx="50" cy="50" r="8" fill="currentColor"/>
                  <circle cx="50" cy="150" r="8" fill="currentColor"/>
                  <circle cx="50" cy="250" r="8" fill="currentColor"/>
                  <path d="M 70 60 Q 90 70 85 85 Q 95 90 85 95" stroke="currentColor" strokeWidth="2" fill="none"/>
                </svg>
              </div>
              
              <div className="relative">
                <div className="absolute inset-0 bg-[#6b4e3d] translate-x-4 translate-y-4 rounded-lg"></div>
                <img 
                  src="https://cdn.poehali.dev/files/1e72de04-d38b-4933-8793-aba4ad31ba88.jpeg"
                  alt="Кейтеринг"
                  className="relative z-10 w-full h-auto max-h-[700px] rounded-lg shadow-2xl object-scale-down"
                />
              </div>
              
              <div className="absolute bottom-12 left-8 w-48 opacity-20 z-10">
                <svg viewBox="0 0 300 100" fill="none" className="text-[#8b6e5d]">
                  <path d="M10 50 Q 50 10 90 50 T 170 50 Q 210 90 250 50" stroke="currentColor" strokeWidth="3" fill="none"/>
                  <line x1="250" y1="50" x2="290" y2="50" stroke="currentColor" strokeWidth="2"/>
                  <circle cx="290" cy="50" r="5" fill="currentColor"/>
                </svg>
              </div>
            </div>

            <div className="relative bg-[#f0ebe5] pt-0 pb-8 px-16 flex flex-col justify-start overflow-hidden">
              <div className="absolute top-20 right-12 w-24 opacity-10">
                <svg viewBox="0 0 150 150" fill="none" className="text-[#8b6e5d] animate-pulse">
                  <path d="M75 25 Q 100 50 75 75 T 75 125" stroke="currentColor" strokeWidth="2" fill="none"/>
                  <circle cx="75" cy="25" r="5" fill="currentColor"/>
                  <circle cx="75" cy="75" r="5" fill="currentColor"/>
                  <circle cx="75" cy="125" r="5" fill="currentColor"/>
                </svg>
              </div>
              <div className="absolute bottom-32 left-12 w-20 opacity-10">
                <svg viewBox="0 0 120 120" fill="none" className="text-[#8b6e5d] animate-pulse">
                  <path d="M10 60 Q 40 30 70 60 Q 100 90 110 60" stroke="currentColor" strokeWidth="2" fill="none"/>
                  <circle cx="60" cy="60" r="4" fill="currentColor"/>
                </svg>
              </div>
              <div className="absolute top-12 right-8 w-32 opacity-20">
                <svg viewBox="0 0 200 200" fill="none" className="text-[#c4a57b]">
                  <path d="M150 50 Q 100 70 120 100 Q 90 120 110 150" stroke="currentColor" strokeWidth="3" fill="none"/>
                  <circle cx="150" cy="50" r="8" fill="currentColor"/>
                  <path d="M 130 60 Q 140 75 125 80" stroke="currentColor" strokeWidth="2" fill="none"/>
                </svg>
              </div>
              
              <div className="mb-10">
                <h2 className="text-[110px] mb-0 leading-none" style={{ fontFamily: "'Comforter Brush', cursive", color: '#8b6e5d' }}>
                  Свежие
                </h2>
                <h3 className="text-[90px] font-black text-black uppercase leading-none mb-0 ml-32 -mt-4">
                  ИДЕИ ДЛЯ
                </h3>
                <h4 className="text-[50px] font-light text-black mb-8 whitespace-nowrap leading-none -mt-2">
                  вашего кейтеринга
                </h4>
              </div>

              <p className="text-[#6b4e3d] text-sm leading-relaxed mb-2">
                Наши талантливые повара и организаторы событий
              </p>
              <p className="text-[#6b4e3d] text-sm leading-relaxed mb-8">
                гарантируют, что каждый аспект вашего застолья будет безупречен.
              </p>

              <Dialog open={isBookingOpen} onOpenChange={setIsBookingOpen}>
                <DialogTrigger asChild>
                  <Button 
                    size="lg" 
                    className="bg-[#6b4e3d] hover:bg-[#8b6e5d] text-white px-12 py-6 text-sm uppercase tracking-widest font-bold w-fit"
                  >
                    Оставить заявку
                  </Button>
                </DialogTrigger>
                <DialogContent className="max-w-md bg-[#f0ebe5]">
                  <DialogHeader>
                    <DialogTitle className="text-[#6b4e3d]">Оставить заявку</DialogTitle>
                  </DialogHeader>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-[#6b4e3d]">Имя *</Label>
                      <Input 
                        id="name" 
                        required 
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        className="bg-white border-[#6b4e3d]/20"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone" className="text-[#6b4e3d]">Телефон *</Label>
                      <Input 
                        id="phone" 
                        type="tel" 
                        required 
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                        className="bg-white border-[#6b4e3d]/20"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="message" className="text-[#6b4e3d]">Сообщение</Label>
                      <Textarea 
                        id="message" 
                        rows={3} 
                        value={formData.message}
                        onChange={(e) => setFormData({...formData, message: e.target.value})}
                        className="bg-white border-[#6b4e3d]/20"
                      />
                    </div>
                    <Button type="submit" className="w-full bg-[#6b4e3d] hover:bg-[#8b6e5d] text-white uppercase tracking-wide">
                      Отправить
                    </Button>
                  </form>
                </DialogContent>
              </Dialog>

              <div className="grid grid-cols-3 gap-4 mt-8">
                <img 
                  src="https://cdn.poehali.dev/files/ec9b97cc-cbcb-41cb-8edc-d28c9f9d2325.jpg"
                  alt="Блюдо 1"
                  className="w-full h-32 object-cover rounded-lg shadow-md hover:scale-105 transition-transform duration-300"
                />
                <img 
                  src="https://cdn.poehali.dev/files/3eef41d9-c70e-4f58-a6e4-d743d0d828aa.jpg"
                  alt="Блюдо 2"
                  className="w-full h-32 object-cover rounded-lg shadow-md hover:scale-105 transition-transform duration-300"
                />
                <img 
                  src="https://cdn.poehali.dev/files/ad5549c1-4f64-4891-a989-affb6f3b3455.jpg"
                  alt="Блюдо 3"
                  className="w-full h-32 object-cover rounded-lg shadow-md hover:scale-105 transition-transform duration-300"
                />
              </div>

              <div className="fixed bottom-8 right-8 z-50">
                <button className="bg-white border-2 border-[#6b4e3d] rounded-full px-6 py-3 shadow-lg hover:shadow-xl transition-all group">
                  <div className="flex items-center gap-2">
                    <span className="text-[#6b4e3d] font-semibold text-sm">Задать вопрос</span>
                    <div className="w-8 h-8 bg-[#6b4e3d] rounded-full flex items-center justify-center">
                      <Icon name="MessageCircle" className="text-white" size={18} />
                    </div>
                  </div>
                  <span className="text-xs text-[#6b4e3d]/70 block mt-1">on-line</span>
                </button>
              </div>
            </div>
          </div>
        </div>


      </section>

      <section id="about" className="py-20 px-6 bg-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-[100px] mb-6 text-[#6b4e3d] animate-pulse" style={{ fontFamily: "'Comforter Brush', cursive" }}>О компании</h2>
          <div className="w-20 h-1 bg-[#6b4e3d] mx-auto mb-10"></div>
          <p className="text-lg leading-relaxed mb-6 text-[#6b4e3d]/80">
            Наши повара имеют опыт работы более 8-10 лет. За это время мы организовали 
            сотни успешных мероприятий и заслужили доверие наших клиентов благодаря высокому качеству 
            обслуживания и профессионализму команды.
          </p>
          <p className="text-lg leading-relaxed text-[#6b4e3d]/80">
            Мы предлагаем индивидуальный подход к каждому клиенту, разрабатываем уникальные меню 
            и обеспечиваем безупречное проведение мероприятий любого формата.
          </p>
        </div>
      </section>

      <section id="menu" className="py-20 px-6 bg-[#f0ebe5]">
        <div className="container mx-auto">
          <h2 className="text-[100px] text-center mb-4 text-[#6b4e3d] animate-pulse" style={{ fontFamily: "'Comforter Brush', cursive" }}>Меню</h2>
          <div className="w-20 h-1 bg-[#6b4e3d] mx-auto mb-16"></div>
          
          <div className="grid md:grid-cols-3 gap-12 max-w-5xl mx-auto">
            <div>
              <h3 className="text-xl font-bold text-[#6b4e3d] mb-6 pb-2 border-b-2 border-[#6b4e3d]">Холодные закуски</h3>
              <ul className="space-y-3 text-[#6b4e3d]/80">
                <li>• Мясная нарезка</li>
                <li>• Сырная тарелка</li>
                <li>• Рыбная нарезка</li>
                <li>• Овощная нарезка</li>
                <li>• Канапе ассорти</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold text-[#6b4e3d] mb-6 pb-2 border-b-2 border-[#6b4e3d]">Горячие закуски</h3>
              <ul className="space-y-3 text-[#6b4e3d]/80">
                <li>• Жульен с грибами</li>
                <li>• Мини-пицца</li>
                <li>• Шашлычки</li>
                <li>• Тарталетки</li>
                <li>• Брускетты</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold text-[#6b4e3d] mb-6 pb-2 border-b-2 border-[#6b4e3d]">Основные блюда</h3>
              <ul className="space-y-3 text-[#6b4e3d]/80">
                <li>• Стейк из говядины</li>
                <li>• Рыба на гриле</li>
                <li>• Курица с овощами</li>
                <li>• Паста карбонара</li>
                <li>• Ризотто с морепродуктами</li>
              </ul>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 max-w-3xl mx-auto mt-12">
            <div>
              <h3 className="text-xl font-bold text-[#6b4e3d] mb-6 pb-2 border-b-2 border-[#6b4e3d]">Десерты</h3>
              <ul className="space-y-3 text-[#6b4e3d]/80">
                <li>• Тирамису</li>
                <li>• Чизкейк</li>
                <li>• Панна-котта</li>
                <li>• Фруктовая нарезка</li>
                <li>• Макаронс</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-bold text-[#6b4e3d] mb-6 pb-2 border-b-2 border-[#6b4e3d]">Напитки</h3>
              <ul className="space-y-3 text-[#6b4e3d]/80">
                <li>• Свежевыжатые соки</li>
                <li>• Кофе и чай</li>
                <li>• Лимонады домашние</li>
                <li>• Морсы</li>
                <li>• Минеральная вода</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-20 px-6 bg-white">
        <div className="container mx-auto">
          <h2 className="text-[100px] text-center mb-4 text-[#6b4e3d] animate-pulse" style={{ fontFamily: "'Comforter Brush', cursive" }}>Наши услуги</h2>
          <div className="w-20 h-1 bg-[#6b4e3d] mx-auto mb-16"></div>
          <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-[#6b4e3d] rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Users" className="text-white" size={28} />
              </div>
              <h3 className="text-2xl font-bold mb-3 text-[#6b4e3d]">Корпоративы</h3>
              <p className="text-[#6b4e3d]/70 leading-relaxed">
                Организация корпоративных мероприятий любого формата: тимбилдинги, праздничные вечера, презентации
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-[#6b4e3d] rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Sparkles" className="text-white" size={28} />
              </div>
              <h3 className="text-2xl font-bold mb-3 text-[#6b4e3d]">Банкеты</h3>
              <p className="text-[#6b4e3d]/70 leading-relaxed">
                Выездное обслуживание торжественных мероприятий: юбилеи, дни рождения, семейные праздники
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-[#6b4e3d] rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Coffee" className="text-white" size={28} />
              </div>
              <h3 className="text-2xl font-bold mb-3 text-[#6b4e3d]">Фуршеты и кофе-брейки</h3>
              <p className="text-[#6b4e3d]/70 leading-relaxed">
                Сервировка и обслуживание деловых встреч, конференций, семинаров
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-[#6b4e3d] rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Heart" className="text-white" size={28} />
              </div>
              <h3 className="text-2xl font-bold mb-3 text-[#6b4e3d]">Свадьбы</h3>
              <p className="text-[#6b4e3d]/70 leading-relaxed">
                Создание незабываемого праздника для молодоженов: от разработки меню до полного обслуживания
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="portfolio" className="py-20 px-6 bg-[#f0ebe5]">
        <div className="container mx-auto">
          <h2 className="text-[100px] text-center mb-4 text-[#6b4e3d] animate-pulse" style={{ fontFamily: "'Comforter Brush', cursive" }}>Портфолио</h2>
          <div className="w-20 h-1 bg-[#6b4e3d] mx-auto mb-16"></div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="group overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all">
              <img 
                src="https://cdn.poehali.dev/files/510101d0-4de8-4d7c-bf71-66c225e2aebc.jpg"
                alt="Мероприятие 1"
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
              />
            </div>
            <div className="group overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all">
              <img 
                src="https://cdn.poehali.dev/files/c4117b02-f3a2-400d-be0b-c6d074a0aa0c.jpg"
                alt="Мероприятие 2"
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
              />
            </div>
            <div className="group overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all">
              <img 
                src="https://cdn.poehali.dev/files/b94cb2f3-48de-42a1-99e9-4d6ad382b691.jpg"
                alt="Мероприятие 3"
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
              />
            </div>
            <div className="group overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all">
              <img 
                src="https://cdn.poehali.dev/files/459a358f-8400-4f4d-b696-306c4c21dc23.jpg"
                alt="Мероприятие 4"
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
              />
            </div>
            <div className="group overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all">
              <img 
                src="https://cdn.poehali.dev/files/ec9b97cc-cbcb-41cb-8edc-d28c9f9d2325.jpg"
                alt="Мероприятие 5"
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
              />
            </div>
            <div className="group overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all">
              <img 
                src="https://cdn.poehali.dev/files/3eef41d9-c70e-4f58-a6e4-d743d0d828aa.jpg"
                alt="Мероприятие 6"
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="masterclass" className="py-20 px-6 bg-white">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-[100px] text-center mb-4 text-[#6b4e3d] animate-pulse" style={{ fontFamily: "'Comforter Brush', cursive" }}>Мастер-классы и шоу</h2>
          <div className="w-20 h-1 bg-[#6b4e3d] mx-auto mb-16"></div>
          <div className="space-y-8">
            <div className="border-l-4 border-[#6b4e3d] pl-6">
              <h3 className="text-2xl font-bold text-[#6b4e3d] mb-2">Кулинарные мастер-классы</h3>
              <p className="text-[#6b4e3d]/70 leading-relaxed">
                Интерактивные занятия по приготовлению блюд под руководством профессиональных шеф-поваров. Идеально для корпоративов и тимбилдингов.
              </p>
            </div>
            
            <div className="border-l-4 border-[#6b4e3d] pl-6">
              <h3 className="text-2xl font-bold text-[#6b4e3d] mb-2">Кулинарные шоу</h3>
              <p className="text-[#6b4e3d]/70 leading-relaxed">
                Зрелищное приготовление блюд прямо на глазах у гостей. Фламбирование, карвинг, молекулярная кухня.
              </p>
            </div>
            
            <div className="border-l-4 border-[#6b4e3d] pl-6">
              <h3 className="text-2xl font-bold text-[#6b4e3d] mb-2">Барное шоу</h3>
              <p className="text-[#6b4e3d]/70 leading-relaxed">
                Профессиональные бармены продемонстрируют искусство приготовления коктейлей с элементами флейринга.
              </p>
            </div>
            
            <div className="border-l-4 border-[#6b4e3d] pl-6">
              <h3 className="text-2xl font-bold text-[#6b4e3d] mb-2">Candy bar и десертные станции</h3>
              <p className="text-[#6b4e3d]/70 leading-relaxed">
                Оформление и организация сладких столов, станций с живым приготовлением десертов.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 px-6 bg-[#f0ebe5]">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-[100px] text-center mb-4 text-[#6b4e3d] animate-pulse" style={{ fontFamily: "'Comforter Brush', cursive" }}>Контакты</h2>
          <div className="w-20 h-1 bg-[#6b4e3d] mx-auto mb-16"></div>
          <div className="bg-white rounded-lg shadow-lg p-12">
            <div className="space-y-6 mb-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#6b4e3d] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <Icon name="Phone" className="text-white" size={20} />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-[#6b4e3d] mb-1">Телефон:</h3>
                  <a href="tel:+79854208331" className="text-[#6b4e3d]/70 hover:text-[#6b4e3d] transition-colors">
                    +7 (985) 420-83-31
                  </a>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#6b4e3d] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <Icon name="Mail" className="text-white" size={20} />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-[#6b4e3d] mb-1">Email:</h3>
                  <a href="mailto:info@catering.ru" className="text-[#6b4e3d]/70 hover:text-[#6b4e3d] transition-colors">
                    info@catering.ru
                  </a>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#6b4e3d] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <Icon name="MapPin" className="text-white" size={20} />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-[#6b4e3d] mb-1">Адрес:</h3>
                  <p className="text-[#6b4e3d]/70">
                    г. Москва, ул. Театральный проезд 5с1
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#6b4e3d] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <Icon name="Clock" className="text-white" size={20} />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-[#6b4e3d] mb-1">Режим работы:</h3>
                  <p className="text-[#6b4e3d]/70">
                    Ежедневно с 9:00 до 21:00
                  </p>
                </div>
              </div>
            </div>
            
            <div className="text-center pt-6 border-t border-[#6b4e3d]/20">
              <Button 
                size="lg" 
                className="bg-[#6b4e3d] hover:bg-[#8b6e5d] text-white px-12 py-6 uppercase tracking-wider font-bold" 
                onClick={() => setIsBookingOpen(true)}
              >
                Оставить заявку
              </Button>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-[#3d2e23] text-white/80 py-12 px-6">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div>
              <h4 className="font-bold mb-4 uppercase text-sm tracking-wider text-white">О компании</h4>
              <p className="text-sm leading-relaxed">
                Профессиональный кейтеринг для ваших мероприятий
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-4 uppercase text-sm tracking-wider text-white">Навигация</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#home" className="hover:text-[#c4a57b] transition-colors">Главная</a></li>
                <li><a href="#about" className="hover:text-[#c4a57b] transition-colors">О нас</a></li>
                <li><a href="#services" className="hover:text-[#c4a57b] transition-colors">Услуги</a></li>
                <li><a href="#contact" className="hover:text-[#c4a57b] transition-colors">Контакты</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4 uppercase text-sm tracking-wider text-white">Услуги</h4>
              <ul className="space-y-2 text-sm">
                <li>Корпоративы</li>
                <li>Банкеты</li>
                <li>Фуршеты</li>
                <li>Свадьбы</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4 uppercase text-sm tracking-wider text-white">Контакты</h4>
              <ul className="space-y-3 text-sm">
                <li className="flex items-center gap-2">
                  <Icon name="Phone" size={16} />
                  <a href="tel:+79854208331" className="hover:text-[#c4a57b] transition-colors">+7 (985) 420-83-31</a>
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="Mail" size={16} />
                  <a href="mailto:info@catering.ru" className="hover:text-[#c4a57b] transition-colors">info@catering.ru</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/10 pt-8 text-center text-sm">
            © 2024 КейтерЕв. Все права защищены.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;