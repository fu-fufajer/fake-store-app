import { useState, createContext } from 'react'

export const AuthContext = createContext();

// membuat proses data yg akan dibuat global (bisa diakses di file mana aja) 
export default function AuthProvider({ children }) {
    const [isLogin, setIsLogin] = useState(localStorage.getItem("access_token"));

    function logout() {
        localStorage.removeItem("access_token");
        localStorage.removeItem("refresh_token");
        setIsLogin(false);
    }

    function login() {
        // ubah state isLogin jadi data localStorage, untuk trigger munculnya button logout di navbar
        setIsLogin(localStorage.getItem("access_token"));
    }

    // mendefinisikan context akan digunakan di pages apa saja
    return (
        // value: data/function yg diperbolehkan diakses global
        <AuthContext.Provider value={{ isLogin, logout, login }}>
            {/* jika tdk pakai children, perlu panggil satu2 file pages, klo mau berlaku disemuanya gunakan props chldren */}
            {children}
        </AuthContext.Provider>
    )
}

