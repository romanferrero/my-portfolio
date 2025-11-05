import React from "react";
import NavBar from "../components/Navbar";
import Section from "../components/Section";
import { useState, useEffect } from "react";


const Home = () => {

    useEffect(() => {
        const hash = window.location.hash.substring(1);
        if (hash) {
            const element = document.getElementById(hash);
            if (element) {
                element.scrollIntoView({ behavior: "smooth" });
            }
        } else {
            window.scrollTo({ top: 0, behavior: "smooth" });
        }
    }, []);

    const sections = [
        {
            id: "home",
            title: null,
            className: "bg-brand",
            content: (
                <div className="text-center">
                    <h1 className="text-4xl md:text-6xl font-bold text-surface-lighter mb-4">
                        Bienvenido a Mi Portfolio
                    </h1>
                    <h2 className="text-xl md:text-2xl text-surface-light">
                        Desarrollador Web | Diseñador UI/UX | Creativo
                    </h2>
                </div>
            ),
        },
        {
            id: "about",
            title: "Sobre mí",
            className: "bg-brand-light",
            content: (
                <p className="text-lg md:text-xl text-surface-lighter max-w-2xl mx-auto">
                    Soy un desarrollador web apasionado por crear experiencias digitales
                    únicas y funcionales. Con experiencia en React y Tailwind CSS, me
                    enfoco en construir aplicaciones web modernas y eficientes.
                </p>
            ),
        },
        {
            id: "projects",
            title: "Mis Proyectos",
            className: "bg-surface",
            content: (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <div className="bg-surface-lighter rounded-lg shadow-md p-6 transition-transform duration-300 hover:scale-105">
                        <h3 className="text-xl text-brand font-semibold mb-4">Proyecto 1</h3>
                        <p className="text-brand-light mb-4">Descripción breve del proyecto 1.</p>
                        <a href="#" className="text-blue-500 hover:underline">
                            Ver más
                        </a>
                    </div>
                </div>
            ),
        },
        {
            id: "skills",
            title: "Mis Habilidades",
            className: "bg-brand-light",
            content: (
                <div className="flex flex-wrap justify-center gap-4">
                    {[
                        "React",
                        "JavaScript",
                        "Tailwind CSS",
                        "HTML5",
                        "CSS3",
                        "Node.js",
                    ].map((skill) => (
                        <span
                            key={skill}
                            className="bg-brand text-surface-lighter px-4 py-2 rounded-full text-sm md:text-base font-medium hover:scale-95"
                        >
                            {skill}
                        </span>
                    ))}
                </div>
            ),
        },
        {
            id: "contact",
            title: "Contacto",
            className: "bg-surface",
            content: (
                <form className="max-w-md mx-auto">
                    <div className="mb-4">
                        <label htmlFor="name" className="block text-brand text-sm font-bold mb-2">
                            Nombre
                        </label>
                        <input
                            type="text"
                            id="name"
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-brand leading-tight focus:outline-none focus:shadow-outline"
                            placeholder="Tu nombre"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-brand text-sm font-bold mb-2">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-brand leading-tight focus:outline-none focus:shadow-outline"
                            placeholder="tu@email.com"
                        />
                    </div>
                    <div className="mb-6">
                        <label htmlFor="message" className="block text-brand text-sm font-bold mb-2">
                            Mensaje
                        </label>
                        <textarea
                            id="message"
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-brand leading-tight focus:outline-none focus:shadow-outline"
                            rows="4"
                            placeholder="Tu mensaje"
                        ></textarea>
                    </div>
                    <div className="flex items-center justify-between">
                        <button
                            className={`bg-brand-light hover:bg-brand text-surface-lighter font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition-colors duration-300`}
                            type="submit"
                        >
                            Enviar
                        </button>
                    </div>
                </form>
            ),
        },
    ];

    return (
        <div className="min-h-screen bg-gray-100">
            <NavBar sections={sections.map((section) => section.id)} />
            <main className="pt-16">
                {sections.map(({ id, title, className, content }) => (
                    <Section key={id} id={id} title={title} className={className}>
                        {content}
                    </Section>
                ))}
            </main>
        </div>
    );
};

export default Home;

