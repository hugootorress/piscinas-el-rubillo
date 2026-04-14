"use server" 

import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendContactEmail(formData: FormData) {
  const name = formData.get("name") as string;
  const phone = formData.get("phone") as string;
  const message = formData.get("message") as string;

  try {
    const { data, error } = await resend.emails.send({
      from: 'Web Contacto <onboarding@resend.dev>',
      to: 'piscis.elrubillo@gmail.com', 
      subject: `Nuevo mensaje de ${name}`,
      text: `Has recibido un nuevo mensaje:\n\nNombre: ${name}\nTeléfono: ${phone}\nMensaje: ${message}`,
    });

    if (error) {
      console.error("Error de Resend:", error);
      return { success: false };
    }

    return { success: true, id: data?.id };
    
  } catch (error) {
    console.error("Error inesperado:", error);
    return { success: false };
  }
}