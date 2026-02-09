import React, { useContext, useEffect, useState } from 'react'
import { Button, Card, Checkbox, Label, Spinner, TextInput } from "flowbite-react";
import ToastFailed from '../components/ToastFailed';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthContext';

const Login = () => {
    const [form, setForm] = useState({
        email: "",
        password: ""
    });

    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate();

    const submitForm = () => {
        if (form.email == "" || form.password == "") {
            setError("Gagal! pastikan email dan password terisi")
        } else {
            setLoading(true)
            processLogin();
        }
    }
    const { login } = useContext(AuthContext);

    async function processLogin() {
        const url = "https://api.escuelajs.co/api/v1/auth/login"
        try {
            const response = await fetch(url, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(form),
            });

            const result = await response.json();
            // kalau response nya ga ada access_token, berarti gagal login 
            if (!result.access_token) {
                throw new Error(`Email dan password tidak sesuai`);
            }

            // simpan token dari BE di storage 
            localStorage.setItem("access_token",  result.access_token);
            localStorage.setItem("refresh_token",  result.refresh_token);

            setError("");
            // fn context untuk update isLogin 
            login();
            // pindahkan ke halaman keranjang
            // <Link> pindah melalui HTML, useNavigate pindah melalui js
            navigate("/cart");
        } catch (error) {
            setError("Gagal login! Pastikan email dan password anda sesuai")
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        if (localStorage.getItem("access_token")) {
            navigate('/cart')
        }
    }, [])

    return (
        <div>
            {
                error != "" && (<ToastFailed error={error} />)
            }
            <div>
                <Card className="max-w-sm mx-auto w-100 block mt-25">
                    <h1 className="text-2xl mb-5 text-center text-white">Login</h1>
                    <form className="flex max-w-md flex-col gap-4">
                        <div>
                            <div className="mb-2 block">
                                <Label htmlFor="email1">Your email</Label>
                            </div>
                            {/* mengubah nilai dari state form bagian email sesuai value input ketika megetikan data  */}
                            <TextInput id="email1" type="email" placeholder="name@email.com" onKeyUp={(e) => setForm({ ...form, email: e.target.value })} required />
                        </div>
                        <div>
                            <div className="mb-2 block">
                                <Label htmlFor="password1">Your password</Label>
                            </div>
                            <TextInput id="password1" type="password" onKeyUp={(e) => setForm({ ...form, password: e.target.value })} required />
                        </div>
                        <div className="flex items-center gap-2">
                            <Checkbox id="remember" />
                            <Label htmlFor="remember">Remember me</Label>
                        </div>
                        {
                            loading ? (<Button disabled color="alternative"><Spinner aria-label="Default status example" /></Button>) : (<Button type="button" onClick={submitForm}>Login</Button>)
                        }
                    </form>
                </Card>
            </div>
        </div>
    )
}

export default Login
