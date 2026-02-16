// "use client";
//
// import Link from "next/link";
// import { Button } from "@/components/ui/button";
//
// export default function HomePage() {
//   return (
//       <main className="min-h-screen w-full bg-zinc-950 text-white flex items-center justify-center relative overflow-hidden">
//
//         {/* Background glow */}
//         <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(220,38,38,0.25),transparent_60%)]" />
//
//         {/* Content */}
//         <div className="relative z-10 max-w-4xl w-full text-center px-6">
//
//           {/* Logo / Title */}
//           <h1 className="text-5xl md:text-6xl font-extrabold mb-6">
//             <span className="text-red-500">Boxing</span> Training
//           </h1>
//           <h2 className="text-5xl md:text-6xl font-extrabold mb-6">
//             by Nefed
//             <span className='text-red-500'>
//              Man
//             </span>
//           </h2>
//
//           <p className="text-zinc-400 text-lg md:text-xl max-w-2xl mx-auto mb-12">
//             Онлайн-запись на тренировки.
//             Быстро. Удобно. Без звонков.
//           </p>
//
//           {/* Cards */}
//           <div className="grid md:grid-cols-2 gap-8">
//
//             {/* Client */}
//             <div className="bg-zinc-900/80 backdrop-blur rounded-2xl border border-zinc-800 p-8 hover:border-red-500/40 transition">
//
//               <h2 className="text-2xl font-bold mb-3">Для клиентов</h2>
//
//               <p className="text-zinc-400 mb-6">
//                 Запишитесь на тренировку
//                 в удобное время
//               </p>
//
//               <Link href="/book">
//                 <Button
//                     size="lg"
//                     className="w-full bg-red-600 hover:bg-red-700 text-white cursor-pointer"
//                 >
//                   Записаться
//                 </Button>
//               </Link>
//             </div>
//
//             {/* Admin */}
//             <div className="bg-zinc-900/80 backdrop-blur rounded-2xl border border-zinc-800 p-8 hover:border-blue-500/40 transition">
//
//               <h2 className="text-2xl font-bold mb-3">Для тренера</h2>
//
//               <p className="text-zinc-400 mb-6">
//                 Управление расписанием
//                 и клиентами
//               </p>
//
//               <Link href="/admin/login">
//                 <Button
//                     size="lg"
//                     variant="outline"
//                     className="text-black w-full border-zinc-700 hover:bg-zinc-800 hover:text-white cursor-pointer"
//                 >
//                   Админ-панель
//                 </Button>
//               </Link>
//             </div>
//
//           </div>
//
//           {/* Footer */}
//           <p className="mt-12 text-zinc-500 text-sm">
//             © {new Date().getFullYear()} Boxing Gym System
//           </p>
//
//         </div>
//
//       </main>
//   );
// }
//
//
// "use client";
//
// import Link from "next/link";
// import { Button } from "@/components/ui/button";
// import { Phone } from "lucide-react"; // можно использовать любую иконку телефона
//
// export default function HomePage() {
//     const coachNumber = "+380660026898";
//     const formattedNumber = "+380 66 002 68 98";
//
//     return (
//         <main className="min-h-screen w-full bg-zinc-950 text-white flex items-center justify-center relative overflow-hidden">
//
//             {/* Background glow */}
//             <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(220,38,38,0.25),transparent_60%)]" />
//
//             {/* Content */}
//             <div className="relative z-10 max-w-4xl w-full text-center px-6 space-y-8">
//
//                 {/* Logo / Title */}
//                 <h1 className="text-5xl md:text-6xl font-extrabold mb-2">
//                     <span className="text-red-500">Boxing</span> Training
//                 </h1>
//                 <h2 className="text-5xl md:text-6xl font-extrabold mb-6">
//                     by Nefed <span className='text-red-500'>Man</span>
//                 </h2>
//
//                 <p className="text-zinc-400 text-lg md:text-xl max-w-2xl mx-auto mb-12">
//                     Онлайн-запись на тренировки. Быстро. Удобно.
//                 </p>
//
//                 {/* Cards */}
//                 <div className="grid md:grid-cols-2 gap-8">
//
//                     {/* Client */}
//                     <div className="bg-zinc-900/80 backdrop-blur rounded-2xl border border-zinc-800 p-8 hover:border-red-500/40 transition">
//                         <h2 className="text-2xl font-bold mb-3">Для клиентов</h2>
//                         <p className="text-zinc-400 mb-6">
//                             Запишитесь на тренировку в удобное время
//                         </p>
//                         <Link href="/book">
//                             <Button
//                                 size="lg"
//                                 className="w-full bg-red-600 hover:bg-red-700 text-white cursor-pointer"
//                             >
//                                 Записаться
//                             </Button>
//                         </Link>
//                     </div>
//
//                     {/* Admin */}
//                     <div className="bg-zinc-900/80 backdrop-blur rounded-2xl border border-zinc-800 p-8 hover:border-blue-500/40 transition">
//                         <h2 className="text-2xl font-bold mb-3">Для тренера</h2>
//                         <p className="text-zinc-400 mb-6">
//                             Управление расписанием и клиентами
//                         </p>
//                         <Link href="/admin/login">
//                             <Button
//                                 size="lg"
//                                 variant="outline"
//                                 className="text-black w-full border-zinc-700 hover:bg-zinc-800 hover:text-white cursor-pointer"
//                             >
//                                 Админ-панель
//                             </Button>
//                         </Link>
//                     </div>
//
//                 </div>
//
//                 {/* Trainer phone */}
//                 <div className="mt-8 flex flex-col items-center gap-2">
//                     <p className="text-zinc-400 text-lg md:text-xl mb-2">
//                         Контактный номер тренера:
//                     </p>
//                     <a
//                         href={`tel:${coachNumber}`}
//                         className="inline-flex items-center gap-2 bg-red-600 text-white px-6 py-3 rounded-2xl text-xl md:text-2xl font-semibold tracking-wide shadow-lg hover:bg-red-700 transition"
//                     >
//                         <Phone className="w-6 h-6" />
//                         {formattedNumber}
//                     </a>
//                 </div>
//
//                 {/* Footer */}
//                 <p className="mt-12 text-zinc-500 text-sm">
//                     © {new Date().getFullYear()} Boxing Gym System by Symonov
//                 </p>
//
//             </div>
//
//         </main>
//     );
// }
//
// "use client";
//
// import Link from "next/link";
// import { Button } from "@/components/ui/button";
// import { Phone, MapPin } from "lucide-react"; // иконка карты для адреса
//
// export default function HomePage() {
//     const coachNumber = "+48452761828";
//     const formattedNumber = "+48 45 276 18 28";
//     const address = "SFC24 Warszawa Wola Wolska 19/25, 01-201";
//
//     return (
//         <main className="min-h-screen w-full bg-zinc-950 text-white flex items-center justify-center relative overflow-hidden">
//
//             {/* Background glow */}
//             <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(220,38,38,0.25),transparent_60%)]" />
//
//             {/* Content */}
//             <div className="relative z-10 max-w-4xl w-full text-center px-6 space-y-8">
//
//                 {/* Logo / Title */}
//                 <h1 className="text-5xl md:text-6xl font-extrabold mb-2">
//                     <span className="text-red-500">Boxing</span> Training
//                 </h1>
//                 <h2 className="text-5xl md:text-6xl font-extrabold mb-6">
//                     by Nefed <span className='text-red-500'>Man</span>
//                 </h2>
//
//                 <p className="text-zinc-400 text-lg md:text-xl max-w-2xl mx-auto mb-12">
//                     Онлайн-запись на тренировки. Быстро. Удобно.
//                 </p>
//
//                 {/* Cards */}
//                 <div className="grid md:grid-cols-2 gap-8">
//
//                     {/* Client */}
//                     <div className="bg-zinc-900/80 backdrop-blur rounded-2xl border border-zinc-800 p-8 hover:border-red-500/40 transition">
//                         <h2 className="text-2xl font-bold mb-3">Для клиентов</h2>
//                         <p className="text-zinc-400 mb-6">
//                             Запишитесь на тренировку в удобное время
//                         </p>
//                         <Link href="/book">
//                             <Button
//                                 size="lg"
//                                 className="w-full bg-red-600 hover:bg-red-700 text-white cursor-pointer"
//                             >
//                                 Записаться
//                             </Button>
//                         </Link>
//                     </div>
//
//                     {/* Admin */}
//                     <div className="bg-zinc-900/80 backdrop-blur rounded-2xl border border-zinc-800 p-8 hover:border-blue-500/40 transition">
//                         <h2 className="text-2xl font-bold mb-3">Для тренера</h2>
//                         <p className="text-zinc-400 mb-6">
//                             Управление расписанием и клиентами
//                         </p>
//                         <Link href="/admin/login">
//                             <Button
//                                 size="lg"
//                                 variant="outline"
//                                 className="text-black w-full border-zinc-700 hover:bg-zinc-800 hover:text-white cursor-pointer"
//                             >
//                                 Админ-панель
//                             </Button>
//                         </Link>
//                     </div>
//
//                 </div>
//
//                 {/* Trainer contact */}
//                 <div className="mt-8 flex flex-col items-center gap-2">
//                     {/* Phone */}
//                     <a
//                         href={`tel:${coachNumber}`}
//                         className="inline-flex items-center gap-2 bg-red-600 text-white px-6 py-3 rounded-2xl text-xl md:text-2xl font-semibold tracking-wide shadow-lg hover:bg-red-700 transition"
//                     >
//                         <Phone className="w-6 h-6" />
//                         {formattedNumber}
//                     </a>
//
//                     {/* Address */}
//                     <div className="inline-flex items-center gap-2 bg-zinc-800 text-zinc-200 px-6 py-2 rounded-2xl text-base md:text-lg font-medium shadow-sm mt-2">
//                         <MapPin className="w-5 h-5 text-red-500" />
//                         {address}
//                     </div>
//                 </div>
//
//                 {/* Footer */}
//                 <p className="mt-12 text-zinc-500 text-sm">
//                     © {new Date().getFullYear()} Boxing Gym System by Symonov
//                 </p>
//
//             </div>
//
//         </main>
//     );
// }
//
// "use client";
//
// import Link from "next/link";
// import { Button } from "@/components/ui/button";
// import { Phone, MapPin } from "lucide-react";
//
// export default function HomePage() {
//     const coachNumber = "+48452761828";
//     const formattedNumber = "+48 45 276 18 28";
//     const address = "SFC24 Warszawa Wola Wolska 19/25, 01-201";
//     const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;
//
//     return (
//         <main className="min-h-screen w-full bg-zinc-950 text-white flex items-center justify-center relative overflow-hidden">
//
//             {/* Background glow */}
//             <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(220,38,38,0.25),transparent_60%)]" />
//
//             {/* Content */}
//             <div className="relative z-10 max-w-4xl w-full text-center px-6 space-y-8">
//
//                 {/* Spacer to move title lower */}
//                 <div className="mt-16"></div>
//
//                 {/* Logo / Title */}
//                 <h1 className="text-5xl md:text-6xl font-extrabold mb-2">
//                     <span className="text-red-500">Boxing</span> Training
//                 </h1>
//                 <h2 className="text-5xl md:text-6xl font-extrabold mb-6">
//                     by Nefed <span className='text-red-500'>Man</span>
//                 </h2>
//
//                 <p className="text-zinc-400 text-lg md:text-xl max-w-2xl mx-auto mb-12">
//                     Онлайн-запись на тренировки. Быстро. Удобно.
//                 </p>
//
//                 {/* Cards */}
//                 <div className="grid md:grid-cols-2 gap-8">
//
//                     {/* Client */}
//                     <div className="bg-zinc-900/80 backdrop-blur rounded-2xl border border-zinc-800 p-8 hover:border-red-500/40 transition">
//                         <h2 className="text-2xl font-bold mb-3">Для клиентов</h2>
//                         <p className="text-zinc-400 mb-6">
//                             Запишитесь на тренировку в удобное время
//                         </p>
//                         <Link href="/book">
//                             <Button
//                                 size="lg"
//                                 className="w-full bg-red-600 hover:bg-red-700 text-white cursor-pointer"
//                             >
//                                 Записаться
//                             </Button>
//                         </Link>
//                     </div>
//
//                     {/* Admin */}
//                     <div className="bg-zinc-900/80 backdrop-blur rounded-2xl border border-zinc-800 p-8 hover:border-blue-500/40 transition">
//                         <h2 className="text-2xl font-bold mb-3">Для тренера</h2>
//                         <p className="text-zinc-400 mb-6">
//                             Управление расписанием и клиентами
//                         </p>
//                         <Link href="/admin/login">
//                             <Button
//                                 size="lg"
//                                 variant="outline"
//                                 className="text-black w-full border-zinc-700 hover:bg-zinc-800 hover:text-white cursor-pointer"
//                             >
//                                 Админ-панель
//                             </Button>
//                         </Link>
//                     </div>
//
//                 </div>
//
//                 {/* Trainer contact */}
//                 <div className="mt-8 flex flex-col items-center gap-2">
//                     {/* Phone */}
//                     <a
//                         href={`tel:${coachNumber}`}
//                         className="inline-flex items-center gap-2 bg-red-600 text-white px-6 py-3 rounded-2xl text-xl md:text-2xl font-semibold tracking-wide shadow-lg hover:bg-red-700 transition"
//                     >
//                         <Phone className="w-6 h-6" />
//                         {formattedNumber}
//                     </a>
//
//                     {/* Address clickable */}
//                     <a
//                         href={mapsUrl}
//                         target="_blank"
//                         rel="noopener noreferrer"
//                         className="inline-flex items-center gap-2 bg-zinc-800 text-zinc-200 px-6 py-2 rounded-2xl text-base md:text-lg font-medium shadow-sm mt-2 hover:bg-zinc-700 transition"
//                     >
//                         <MapPin className="w-5 h-5 text-red-500" />
//                         {address}
//                     </a>
//                 </div>
//
//                 {/* Footer */}
//                 <p className="mt-12 text-zinc-500 text-sm">
//                     © {new Date().getFullYear()} Boxing Gym System by Symonov
//                 </p>
//
//             </div>
//
//         </main>
//     );
// }



