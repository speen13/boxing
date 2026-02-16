
//
// "use client";
//
// import { useState, useEffect } from "react";
// import { supabase } from "@/lib/supabase";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
//
// const TIME_SLOTS = [
//     "09:00", "10:00", "11:00", "12:00",
//     "13:00", "14:00", "15:00", "16:00",
//     "17:00", "18:00"
// ];
//
// const COUNTRIES = [
//     { code: "+380", name: "Украина", flag: "🇺🇦" },
//     { code: "+7", name: "Россия", flag: "🇷🇺" },
//     { code: "+33", name: "Франция", flag: "🇫🇷" },
//     { code: "+49", name: "Германия", flag: "🇩🇪" },
//     { code: "+48", name: "Польша", flag: "🇵🇱" },
//     { code: "+34", name: "Испания", flag: "🇪🇸" },
//     { code: "+44", name: "Англия", flag: "🇬🇧" },
//     // Можно добавить ещё страны
// ];
//
// export default function BookingPage() {
//     const [name, setName] = useState("");
//     const [countryCode, setCountryCode] = useState("+380");
//     const [phoneNumber, setPhoneNumber] = useState("");
//     const [date, setDate] = useState("");
//     const [selectedTime, setSelectedTime] = useState("");
//     const [bookedTimes, setBookedTimes] = useState<string[]>([]);
//     const [nameError, setNameError] = useState<string | null>(null);
//     const [phoneError, setPhoneError] = useState<string | null>(null);
//     const [error, setError] = useState<string | null>(null);
//     const [success, setSuccess] = useState<string | null>(null);
//
//     // Загружаем занятые слоты при выборе даты
//     useEffect(() => {
//         if (!date) return;
//         async function fetchBooked() {
//             const { data } = await supabase
//                 .from("bookings")
//                 .select("time")
//                 .eq("date", date);
//
//             setBookedTimes(data ? data.map(d => d.time) : []);
//             setSelectedTime(""); // сброс выбранного времени при смене даты
//         }
//         fetchBooked();
//     }, [date]);
//
//     // Валидация имени
//     useEffect(() => {
//         const nameRegex = /^[а-яА-Яa-zA-Z\s]{2,}$/;
//         setNameError(name && !nameRegex.test(name)
//             ? "Имя должно содержать минимум 2 буквы и только буквы"
//             : null
//         );
//     }, [name]);
//
//     // Валидация телефона
//     useEffect(() => {
//         setPhoneError(
//             phoneNumber && (phoneNumber.length < 9 || phoneNumber.length > 9)
//                 ? "Номер должен содержать ровно 9 цифр"
//                 : null
//         );
//     }, [phoneNumber]);
//
//     async function handleBook() {
//         setError(null);
//         setSuccess(null);
//
//         if (!name || !phoneNumber || !date || !selectedTime) {
//             setError("Пожалуйста, заполните все поля и выберите время");
//             return;
//         }
//
//         if (nameError || phoneError) {
//             setError("Исправьте ошибки в полях");
//             return;
//         }
//
//         const fullPhone = `${countryCode}${phoneNumber}`;
//
//         if (bookedTimes.includes(selectedTime)) {
//             setError("Это время уже занято");
//             return;
//         }
//
//         const { error } = await supabase.from("bookings").insert([
//             { name, phone: fullPhone, date, time: selectedTime }
//         ]);
//
//         if (error) {
//             setError("Ошибка при записи: " + error.message);
//         } else {
//             setSuccess("Запись создана ✅");
//             setBookedTimes([...bookedTimes, selectedTime]);
//             setSelectedTime("");
//             setName("");
//             setPhoneNumber("");
//             setCountryCode("+380");
//         }
//     }
//
//     return (
//         <div className="p-8 max-w-md mx-auto space-y-4">
//             <h1 className="text-2xl font-bold text-center">Запись на тренировку</h1>
//
//             {error && <p className="text-red-600 text-center">{error}</p>}
//             {success && <p className="text-green-600 text-center">{success}</p>}
//
//             <div className="space-y-1">
//                 <Input
//                     placeholder="Имя"
//                     value={name}
//                     onChange={e => setName(e.target.value)}
//                     className={nameError ? "border-red-500" : ""}
//                 />
//                 {nameError && <p className="text-red-500 text-sm">{nameError}</p>}
//             </div>
//
//             <div className="flex space-x-2 items-center">
//                 <select
//                     value={countryCode}
//                     onChange={e => setCountryCode(e.target.value)}
//                     className="border rounded px-2 py-1 bg-gray-50 text-gray-900"
//                 >
//                     {COUNTRIES.map(c => (
//                         <option key={c.code} value={c.code}>
//                             {c.flag} {c.name} ({c.code})
//                         </option>
//                     ))}
//                 </select>
//                 <div className="flex-1">
//                     <Input
//                         placeholder="Номер телефона"
//                         value={phoneNumber}
//                         onChange={e => setPhoneNumber(e.target.value.replace(/\D/g, ""))}
//                         className={phoneError ? "border-red-500" : ""}
//                     />
//                     {phoneError && <p className="text-red-500 text-sm">{phoneError}</p>}
//                 </div>
//             </div>
//
//             <Input
//                 type="date"
//                 value={date}
//                 onChange={e => setDate(e.target.value)}
//             />
//
//             {date && (
//                 <div className="grid grid-cols-5 gap-2 mt-2">
//                     {TIME_SLOTS.map(time => {
//                         const busy = bookedTimes.includes(time);
//                         return (
//                             <Button
//                                 key={time}
//                                 variant={selectedTime === time ? "default" : "outline"}
//                                 disabled={busy}
//                                 onClick={() => setSelectedTime(time)}
//                             >
//                                 {time}
//                             </Button>
//                         );
//                     })}
//                 </div>
//             )}
//
//             <Button
//                 className="w-full mt-4"
//                 onClick={handleBook}
//                 disabled={!!nameError || !!phoneError}
//             >
//                 Записаться
//             </Button>
//         </div>
//     );
// }
//рабочая версия
//
// "use client";
//
// import { useState, useEffect } from "react";
// import { supabase } from "@/lib/supabase";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
//
// const TIME_SLOTS = [
//     "09:00", "10:00", "11:00", "12:00",
//     "13:00", "14:00", "15:00", "16:00",
//     "17:00", "18:00", "19:00", "20:00"
// ];
//
// const COUNTRIES = [
//     { code: "+380", name: "Украина", flag: "🇺🇦" },
//     { code: "+7", name: "Россия", flag: "🇷🇺" },
//     { code: "+33", name: "Франция", flag: "🇫🇷" },
//     { code: "+49", name: "Германия", flag: "🇩🇪" },
//     { code: "+48", name: "Польша", flag: "🇵🇱" },
//     { code: "+34", name: "Испания", flag: "🇪🇸" },
//     { code: "+44", name: "Англия", flag: "🇬🇧" },
// ];
//
// export default function BookingPage() {
//     const [name, setName] = useState("");
//     const [countryCode, setCountryCode] = useState("+380");
//     const [phoneNumber, setPhoneNumber] = useState("");
//     const [date, setDate] = useState("");
//     const [selectedTime, setSelectedTime] = useState("");
//     const [bookedTimes, setBookedTimes] = useState<string[]>([]);
//     const [nameError, setNameError] = useState<string | null>(null);
//     const [phoneError, setPhoneError] = useState<string | null>(null);
//     const [error, setError] = useState<string | null>(null);
//     const [success, setSuccess] = useState<string | null>(null);
//
//     useEffect(() => {
//         if (!date) return;
//         async function fetchBooked() {
//             const { data } = await supabase
//                 .from("bookings")
//                 .select("time")
//                 .eq("date", date);
//             setBookedTimes(data ? data.map(d => d.time) : []);
//             setSelectedTime("");
//         }
//         fetchBooked();
//     }, [date]);
//
//     useEffect(() => {
//         const nameRegex = /^[а-яА-Яa-zA-Z\s]{2,}$/;
//         setNameError(name && !nameRegex.test(name)
//             ? "Имя должно содержать минимум 2 буквы и только буквы"
//             : null
//         );
//     }, [name]);
//
//     useEffect(() => {
//         if (!phoneNumber) {
//             setPhoneError(null);
//             return;
//         }
//
//         if (phoneNumber.length < 8 || phoneNumber.length > 13) {
//             setPhoneError("Номер должен содержать от 8 до 13 цифр");
//         } else {
//             setPhoneError(null);
//         }
//     }, [phoneNumber]);
//
//     async function handleBook() {
//         setError(null);
//         setSuccess(null);
//
//         if (!name || !phoneNumber || !date || !selectedTime) {
//             setError("Пожалуйста, заполните все поля и выберите время");
//             return;
//         }
//
//         if (nameError || phoneError) {
//             setError("Исправьте ошибки в полях");
//             return;
//         }
//
//         const fullPhone = `${countryCode}${phoneNumber}`;
//
//         if (bookedTimes.includes(selectedTime)) {
//             setError("Это время уже занято");
//             return;
//         }
//
//         const { error } = await supabase.from("bookings").insert([
//             { name, phone: fullPhone, date, time: selectedTime }
//         ]);
//
//         if (error) {
//             setError("Ошибка при записи: " + error.message);
//         } else {
//             setSuccess("Запись создана ✅");
//             setBookedTimes([...bookedTimes, selectedTime]);
//             setSelectedTime("");
//             setName("");
//             setPhoneNumber("");
//             setCountryCode("+380");
//         }
//     }
//
//     return (
//         <div className="min-h-screen w-full bg-zinc-950 flex items-center justify-center p-6">
//             <div className="relative z-10 max-w-2xl w-full bg-zinc-900/80 backdrop-blur rounded-2xl border border-zinc-800 p-8 space-y-6">
//
//                 <h1 className="text-3xl font-extrabold text-center text-red-500">
//                     Запись на тренировку
//                 </h1>
//
//                 {error && <p className="text-red-500 text-center">{error}</p>}
//                 {success && <p className="text-green-500 text-center">{success}</p>}
//
//                 <div className="space-y-4">
//
//                     {/* Имя */}
//                     <div className="space-y-1">
//                         <Input
//                             placeholder="Имя"
//                             value={name}
//                             onChange={e => setName(e.target.value)}
//                             className={`bg-zinc-800 text-white border ${nameError ? " border-red-500" : "border-zinc-700"}`}
//                         />
//                         {nameError && <p className="text-white text-sm">{nameError}</p>}
//                     </div>
//                     {/* Телефон */}
//                     <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2 items-center w-full">
//                         <select
//                             value={countryCode}
//                             onChange={e => setCountryCode(e.target.value)}
//                             className="border rounded px-2 py-2 bg-zinc-800 text-white cursor-pointer w-full sm:w-32"
//                         >
//                             {COUNTRIES.map(c => (
//                                 <option key={c.code} value={c.code}>
//                                     {c.flag} {c.name} ({c.code})
//                                 </option>
//                             ))}
//                         </select>
//                         <div className="flex-1 w-full">
//                             <Input
//                                 placeholder="Номер телефона"
//                                 value={phoneNumber}
//                                 onChange={e => setPhoneNumber(e.target.value.replace(/\D/g, ""))}
//                                 className={`
//         bg-zinc-800 text-white border ${phoneError ? "border-red-500" : "border-zinc-700"}
//         text-sm sm:text-base
//       `}
//                             />
//                             {phoneError && <p className="text-white text-sm">{phoneError}</p>}
//                         </div>
//                     </div>
//
//
//                     {/* Дата */}
//
//                     <Input
//                         type="date"
//                         value={date}
//                         onChange={e => {
//                             const selected = e.target.value;
//                             const today = new Date();
//                             const selectedDate = new Date(selected + "T00:00:00");
//
//                             if (selectedDate < new Date(today.getFullYear(), today.getMonth(), today.getDate())) {
//                                 setError("Нельзя выбрать прошедшую дату");
//                                 setDate("");
//                                 return;
//                             }
//
//                             setError(null);
//                             setDate(selected);
//                         }}
//                         className="bg-zinc-800 text-white border border-zinc-700 w-full h-12 px-3 text-base appearance-none"
//                     />
//
//                     {/* Время */}
//                     {/* Время */}
//                     {date && (
//                         <div className="grid grid-cols-5 gap-2 mt-2">
//                             {TIME_SLOTS.map(time => {
//                                 const busy = bookedTimes.includes(time);
//                                 const isSelected = selectedTime === time;
//                                 return (
//                                     <Button
//                                         key={time}
//                                         variant={isSelected ? "default" : "outline"}
//                                         disabled={busy}
//                                         className={`
//             ${isSelected ? "bg-red-600 text-black" : "text-black border-white/30"}
//             ${busy ? "opacity-40 cursor-not-allowed" : "hover:bg-red-700 cursor-pointer"}
//             transition
//           `}
//                                         onClick={() => setSelectedTime(time)}
//                                     >
//                                         {time}
//                                     </Button>
//                                 );
//                             })}
//                         </div>
//                     )}
//
//                     {/* Кнопка записи */}
//                     <Button
//                         className="w-full bg-red-600 hover:bg-red-700 hover:text-white cursor-pointer mt-4"
//                         onClick={handleBook}
//                         disabled={!!nameError || !!phoneError}
//                     >
//                         Записаться
//                     </Button>
//                 </div>
//
//             </div>
//         </div>
//     );
// }


