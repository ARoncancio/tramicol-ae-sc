
// Tienda en línea de servicios para vehículos - Tramicol A&E SC
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import Image from "next/image";

const services = [
  { name: "Matrículas", price: "$40", description: "Trámite completo y legalización." },
  { name: "Traspasos", price: "$50", description: "Gestión de traspasos de vehículos de forma segura." },
  { name: "Asesoría jurídica", price: "$70", description: "Consultoría especializada en trámites vehiculares." },
  { name: "Desintegración de vehículos", price: "$80", description: "Gestión de desintegración para carga y pasajeros." },
];

const faqs = [
  {
    question: "¿Cuánto dura un trámite típico?",
    answer: "La mayoría de los trámites se completan entre 24 y 48 horas."
  },
  {
    question: "¿Qué documentos necesito para un traspaso?",
    answer: "Requiere cédula, tarjeta de propiedad y paz y salvo."
  },
  {
    question: "¿Puedo solicitar los servicios en línea?",
    answer: "Sí, puedes iniciar el trámite en línea y te guiaremos en cada etapa."
  }
];

const reviews = [
  {
    name: "Carlos M.",
    comment: "Excelente servicio, muy rápido y profesional. ¡Volveré sin duda!",
    rating: 5
  },
  {
    name: "Luisa F.",
    comment: "Me ayudaron con toda la documentación de forma sencilla.",
    rating: 4
  },
  {
    name: "Andrés G.",
    comment: "Muy atentos y conocedores del proceso legal. Recomendados.",
    rating: 5
  }
];

export default function VehicleServicesShop() {
  return (
    <div className="min-h-screen bg-black text-white">
      <header className="bg-black p-6 text-center">
        <Image
          src="/tramicol-logo.png"
          alt="Tramicol A&E SC"
          width={250}
          height={100}
          className="mx-auto"
        />
        <h1 className="text-3xl font-bold text-white mt-4">Tramicol A&E SC</h1>
      </header>

      <section className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6">
        {services.map((service, index) => (
          <Card key={index} className="bg-gray-900 border-red-700 border-2">
            <CardContent className="p-4">
              <h2 className="text-xl font-semibold text-red-500">{service.name}</h2>
              <p className="my-2 text-white">{service.description}</p>
              <p className="text-white font-bold">{service.price}</p>
              <Button className="mt-4 bg-red-700 hover:bg-red-600">Solicitar</Button>
            </CardContent>
          </Card>
        ))}
      </section>

      <section className="bg-white text-black p-6">
        <h2 className="text-2xl font-bold text-center text-red-700 mb-4">Formulario de Contacto</h2>
        <form className="max-w-xl mx-auto grid gap-4">
          <Input placeholder="Nombre completo" className="border-gray-300" />
          <Input type="email" placeholder="Correo electrónico" className="border-gray-300" />
          <Textarea placeholder="Mensaje o consulta" className="border-gray-300" />
          <Button className="bg-red-700 hover:bg-red-600 text-white">Enviar mensaje</Button>
        </form>
      </section>

      <section className="bg-gray-900 text-white p-6">
        <h2 className="text-2xl font-bold text-center text-red-500 mb-4">Preguntas Frecuentes</h2>
        <div className="max-w-2xl mx-auto">
          <Accordion type="single" collapsible>
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`faq-${index}`}>
                <AccordionTrigger className="text-left text-white hover:text-red-500">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-300">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <section className="bg-white text-black p-6">
        <h2 className="text-2xl font-bold text-center text-red-700 mb-4">Reseñas de Clientes</h2>
        <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-6">
          {reviews.map((review, index) => (
            <Card key={index} className="border-gray-300">
              <CardContent className="p-4">
                <h3 className="text-lg font-semibold text-red-700">{review.name}</h3>
                <p className="my-2">{review.comment}</p>
                <p className="text-yellow-500">{"★".repeat(review.rating)}{"☆".repeat(5 - review.rating)}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <footer className="bg-gray-900 text-center text-sm p-4 text-white">
        © 2025 Tramicol A&E SC. Todos los derechos reservados.
      </footer>
    </div>
  );
}
