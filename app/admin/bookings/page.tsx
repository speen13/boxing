
//
//
// "use client";
//
// import { useEffect, useState } from "react";
// import { supabase } from "@/lib/supabase";
//
// import { Calendar } from "@/components/ui/calendar";
// import {
//     Table,
//     TableBody,
//     TableCell,
//     TableHead,
//     TableHeader,
//     TableRow,
// } from "@/components/ui/table";
// import { Button } from "@/components/ui/button";
//
// interface Booking {
//     id: string;
//     name: string;
//     phone: string;
//     date: string;
//     time: string;
// }
//
// export default function AdminBookings() {
//     const [bookings, setBookings] = useState<Booking[]>([]);
//     const [loading, setLoading] = useState(true);
//     const [selectedDate, setSelectedDate] = useState<string>("");
//
//     /* =========================
//        Загрузка записей
//     ========================= */
//     const loadBookings = async () => {
//         try {
//             setLoading(true);
//
//             const { data, error } = await supabase
//                 .from("bookings")
//                 .select("*")
//                 .order("date", { ascending: true })
//                 .order("time", { ascending: true });
//
//             if (error) throw error;
//
//             setBookings(data || []);
//         } catch (e) {
//             console.error("Ошибка загрузки:", e);
//             alert("Ошибка загрузки записей");
//         } finally {
//             setLoading(false);
//         }
//     };
//
//     /* =========================
//        Проверка авторизации
//     ========================= */
//     useEffect(() => {
//         const checkAuth = async () => {
//             try {
//                 const { data, error } = await supabase.auth.getUser();
//
//                 if (error || !data.user) {
//                     window.location.replace("/admin/login");
//                     return;
//                 }
//
//                 await loadBookings();
//             } catch (e) {
//                 console.error("Auth error:", e);
//                 window.location.replace("/admin/login");
//             }
//         };
//
//         checkAuth();
//     }, []);
//
//     /* =========================
//        Удаление записи
//     ========================= */
//     const removeBooking = async (id: string) => {
//         if (!confirm("Удалить эту запись?")) return;
//
//         try {
//             const { error } = await supabase
//                 .from("bookings")
//                 .delete()
//                 .eq("id", id);
//
//             if (error) throw error;
//
//             // Обновляем UI без перезагрузки
//             setBookings((prev) => prev.filter((b) => b.id !== id));
//         } catch (e) {
//             console.error("Ошибка удаления:", e);
//             alert("Не удалось удалить запись");
//         }
//     };
//
//     /* =========================
//        Фильтрация по дате
//     ========================= */
//     const filteredBookings = selectedDate
//         ? bookings.filter((b) => b.date === selectedDate)
//         : bookings;
//
//     /* =========================
//        Выход
//     ========================= */
//     const logout = async () => {
//         await supabase.auth.signOut();
//         window.location.replace("/admin/login");
//     };
//
//     /* =========================
//        Загрузка
//     ========================= */
//     if (loading) {
//         return (
//             <div className="text-center mt-20 text-lg text-white">
//                 Загрузка...
//             </div>
//         );
//     }
//
//     /* =========================
//        UI
//     ========================= */
//     return (
//         <div className="p-8 max-w-7xl mx-auto space-y-6 bg-gray-900 min-h-screen text-white">
//
//             {/* Header */}
//             <div className="flex justify-between items-center mb-6">
//                 <h1 className="text-4xl font-bold text-red-600">
//                     Бронирования Зала Бокса
//                 </h1>
//
//                 <Button
//                     variant="destructive"
//                     className="bg-red-600 hover:bg-red-700"
//                     onClick={() => void logout()}
//                 >
//                     Выйти
//                 </Button>
//             </div>
//
//             {/* Календарь */}
//             <div className="bg-gray-800 p-4 rounded-lg inline-block">
//
//                 <Calendar
//                     mode="single"
//                     selected={
//                         selectedDate
//                             ? new Date(selectedDate + "T00:00:00")
//                             : undefined
//                     }
//                     onSelect={(date) => {
//                         if (!date) return;
//
//                         const y = date.getFullYear();
//                         const m = String(date.getMonth() + 1).padStart(2, "0");
//                         const d = String(date.getDate()).padStart(2, "0");
//
//                         setSelectedDate(`${y}-${m}-${d}`);
//                     }}
//                     className="bg-gray-900 text-white rounded-lg"
//                 />
//
//             </div>
//
//             {/* Таблица */}
//             <Table className="bg-gray-800 border-gray-700 mt-4">
//
//                 <TableHeader>
//                     <TableRow className="text-gray-300">
//                         <TableHead className="text-red-500">Время</TableHead>
//                         <TableHead className="text-red-500">Имя</TableHead>
//                         <TableHead className="text-red-500">Телефон</TableHead>
//                         <TableHead className="text-red-500">Действия</TableHead>
//                     </TableRow>
//                 </TableHeader>
//
//                 <TableBody>
//
//                     {filteredBookings.length === 0 && (
//                         <TableRow>
//                             <TableCell colSpan={4} className="text-center py-6 text-gray-400">
//                                 Нет записей
//                             </TableCell>
//                         </TableRow>
//                     )}
//
//                     {filteredBookings.map((b) => (
//                         <TableRow
//                             key={b.id}
//                             className="hover:bg-gray-700"
//                         >
//                             <TableCell className="font-bold text-red-500">
//                                 {b.time}
//                             </TableCell>
//
//                             <TableCell>{b.name}</TableCell>
//
//                             <TableCell>{b.phone}</TableCell>
//
//                             <TableCell>
//                                 <Button
//                                     variant="destructive"
//                                     size="sm"
//                                     className="bg-red-600 hover:bg-red-700"
//                                     onClick={() => void removeBooking(b.id)}
//                                 >
//                                     Удалить
//                                 </Button>
//                             </TableCell>
//
//                         </TableRow>
//                     ))}
//
//                 </TableBody>
//
//             </Table>
//
//             {/* Кнопка все записи */}
//             <Button
//                 className="mt-4 bg-gray-700 hover:bg-gray-600"
//                 onClick={() => setSelectedDate("")}
//             >
//                 Все записи
//             </Button>
//
//         </div>
//     );
// }
// рабочая версия
//
// "use client";
//
// import { useEffect, useState } from "react";
// import { supabase } from "@/lib/supabase";
//
// import { Calendar } from "@/components/ui/calendar";
// import {
//     Table,
//     TableBody,
//     TableCell,
//     TableHead,
//     TableHeader,
//     TableRow,
// } from "@/components/ui/table";
//
// import { Button } from "@/components/ui/button";
//
// interface Booking {
//     id: string;
//     name: string;
//     phone: string;
//     date: string;
//     time: string;
// }
//
// export default function AdminBookings() {
//     const [bookings, setBookings] = useState<Booking[]>([]);
//     const [loading, setLoading] = useState(true);
//     const [selectedDate, setSelectedDate] = useState("");
//
//     /* ================= Load ================= */
//
//     const loadBookings = async () => {
//         try {
//             setLoading(true);
//
//             const { data, error } = await supabase
//                 .from("bookings")
//                 .select("*")
//                 .order("date")
//                 .order("time");
//
//             if (error) throw error;
//
//             setBookings(data || []);
//         } catch (e) {
//             console.error(e);
//             alert("Ошибка загрузки");
//         } finally {
//             setLoading(false);
//         }
//     };
//
//     /* ================= Auth ================= */
//
//     useEffect(() => {
//         const checkAuth = async () => {
//             const { data } = await supabase.auth.getUser();
//
//             if (!data.user) {
//                 window.location.replace("/admin/login");
//                 return;
//             }
//
//             await loadBookings();
//         };
//
//         checkAuth();
//     }, []);
//
//     /* ================= Delete ================= */
//
//     const removeBooking = async (id: string) => {
//         if (!confirm("Удалить запись?")) return;
//
//         try {
//             const { error } = await supabase
//                 .from("bookings")
//                 .delete()
//                 .eq("id", id);
//
//             if (error) throw error;
//
//             setBookings((prev) => prev.filter((b) => b.id !== id));
//         } catch (e) {
//             console.error(e);
//             alert("Ошибка удаления");
//         }
//     };
//
//     /* ================= Logout ================= */
//
//     const logout = async () => {
//         await supabase.auth.signOut();
//         window.location.replace("/admin/login");
//     };
//
//     /* ================= Filter ================= */
//
//     const filtered = selectedDate
//         ? bookings.filter((b) => b.date === selectedDate)
//         : bookings;
//
//     /* ================= Loading ================= */
//
//     if (loading) {
//         return (
//             <div className="h-screen flex items-center justify-center bg-zinc-950 text-white text-xl">
//                 Загрузка...
//             </div>
//         );
//     }
//
//     /* ================= UI ================= */
//
//     return (
//         <div className="h-screen w-screen bg-zinc-950 text-white flex">
//
//             {/* ================= Sidebar ================= */}
//             <aside className="w-72 bg-zinc-900 border-r border-zinc-800 p-6 flex flex-col">
//
//                 <h2 className="text-2xl font-bold text-red-500 mb-8">
//                     Boxing Admin
//                 </h2>
//
//                 <div className="mb-6">
//                     <p className="text-sm text-zinc-400 mb-2">Фильтр по дате</p>
//
//                     <Calendar
//                         mode="single"
//                         selected={
//                             selectedDate
//                                 ? new Date(selectedDate + "T00:00:00")
//                                 : undefined
//                         }
//                         onSelect={(date) => {
//                             if (!date) return;
//
//                             const y = date.getFullYear();
//                             const m = String(date.getMonth() + 1).padStart(2, "0");
//                             const d = String(date.getDate()).padStart(2, "0");
//
//                             setSelectedDate(`${y}-${m}-${d}`);
//                         }}
//                         className="bg-zinc-950 rounded-lg border border-zinc-800"
//                     />
//                 </div>
//
//                 <Button
//                     variant="destructive"
//                     className="mt-auto bg-red-600 hover:bg-red-700"
//                     onClick={() => void logout()}
//                 >
//                     Выйти
//                 </Button>
//
//             </aside>
//
//             {/* ================= Main ================= */}
//             <main className="flex-1 p-8 overflow-auto">
//
//                 {/* Header */}
//                 <div className="flex justify-between items-center mb-8">
//
//                     <div>
//                         <h1 className="text-3xl font-bold">
//                             Бронирования
//                         </h1>
//
//                         <p className="text-zinc-400 mt-1">
//                             Управление записями клиентов
//                         </p>
//                     </div>
//
//                     {selectedDate && (
//                         <Button
//                             className="bg-zinc-800 hover:bg-zinc-700"
//                             onClick={() => setSelectedDate("")}
//                         >
//                             Показать все
//                         </Button>
//                     )}
//
//                 </div>
//
//                 {/* Stats */}
//                 <div className="grid grid-cols-3 gap-6 mb-8">
//
//                     <div className="bg-zinc-900 rounded-xl p-5 border border-zinc-800">
//                         <p className="text-zinc-400 text-sm">Всего записей</p>
//                         <p className="text-3xl font-bold mt-2">
//                             {bookings.length}
//                         </p>
//                     </div>
//
//                     <div className="bg-zinc-900 rounded-xl p-5 border border-zinc-800">
//                         <p className="text-zinc-400 text-sm">На выбранную дату</p>
//                         <p className="text-3xl font-bold mt-2">
//                             {filtered.length}
//                         </p>
//                     </div>
//
//                     <div className="bg-zinc-900 rounded-xl p-5 border border-zinc-800">
//                         <p className="text-zinc-400 text-sm">Сегодня</p>
//                         <p className="text-3xl font-bold mt-2 text-red-500">
//                             {
//                                 bookings.filter(
//                                     (b) =>
//                                         b.date ===
//                                         new Date().toISOString().slice(0, 10)
//                                 ).length
//                             }
//                         </p>
//                     </div>
//
//                 </div>
//
//                 {/* Table */}
//                 <div className="bg-zinc-900 rounded-xl border border-zinc-800 overflow-hidden">
//
//                     <Table>
//
//                         <TableHeader>
//                             <TableRow className="bg-zinc-800/80 backdrop-blur border-b border-zinc-700">
//
//                                 <TableHead className="text-zinc-200 font-semibold uppercase tracking-wide">
//                                     Время
//                                 </TableHead>
//
//                                 <TableHead className="text-zinc-200 font-semibold uppercase tracking-wide">
//                                     Имя
//                                 </TableHead>
//
//                                 <TableHead className="text-zinc-200 font-semibold uppercase tracking-wide">
//                                     Телефон
//                                 </TableHead>
//
//                                 <TableHead className="text-zinc-200 font-semibold uppercase tracking-wide text-right">
//                                     Действия
//                                 </TableHead>
//
//                             </TableRow>
//                         </TableHeader>
//
//                         <TableBody>
//
//                             {filtered.length === 0 && (
//                                 <TableRow>
//                                     <TableCell
//                                         colSpan={4}
//                                         className="text-center py-10 text-zinc-400"
//                                     >
//                                         Нет записей
//                                     </TableCell>
//                                 </TableRow>
//                             )}
//
//                             {filtered.map((b) => (
//                                 <TableRow
//                                     key={b.id}
//                                     className="hover:bg-zinc-800/60 transition"
//                                 >
//
//                                     <TableCell className="font-bold text-red-500">
//                                         {b.time}
//                                     </TableCell>
//
//                                     <TableCell>{b.name}</TableCell>
//
//                                     <TableCell>{b.phone}</TableCell>
//
//                                     <TableCell className="text-right">
//                                         <Button
//                                             size="sm"
//                                             variant="destructive"
//                                             className="bg-red-600 hover:bg-red-700"
//                                             onClick={() => void removeBooking(b.id)}
//                                         >
//                                             Удалить
//                                         </Button>
//                                     </TableCell>
//
//                                 </TableRow>
//                             ))}
//
//                         </TableBody>
//
//                     </Table>
//
//                 </div>
//
//             </main>
//
//         </div>
//     );
// }
//
// "use client";
//
// import { useEffect, useState } from "react";
// import { supabase } from "@/lib/supabase";
// import { Calendar } from "@/components/ui/calendar";
// import { Button } from "@/components/ui/button";
//
// interface Booking {
//     id: string;
//     name: string;
//     phone: string;
//     date: string;
//     time: string;
// }
//
// export default function AdminBookingsResponsive() {
//     const [bookings, setBookings] = useState<Booking[]>([]);
//     const [loading, setLoading] = useState(true);
//     const [selectedDate, setSelectedDate] = useState("");
//
//     /* ================= Load ================= */
//     const loadBookings = async () => {
//         try {
//             setLoading(true);
//
//             const { data, error } = await supabase
//                 .from("bookings")
//                 .select("*")
//                 .order("date")
//                 .order("time");
//
//             if (error) throw error;
//
//             setBookings(data || []);
//         } catch (e) {
//             console.error(e);
//             alert("Ошибка загрузки");
//         } finally {
//             setLoading(false);
//         }
//     };
//
//     /* ================= Auth ================= */
//     useEffect(() => {
//         const checkAuth = async () => {
//             const { data } = await supabase.auth.getUser();
//
//             if (!data.user) {
//                 window.location.replace("/admin/login");
//                 return;
//             }
//
//             await loadBookings();
//         };
//
//         checkAuth();
//     }, []);
//
//     /* ================= Delete ================= */
//     const removeBooking = async (id: string) => {
//         if (!confirm("Удалить запись?")) return;
//
//         try {
//             const { error } = await supabase.from("bookings").delete().eq("id", id);
//
//             if (error) throw error;
//
//             setBookings((prev) => prev.filter((b) => b.id !== id));
//         } catch (e) {
//             console.error(e);
//             alert("Ошибка удаления");
//         }
//     };
//
//     /* ================= Logout ================= */
//     const logout = async () => {
//         await supabase.auth.signOut();
//         window.location.replace("/admin/login");
//     };
//
//     /* ================= Filter ================= */
//     const filtered = selectedDate
//         ? bookings.filter((b) => b.date === selectedDate)
//         : bookings;
//
//     /* ================= Loading ================= */
//     if (loading) {
//         return (
//             <div className="h-screen flex items-center justify-center bg-zinc-950 text-white text-xl">
//                 Загрузка...
//             </div>
//         );
//     }
//
//     /* ================= UI ================= */
//     return (
//         <div className="min-h-screen w-full bg-zinc-950 text-white flex flex-col md:flex-row">
//
//             {/* Sidebar / Filter */}
//             <aside className="md:w-72 bg-zinc-900 border-r border-zinc-800 p-6 hidden md:flex flex-col">
//                 <h2 className="text-2xl font-bold text-red-500 mb-6">Boxing Admin</h2>
//
//                 <p className="text-sm text-zinc-400 mb-2">Фильтр по дате</p>
//                 <Calendar
//                     mode="single"
//                     selected={selectedDate ? new Date(selectedDate + "T00:00:00") : undefined}
//                     onSelect={(date) => {
//                         if (!date) return;
//                         const y = date.getFullYear();
//                         const m = String(date.getMonth() + 1).padStart(2, "0");
//                         const d = String(date.getDate()).padStart(2, "0");
//                         setSelectedDate(`${y}-${m}-${d}`);
//                     }}
//                     className="bg-zinc-950 rounded-lg border border-zinc-800"
//                 />
//                 {selectedDate && (
//                     <Button
//                         className="mt-2 bg-zinc-800 hover:bg-zinc-700"
//                         onClick={() => setSelectedDate("")}
//                     >
//                         Показать все
//                     </Button>
//                 )}
//
//                 <Button
//                     variant="destructive"
//                     className="mt-auto bg-red-600 hover:bg-red-700"
//                     onClick={() => void logout()}
//                 >
//                     Выйти
//                 </Button>
//             </aside>
//
//             {/* Main */}
//             <main className="flex-1 p-4 md:p-8 overflow-auto">
//
//                 {/* Stats */}
//                 <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
//                     <div className="bg-zinc-900 rounded-xl p-4 border border-zinc-800">
//                         <p className="text-zinc-400 text-sm">Всего записей</p>
//                         <p className="text-2xl font-bold mt-1">{bookings.length}</p>
//                     </div>
//
//                     <div className="bg-zinc-900 rounded-xl p-4 border border-zinc-800">
//                         <p className="text-zinc-400 text-sm">На выбранную дату</p>
//                         <p className="text-2xl font-bold mt-1">{filtered.length}</p>
//                     </div>
//
//                     <div className="bg-zinc-900 rounded-xl p-4 border border-zinc-800">
//                         <p className="text-zinc-400 text-sm">Сегодня</p>
//                         <p className="text-2xl font-bold mt-1 text-red-500">
//                             {bookings.filter((b) => b.date === new Date().toISOString().slice(0, 10)).length}
//                         </p>
//                     </div>
//                 </div>
//
//                 {/* Desktop Table */}
//                 <div className="hidden md:block bg-zinc-900 rounded-xl border border-zinc-800 overflow-hidden">
//                     <table className="w-full text-left border-collapse">
//                         <thead className="bg-zinc-800/80 backdrop-blur border-b border-zinc-700">
//                         <tr>
//                             <th className="text-zinc-200 font-semibold uppercase p-3">Время</th>
//                             <th className="text-zinc-200 font-semibold uppercase p-3">Имя</th>
//                             <th className="text-zinc-200 font-semibold uppercase p-3">Телефон</th>
//                             <th className="text-zinc-200 font-semibold uppercase p-3 text-right">Действия</th>
//                         </tr>
//                         </thead>
//                         <tbody>
//                         {filtered.length === 0 ? (
//                             <tr>
//                                 <td colSpan={4} className="text-center py-10 text-zinc-400">
//                                     Нет записей
//                                 </td>
//                             </tr>
//                         ) : (
//                             filtered.map((b) => (
//                                 <tr key={b.id} className="hover:bg-zinc-800/60 transition">
//                                     <td className="font-bold text-red-500 p-3">{b.time}</td>
//                                     <td className="p-3">{b.name}</td>
//                                     <td className="p-3">{b.phone}</td>
//                                     <td className="text-right p-3">
//                                         <Button
//                                             size="sm"
//                                             variant="destructive"
//                                             className="bg-red-600 hover:bg-red-700"
//                                             onClick={() => void removeBooking(b.id)}
//                                         >
//                                             Удалить
//                                         </Button>
//                                     </td>
//                                 </tr>
//                             ))
//                         )}
//                         </tbody>
//                     </table>
//                 </div>
//                 {/* ================= Mobile Calendar ================= */}
//                 <div className="md:hidden mb-4">
//                     <p className="text-sm text-zinc-400 mb-2">Фильтр по дате</p>
//                     <Calendar
//                         mode="single"
//                         selected={selectedDate ? new Date(selectedDate + "T00:00:00") : undefined}
//                         onSelect={(date) => {
//                             if (!date) return;
//                             const y = date.getFullYear();
//                             const m = String(date.getMonth() + 1).padStart(2, "0");
//                             const d = String(date.getDate()).padStart(2, "0");
//                             setSelectedDate(`${y}-${m}-${d}`);
//                         }}
//                         className="bg-zinc-950 rounded-lg border border-zinc-800"
//                     />
//                     {selectedDate && (
//                         <Button
//                             className="mt-2 bg-zinc-800 hover:bg-zinc-700 w-full"
//                             onClick={() => setSelectedDate("")}
//                         >
//                             Показать все
//                         </Button>
//                     )}
//                 </div>
//                 {/* Mobile Cards */}
//                 <div className="md:hidden flex flex-col space-y-4">
//                     {filtered.length === 0 && (
//                         <p className="text-center text-zinc-400 py-10">Нет записей</p>
//                     )}
//
//                     {filtered.map((b) => (
//                         <div
//                             key={b.id}
//                             className="bg-zinc-900 border border-zinc-800 rounded-xl p-4 flex flex-col space-y-2"
//                         >
//                             <div className="flex justify-between items-center">
//                                 <span className="font-bold text-red-500">{b.time}</span>
//                                 <Button
//                                     size="sm"
//                                     variant="destructive"
//                                     className="bg-red-600 hover:bg-red-700"
//                                     onClick={() => void removeBooking(b.id)}
//                                 >
//                                     Удалить
//                                 </Button>
//                             </div>
//                             <p><span className="text-zinc-400">Имя:</span> {b.name}</p>
//                             <p>
//                                 <span className="text-zinc-400">Телефон:</span>{" "}
//                                 <a href={`tel:${b.phone}`} className="text-red-500 hover:underline">
//                                     {b.phone}
//                                 </a>
//                             </p>
//                             <p><span className="text-zinc-400">Дата:</span> {b.date}</p>
//                         </div>
//                     ))}
//                 </div>
//
//             </main>
//
//         </div>
//     );
// }

