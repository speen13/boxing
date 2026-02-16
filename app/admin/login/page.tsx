// "use client";
//
// import { useState } from "react";
// import { supabase } from "@/lib/supabase";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
//
// export default function AdminLogin() {
//     const [email, setEmail] = useState("");
//     const [password, setPassword] = useState("");
//     const [loading, setLoading] = useState(false);
//     const [error, setError] = useState<string | null>(null);
//     const [showPassword, setShowPassword] = useState(false);
//
//     async function login() {
//         setLoading(true);
//         setError(null);
//
//         const { error } = await supabase.auth.signInWithPassword({ email, password });
//
//         setLoading(false);
//
//         if (error) {
//             setError("Неверная почта или пароль");
//         } else {
//             window.location.href = "/admin/bookings";
//         }
//     }
//
//     return (
//         <div className="min-h-screen flex items-center justify-center bg-gray-50">
//             <div className="w-full max-w-sm space-y-4 p-6 border rounded-xl shadow bg-white">
//
//                 <h1 className="text-2xl font-bold text-center">Вход для тренера</h1>
//
//                 {error && <p className="text-red-600 text-center">{error}</p>}
//
//                 <Input
//                     placeholder="Email"
//                     value={email}
//                     onChange={e => setEmail(e.target.value)}
//                 />
//
//                 <div className="relative">
//                     <Input
//                         type={showPassword ? "text" : "password"}
//                         placeholder="Пароль"
//                         value={password}
//                         onChange={e => setPassword(e.target.value)}
//                     />
//                     <button
//                         type="button"
//                         className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-500"
//                         onClick={() => setShowPassword(!showPassword)}
//                     >
//                         {showPassword ? "🙈" : "👁️"}
//                     </button>
//                 </div>
//
//                 <Button className="w-full" onClick={login} disabled={loading}>
//                     {loading ? "Загрузка..." : "Войти"}
//                 </Button>
//
//             </div>
//         </div>
//     );
// }

"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabase";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function AdminLogin() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [showPassword, setShowPassword] = useState(false);

    async function login() {
        setLoading(true);
        setError(null);

        const { error } = await supabase.auth.signInWithPassword({ email, password });

        setLoading(false);

        if (error) {
            setError("Неверная почта или пароль");
        } else {
            window.location.href = "/admin/bookings";
        }
    }

    return (
        <div className="min-h-screen w-full bg-zinc-950 flex items-center justify-center p-6">
            <div className="relative z-10 w-full max-w-sm bg-zinc-900/80 backdrop-blur rounded-2xl border border-zinc-800 p-8 space-y-6">

                <h1 className="text-3xl font-extrabold text-center text-red-500">
                    Вход для тренера
                </h1>

                {error && <p className="text-red-500 text-center">{error}</p>}

                {/* Email */}
                <Input
                    placeholder="Email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    className="bg-zinc-800 text-white border border-zinc-700 placeholder:text-gray-400"
                />

                {/* Пароль */}
                <div className="relative">
                    <Input
                        type={showPassword ? "text" : "password"}
                        placeholder="Пароль"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        className="bg-zinc-800 text-white border border-zinc-700 placeholder:text-gray-400"
                    />
                    <button
                        type="button"
                        className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white cursor-pointer"
                        onClick={() => setShowPassword(!showPassword)}
                    >
                        {showPassword ? "🙈" : "👁️"}
                    </button>
                </div>

                {/* Кнопка входа */}
                <Button
                    className="w-full bg-red-600 hover:bg-red-700 hover:text-white cursor-pointer"
                    onClick={login}
                    disabled={loading}
                >
                    {loading ? "Загрузка..." : "Войти"}
                </Button>

            </div>
        </div>
    );
}