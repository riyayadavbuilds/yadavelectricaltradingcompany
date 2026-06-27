export const WHATSAPP_NUMBER = "919873490167";
export const PHONE_DISPLAY = "+91 98734 90167";
export const PHONE_TEL = "tel:+919873490167";

const BRAND = "Yadav Electrical Trading Company";

export function waLink(message: string): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export const waMessages = {
  hero: `Hello ${BRAND},

I visited your website and would like to know more about your products, pricing, and available offers.

Please assist me.`,

  floating: `Hello ${BRAND},

I would like to enquire about your products and services.`,

  generic: `Hello ${BRAND},

I would like to enquire about your products and services.

Please contact me.`,

  product: (name: string) => `Hello ${BRAND},

I am interested in ${name}.

Please share:
• Latest Price
• Availability
• Warranty Details
• Installation Information

Thank you.`,

  contactForm: (data: { name: string; phone: string; product: string; message: string }) =>
    `Hello ${BRAND},

Name: ${data.name || "-"}
Phone: ${data.phone || "-"}
Interested In: ${data.product || "-"}

Message:
${data.message || "-"}

Please contact me regarding this enquiry.`,
};

export const waHero = waLink(waMessages.hero);
export const waFloating = waLink(waMessages.floating);
export const waGeneric = waLink(waMessages.generic);
export const waProduct = (name: string) => waLink(waMessages.product(name));