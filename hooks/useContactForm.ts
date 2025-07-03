// lib/hooks/useContactForm.ts
import { useState } from "react";


export const useContactForm = () => {
    const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
    const [status, setStatus] = useState({ text: "", isError: false, loading: false });


    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
            
        const { name, value } = e.target;
        setForm((prev) => ({ ...prev, [name]: value }));
        setStatus({ text: "", isError: false, loading: false });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus({ text: "Sending...", isError: false, loading: true });

        try {
        const res = await fetch("/api/contactForm", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(form),
        });

        const data = await res.json();
        if (!res.ok) {
            throw new Error(data.error || "Failed to send");
        }

        setStatus({ text: "Message sent successfully!", isError: false, loading: false });
        setForm({ name: "", email: "", subject: "", message: "" });
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        } catch (err:any) {
        setStatus({ text: err.message || "Something went wrong!", isError: true, loading: false });
        }
    };

    return { form, status, handleChange, handleSubmit };
    };