//
// "use client";
//
// import Link from "next/link";
// import { Button } from "@/components/ui/button";
// import { Phone, MapPin, Plus } from "lucide-react";
//
// export default function HomePage() {
//     const coachNumber = "+48452761828";
//     const formattedNumber = "+48 45 276 18 28";
//     const address = "SFC24 Warszawa Wola Wolska 19/25, 01-201";
//     const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;
//
//     return (
//         <main className="min-h-screen w-full bg-zinc-950 text-white relative overflow-hidden">
//
//             {/* Glow background */}
//             <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(220,38,38,0.2),transparent_60%)]" />
//
//             {/* Admin plus button */}
//             <Link href="/admin/login">
//                 <div className="absolute top-6 right-6 z-20 bg-red-600 hover:bg-red-700 w-10 h-10 rounded-full flex items-center justify-center shadow-lg cursor-pointer transition">
//                     <Plus className="w-5 h-5 text-white" />
//                 </div>
//             </Link>
//
//             <div className="relative z-10 max-w-6xl mx-auto px-6 py-16 space-y-20">
//
//                 {/* HERO */}
//                 <section className="text-center space-y-6">
//                     <h1 className="text-5xl md:text-6xl font-extrabold">
//                         <span className="text-red-500">Boxing</span> & Functional Training
//                     </h1>
//                     <p className="text-zinc-400 text-lg md:text-xl max-w-3xl mx-auto">
//                         Профессиональные тренировки по боксу и функциональному тренингу
//                         для мужчин, девушек и детей. Улучшай форму, силу и выносливость
//                         в современном зале в Варшаве.
//                     </p>
//                     <Link href="/book">
//                         <Button
//                             size="lg"
//                             className="bg-red-600 hover:bg-red-700 text-white px-10 py-6 text-lg"
//                         >
//                             Записаться на тренировку
//                         </Button>
//                     </Link>
//                 </section>
//
//                 {/* НАПРАВЛЕНИЯ */}
//                 <section className="grid md:grid-cols-2 gap-10">
//                     <div className="bg-zinc-900/80 p-8 rounded-2xl border border-zinc-800 hover:border-red-500/40 transition">
//                         <h2 className="text-3xl font-bold mb-4 text-red-500">Бокс</h2>
//                         <p className="text-zinc-400 leading-relaxed">
//                             Постановка техники ударов, работа на лапах и мешке, спарринги,
//                             развитие скорости и реакции. Подходит как для новичков,
//                             так и для продвинутых спортсменов.
//                         </p>
//                     </div>
//
//                     <div className="bg-zinc-900/80 p-8 rounded-2xl border border-zinc-800 hover:border-red-500/40 transition">
//                         <h2 className="text-3xl font-bold mb-4 text-red-500">Функциональный тренинг</h2>
//                         <p className="text-zinc-400 leading-relaxed">
//                             Укрепление всего тела, жиросжигание, развитие выносливости
//                             и силы. Отлично дополняет бокс или подходит как самостоятельное направление.
//                         </p>
//                     </div>
//                 </section>
//
//                 {/* ДЛЯ КОГО */}
//                 <section className="space-y-10">
//                     <h2 className="text-4xl font-bold text-center">Тренировки для всех</h2>
//
//                     <div className="grid md:grid-cols-3 gap-8">
//
//                         <div className="bg-zinc-900 p-6 rounded-2xl border border-zinc-800">
//                             <h3 className="text-xl font-semibold mb-3 text-red-500">Мужчины</h3>
//                             <p className="text-zinc-400">
//                                 Сила, характер, уверенность. Подготовка к соревнованиям
//                                 или тренировки для поддержания формы.
//                             </p>
//                         </div>
//
//                         <div className="bg-zinc-900 p-6 rounded-2xl border border-zinc-800">
//                             <h3 className="text-xl font-semibold mb-3 text-red-500">Девушки</h3>
//                             <p className="text-zinc-400">
//                                 Эффективное жиросжигание, подтянутое тело, самооборона
//                                 и уверенность в себе.
//                             </p>
//                         </div>
//
//                         <div className="bg-zinc-900 p-6 rounded-2xl border border-zinc-800">
//                             <h3 className="text-xl font-semibold mb-3 text-red-500">Дети</h3>
//                             <p className="text-zinc-400">
//                                 Дисциплина, координация, развитие характера
//                                 и физической подготовки с раннего возраста.
//                             </p>
//                         </div>
//
//                     </div>
//                 </section>
//
//                 {/* ПРЕИМУЩЕСТВА */}
//                 <section className="text-center space-y-6">
//                     <h2 className="text-4xl font-bold">Почему выбирают нас?</h2>
//                     <p className="text-zinc-400 max-w-3xl mx-auto">
//                         Индивидуальный подход, современные методики тренировок,
//                         дружеская атмосфера и реальный результат.
//                     </p>
//                 </section>
//
//                 {/* Контакты */}
//                 <section className="flex flex-col items-center gap-4">
//
//                     <a
//                         href={`tel:${coachNumber}`}
//                         className="inline-flex items-center gap-2 bg-red-600 text-white px-6 py-3 rounded-2xl text-xl font-semibold shadow-lg hover:bg-red-700 transition"
//                     >
//                         <Phone className="w-6 h-6" />
//                         {formattedNumber}
//                     </a>
//
//                     <a
//                         href={mapsUrl}
//                         target="_blank"
//                         rel="noopener noreferrer"
//                         className="inline-flex items-center gap-2 bg-zinc-800 text-zinc-200 px-6 py-3 rounded-2xl text-base font-medium hover:bg-zinc-700 transition"
//                     >
//                         <MapPin className="w-5 h-5 text-red-500" />
//                         {address}
//                     </a>
//                 </section>
//
//                 {/* Footer */}
//                 <footer className="text-center text-zinc-500 text-sm pt-10">
//                     © {new Date().getFullYear()} Boxing Gym System by Symonov
//                 </footer>
//
//             </div>
//         </main>
//     );
// }