"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import { Calendar } from "@/components/ui/calendar";
import { Button } from "@/components/ui/button";

interface Booking {
    id: string;
    name: string;
    phone: string;
    date: string;
    time: string;
    deleted_at: string | null;
}

export default function AdminBookingsResponsive() {
    const [bookings, setBookings] = useState<Booking[]>([]);
    const [loading, setLoading] = useState(true);
    const [selectedDate, setSelectedDate] = useState("");

    /* ================= Load ================= */
    const loadBookings = async () => {
        try {
            setLoading(true);
            const { data, error } = await supabase
                .from("bookings")
                .select("*")
                .order("date")
                .order("time");

            if (error) throw error;

            setBookings(data || []);
        } catch (e) {
            console.error("Ошибка загрузки:", e);
            alert("Ошибка загрузки");
        } finally {
            setLoading(false);
        }
    };

    /* ================= Auth ================= */
    useEffect(() => {
        const checkAuth = async () => {
            const { data } = await supabase.auth.getUser();

            if (!data.user) {
                window.location.replace("/admin/login");
                return;
            }

            await loadBookings();
        };

        checkAuth();
    }, []);

    /* ================= Delete (Soft Delete) ================= */
    const removeBooking = async (id: string) => {
        if (!confirm("Удалить запись?")) return;

        try {
            const { data, error } = await supabase
                .from("bookings")
                .delete()
                .eq("id", id);

            if (error) throw error;

            setBookings(prev => prev.filter(b => b.id !== id));
        } catch (e) {
            console.error("Ошибка удаления:", e);
            alert("Не удалось удалить запись");
        }
    };

    /* ================= Logout ================= */
    const logout = async () => {
        await supabase.auth.signOut();
        window.location.replace("/admin/login");
    };

    /* ================= Filter ================= */
    const filtered = selectedDate
        ? bookings.filter(b => b.date === selectedDate)
        : bookings;

    /* ================= Loading ================= */
    if (loading) {
        return (
            <div className="h-screen flex items-center justify-center bg-zinc-950 text-white text-xl">
                Загрузка...
            </div>
        );
    }

    /* ================= UI ================= */
    return (
        <div className="min-h-screen w-full bg-zinc-950 text-white flex flex-col md:flex-row">

            {/* Sidebar / Filter */}
            <aside className="md:w-72 bg-zinc-900 border-r border-zinc-800 p-6 hidden md:flex flex-col">
                <h2 className="text-2xl font-bold text-red-500 mb-6">Boxing Admin</h2>

                <p className="text-sm text-zinc-400 mb-2">Фильтр по дате</p>
                <Calendar
                    mode="single"
                    selected={selectedDate ? new Date(selectedDate + "T00:00:00") : undefined}
                    onSelect={date => {
                        if (!date) return;
                        const y = date.getFullYear();
                        const m = String(date.getMonth() + 1).padStart(2, "0");
                        const d = String(date.getDate()).padStart(2, "0");
                        setSelectedDate(`${y}-${m}-${d}`);
                    }}
                    className="bg-zinc-950 rounded-lg border border-zinc-800"
                />
                {selectedDate && (
                    <Button className="mt-2 bg-zinc-800 hover:bg-zinc-700" onClick={() => setSelectedDate("")}>
                        Показать все
                    </Button>
                )}

                <Button variant="destructive" className="mt-auto bg-red-600 hover:bg-red-700" onClick={() => void logout()}>
                    Выйти
                </Button>
            </aside>

            {/* Main */}
            <main className="flex-1 p-4 md:p-8 overflow-auto">

                {/* Stats */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
                    <div className="bg-zinc-900 rounded-xl p-4 border border-zinc-800">
                        <p className="text-zinc-400 text-sm">Всего записей</p>
                        <p className="text-2xl font-bold mt-1">{bookings.length}</p>
                    </div>

                    <div className="bg-zinc-900 rounded-xl p-4 border border-zinc-800">
                        <p className="text-zinc-400 text-sm">На выбранную дату</p>
                        <p className="text-2xl font-bold mt-1">{filtered.length}</p>
                    </div>

                    <div className="bg-zinc-900 rounded-xl p-4 border border-zinc-800">
                        <p className="text-zinc-400 text-sm">Сегодня</p>
                        <p className="text-2xl font-bold mt-1 text-red-500">
                            {bookings.filter(b => b.date === new Date().toISOString().slice(0, 10)).length}
                        </p>
                    </div>
                </div>

                {/* Desktop Table */}
                <div className="hidden md:block bg-zinc-900 rounded-xl border border-zinc-800 overflow-hidden">
                    <table className="w-full text-left border-collapse">
                        <thead className="bg-zinc-800/80 backdrop-blur border-b border-zinc-700">
                        <tr>
                            <th className="text-zinc-200 font-semibold uppercase p-3">Время</th>
                            <th className="text-zinc-200 font-semibold uppercase p-3">Имя</th>
                            <th className="text-zinc-200 font-semibold uppercase p-3">Телефон</th>
                            <th className="text-zinc-200 font-semibold uppercase p-3 text-right">Действия</th>
                        </tr>
                        </thead>
                        <tbody>
                        {filtered.length === 0 ? (
                            <tr>
                                <td colSpan={4} className="text-center py-10 text-zinc-400">
                                    Нет записей
                                </td>
                            </tr>
                        ) : (
                            filtered.map(b => (
                                <tr key={b.id} className="hover:bg-zinc-800/60 transition">
                                    <td className="font-bold text-red-500 p-3">{b.time}</td>
                                    <td className="p-3">{b.name}</td>
                                    <td className="p-3">
                                        <a href={`tel:${b.phone}`} className="text-red-500 hover:underline">{b.phone}</a>
                                    </td>
                                    <td className="text-right p-3">
                                        <Button
                                            size="sm"
                                            variant="destructive"
                                            className="bg-red-600 hover:bg-red-700"
                                            onClick={() => void removeBooking(b.id)}
                                        >
                                            Удалить
                                        </Button>
                                    </td>
                                </tr>
                            ))
                        )}
                        </tbody>
                    </table>
                </div>

                {/* ================= Mobile Calendar ================= */}
                <div className="md:hidden mb-4">
                    <p className="text-sm text-zinc-400 mb-2">Фильтр по дате</p>
                    <Calendar
                        mode="single"
                        selected={selectedDate ? new Date(selectedDate + "T00:00:00") : undefined}
                        onSelect={date => {
                            if (!date) return;
                            const y = date.getFullYear();
                            const m = String(date.getMonth() + 1).padStart(2, "0");
                            const d = String(date.getDate()).padStart(2, "0");
                            setSelectedDate(`${y}-${m}-${d}`);
                        }}
                        className="bg-zinc-950 rounded-lg border border-zinc-800"
                    />
                    {selectedDate && (
                        <Button className="mt-2 bg-zinc-800 hover:bg-zinc-700 w-full" onClick={() => setSelectedDate("")}>
                            Показать все
                        </Button>
                    )}
                </div>

                {/* Mobile Cards */}
                <div className="md:hidden flex flex-col space-y-4">
                    {filtered.length === 0 && (
                        <p className="text-center text-zinc-400 py-10">Нет записей</p>
                    )}

                    {filtered.map(b => (
                        <div key={b.id} className="bg-zinc-900 border border-zinc-800 rounded-xl p-4 flex flex-col space-y-2">
                            <div className="flex justify-between items-center">
                                <span className="font-bold text-red-500">{b.time}</span>
                                <Button
                                    size="sm"
                                    variant="destructive"
                                    className="bg-red-600 hover:bg-red-700"
                                    onClick={() => void removeBooking(b.id)}
                                >
                                    Удалить
                                </Button>
                            </div>
                            <p><span className="text-zinc-400">Имя:</span> {b.name}</p>
                            <p>
                                <span className="text-zinc-400">Телефон:</span>{" "}
                                <a href={`tel:${b.phone}`} className="text-red-500 hover:underline">
                                    {b.phone}
                                </a>
                            </p>
                            <p><span className="text-zinc-400">Дата:</span> {b.date}</p>
                        </div>
                    ))}
                </div>

            </main>
        </div>
    );
}