"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogDescription,
} from "@/components/ui/dialog";

const TIME_SLOTS = [
    "09:00", "10:00", "11:00", "12:00",
    "13:00", "14:00", "15:00", "16:00",
    "17:00", "18:00", "19:00", "20:00"
];

const COUNTRIES = [
    { code: "+380", name: "Украина", flag: "🇺🇦" },
    { code: "+7", name: "Россия", flag: "🇷🇺" },
    { code: "+33", name: "Франция", flag: "🇫🇷" },
    { code: "+49", name: "Германия", flag: "🇩🇪" },
    { code: "+48", name: "Польша", flag: "🇵🇱" },
    { code: "+34", name: "Испания", flag: "🇪🇸" },
    { code: "+44", name: "Англия", flag: "🇬🇧" },
];

export default function BookingPage() {
    const router = useRouter();

    const [name, setName] = useState("");
    const [countryCode, setCountryCode] = useState("+380");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [date, setDate] = useState("");
    const [selectedTime, setSelectedTime] = useState("");
    const [bookedTimes, setBookedTimes] = useState<string[]>([]);

    const [nameError, setNameError] = useState<string | null>(null);
    const [phoneError, setPhoneError] = useState<string | null>(null);
    const [error, setError] = useState<string | null>(null);

    const [dialogOpen, setDialogOpen] = useState(false);

    // Загруженные слоты
    useEffect(() => {
        if (!date) return;

        async function fetchBooked() {
            const { data } = await supabase
                .from("bookings")
                .select("time")
                .eq("date", date);

            setBookedTimes(data ? data.map(d => d.time) : []);
            setSelectedTime("");
        }

        fetchBooked();
    }, [date]);

    // Проверка имени
    useEffect(() => {
        const nameRegex = /^[а-яА-Яa-zA-Z\s]{2,}$/;
        if (!name) return setNameError(null);

        setNameError(
            !nameRegex.test(name)
                ? "Имя должно содержать минимум 2 буквы и только буквы"
                : null
        );
    }, [name]);

    // Проверка телефона
    useEffect(() => {
        if (!phoneNumber) return setPhoneError(null);

        if (phoneNumber.length < 8 || phoneNumber.length > 13) {
            setPhoneError("Номер должен содержать от 8 до 13 цифр");
        } else {
            setPhoneError(null);
        }
    }, [phoneNumber]);

    async function handleBook() {
        setError(null);

        if (!name || !phoneNumber || !date || !selectedTime) {
            setError("Пожалуйста, заполните все поля и выберите время");
            return;
        }

        if (nameError || phoneError) {
            setError("Исправьте ошибки в полях");
            return;
        }

        const fullPhone = `${countryCode}${phoneNumber}`;

        if (bookedTimes.includes(selectedTime)) {
            setError("Это время уже занято");
            return;
        }

        const { error } = await supabase.from("bookings").insert([
            { name, phone: fullPhone, date, time: selectedTime }
        ]);

        if (error) {
            setError("Ошибка при записи: " + error.message);
        } else {
            setDialogOpen(true); // открываем модалку

            // чистим форму
            setBookedTimes([...bookedTimes, selectedTime]);
            setSelectedTime("");
            setName("");
            setPhoneNumber("");
            setCountryCode("+380");

            // редирект через 2.5 секунды
            setTimeout(() => {
                router.push("/");
            }, 2500);
        }
    }

    return (
        <div className="min-h-screen w-full bg-zinc-950 flex items-center justify-center p-6">
            <div className="relative z-10 max-w-2xl w-full bg-zinc-900/80 backdrop-blur rounded-2xl border border-zinc-800 p-8 space-y-6">

                <h1 className="text-3xl font-extrabold text-center text-red-500">
                    Запись на тренировку
                </h1>

                {error && <p className="text-red-500 text-center">{error}</p>}

                <div className="space-y-4">

                    {/* Имя */}
                    <div className="space-y-1">
                        <Input
                            placeholder="Имя"
                            value={name}
                            onChange={e => setName(e.target.value)}
                            className={`bg-zinc-800 text-white border ${
                                nameError ? "border-red-500" : "border-zinc-700"
                            }`}
                        />
                        {nameError && <p className="text-white text-sm">{nameError}</p>}
                    </div>

                    {/* Телефон */}
                    <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2 items-center w-full">
                        <select
                            value={countryCode}
                            onChange={e => setCountryCode(e.target.value)}
                            className="border rounded px-2 py-2 bg-zinc-800 text-white cursor-pointer w-full sm:w-32"
                        >
                            {COUNTRIES.map(c => (
                                <option key={c.code} value={c.code}>
                                    {c.flag} {c.name} ({c.code})
                                </option>
                            ))}
                        </select>

                        <div className="flex-1 w-full">
                            <Input
                                placeholder="Номер телефона"
                                value={phoneNumber}
                                onChange={e => setPhoneNumber(e.target.value.replace(/\D/g, ""))}
                                className={`bg-zinc-800 text-white border ${
                                    phoneError ? "border-red-500" : "border-zinc-700"
                                } text-sm sm:text-base`}
                            />
                            {phoneError && <p className="text-white text-sm">{phoneError}</p>}
                        </div>
                    </div>

                    {/* Дата */}
                    <Input
                        type="date"
                        value={date}
                        onChange={e => {
                            const selected = e.target.value;
                            const today = new Date();
                            const selectedDate = new Date(selected + "T00:00:00");

                            if (selectedDate < new Date(today.getFullYear(), today.getMonth(), today.getDate())) {
                                setError("Нельзя выбрать прошедшую дату");
                                setDate("");
                                return;
                            }

                            setError(null);
                            setDate(selected);
                        }}
                        className="bg-zinc-800 text-white border border-zinc-700 w-full h-12 px-3 text-base appearance-none"
                    />

                    {/* Время */}
                    {date && (
                        <div className="grid grid-cols-5 gap-2 mt-2">
                            {TIME_SLOTS.map(time => {
                                const busy = bookedTimes.includes(time);
                                const isSelected = selectedTime === time;

                                return (
                                    <Button
                                        key={time}
                                        variant={isSelected ? "default" : "outline"}
                                        disabled={busy}
                                        className={`
                      ${isSelected ? "bg-red-600 text-black" : "text-black border-white/30"}
                      ${busy ? "opacity-40 cursor-not-allowed" : "hover:bg-red-700 cursor-pointer"}
                      transition
                    `}
                                        onClick={() => setSelectedTime(time)}
                                    >
                                        {time}
                                    </Button>
                                );
                            })}
                        </div>
                    )}

                    {/* Кнопка */}
                    <Button
                        className="w-full bg-red-600 hover:bg-red-700 hover:text-white cursor-pointer mt-4"
                        onClick={handleBook}
                        disabled={!!nameError || !!phoneError}
                    >
                        Записаться
                    </Button>
                </div>
            </div>

            {/* Dialog после записи */}
            <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
                <DialogContent className="bg-zinc-900 border border-red-600 text-white">
                    <DialogHeader>
                        <DialogTitle className="text-red-500 text-xl text-center">
                            Запись оформлена 🥊
                        </DialogTitle>
                        <DialogDescription className="text-center text-zinc-300 mt-2">
                            Ожидайте, с вами свяжутся в ближайшее время.
                        </DialogDescription>
                    </DialogHeader>
                </DialogContent>
            </Dialog>
        </div>
    );
}