"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Phone, MapPin, Plus } from "lucide-react";
import { motion } from "framer-motion";

export default function HomePage() {
    const coachNumber = "+48452761828";
    const formattedNumber = "+48 45 276 18 28";
    const address = "SFC24 Warszawa Wola Wolska 19/25, 01-201";
    const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;

    return (
        <main className="min-h-screen w-full bg-zinc-950 text-white relative overflow-hidden">

            {/* Background glow */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(220,38,38,0.25),transparent_60%)]" />

            {/* HEADER */}
            <header className="fixed top-0 left-0 w-full z-30 backdrop-blur bg-zinc-950/70 border-b border-zinc-800">
                <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">

                    {/* Logo */}
                    <h1 className="text-xl md:text-2xl font-bold tracking-[0.4em] text-white">
                        <span className="text-red-500">NEFED</span>MAN
                    </h1>

                    {/* Admin plus */}
                    <Link href="/admin/login">
                        <div className="bg-red-600 hover:bg-red-700 w-9 h-9 rounded-full flex items-center justify-center shadow-lg cursor-pointer transition">
                            <Plus className="w-4 h-4 text-white" />
                        </div>
                    </Link>

                </div>
            </header>

            {/* CONTENT */}
            <div className="relative z-10 max-w-6xl mx-auto px-6 pt-40 pb-20 space-y-24">

                {/* HERO */}
                <motion.section
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center space-y-6"
                >
                    <h2 className="text-5xl md:text-6xl font-extrabold leading-tight">
                        <span className="text-red-500">Boxing</span> &
                        <br /> Functional Training
                    </h2>

                    <p className="text-zinc-400 text-lg md:text-xl max-w-3xl mx-auto">
                        Профессиональные тренировки по боксу и функциональному тренингу
                        для мужчин, девушек и детей в Варшаве.
                        Развивай силу, выносливость и уверенность.
                    </p>

                    <Link href="/book">
                        <Button
                            size="lg"
                            className="bg-red-600 hover:bg-red-700 text-white px-12 py-6 text-lg shadow-xl"
                        >
                            Записаться на тренировку
                        </Button>
                    </Link>
                </motion.section>

                {/* НАПРАВЛЕНИЯ */}
                <section className="grid md:grid-cols-2 gap-12">

                    <motion.div
                        whileHover={{ scale: 1.03 }}
                        className="bg-zinc-900/80 p-10 rounded-2xl border border-zinc-800 hover:border-red-500/40 transition"
                    >
                        <h3 className="text-3xl font-bold mb-4 text-red-500">Бокс</h3>
                        <p className="text-zinc-400 leading-relaxed">
                            Постановка техники, работа на лапах и мешке,
                            развитие скорости и реакции. Подходит новичкам
                            и продвинутым спортсменам.
                        </p>
                    </motion.div>

                    <motion.div
                        whileHover={{ scale: 1.03 }}
                        className="bg-zinc-900/80 p-10 rounded-2xl border border-zinc-800 hover:border-red-500/40 transition"
                    >
                        <h3 className="text-3xl font-bold mb-4 text-red-500">Функциональный тренинг</h3>
                        <p className="text-zinc-400 leading-relaxed">
                            Силовые и кардио нагрузки, жиросжигание,
                            укрепление всего тела и развитие выносливости.
                        </p>
                    </motion.div>

                </section>

                {/* ДЛЯ КОГО */}
                <section className="space-y-12 text-center">
                    <h2 className="text-4xl font-bold">Тренировки для всех</h2>

                    <div className="grid md:grid-cols-3 gap-8">

                        <div className="bg-zinc-900 p-8 rounded-2xl border border-zinc-800">
                            <h4 className="text-xl font-semibold mb-3 text-red-500">Мужчины</h4>
                            <p className="text-zinc-400">
                                Сила, дисциплина и подготовка к соревнованиям
                                или поддержание отличной формы.
                            </p>
                        </div>

                        <div className="bg-zinc-900 p-8 rounded-2xl border border-zinc-800">
                            <h4 className="text-xl font-semibold mb-3 text-red-500">Девушки</h4>
                            <p className="text-zinc-400">
                                Подтянутое тело, уверенность и эффективное
                                жиросжигание без скучного кардио.
                            </p>
                        </div>

                        <div className="bg-zinc-900 p-8 rounded-2xl border border-zinc-800">
                            <h4 className="text-xl font-semibold mb-3 text-red-500">Дети</h4>
                            <p className="text-zinc-400">
                                Развитие дисциплины, координации и
                                физической подготовки с раннего возраста.
                            </p>
                        </div>

                    </div>
                </section>

                {/* CTA + Контакты */}
                <section className="flex flex-col items-center gap-5">

                    <a
                        href={`tel:${coachNumber}`}
                        className="inline-flex items-center gap-2 bg-red-600 text-white px-8 py-4 rounded-2xl text-xl font-semibold shadow-lg hover:bg-red-700 transition"
                    >
                        <Phone className="w-6 h-6" />
                        {formattedNumber}
                    </a>

                    <a
                        href={mapsUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 bg-zinc-800 text-zinc-200 px-6 py-3 rounded-2xl text-base hover:bg-zinc-700 transition"
                    >
                        <MapPin className="w-5 h-5 text-red-500" />
                        {address}
                    </a>
                </section>

                {/* FOOTER */}
                <footer className="text-center text-zinc-500 text-sm pt-10 border-t border-zinc-800">
                    © {new Date().getFullYear()} Production by Symonov
                </footer>

            </div>
        </main>
    );
}