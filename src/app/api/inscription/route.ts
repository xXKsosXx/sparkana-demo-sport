import { Resend } from "resend";

export const dynamic = "force-dynamic";

export async function POST(req: Request) {
  const { prenom, nom, email, tel, plan } = await req.json();

  if (!prenom || !nom || !email) {
    return Response.json({ error: "Champs requis" }, { status: 400 });
  }

  if (!process.env.RESEND_API_KEY || process.env.RESEND_API_KEY === "a_remplir") {
    console.warn("Resend non configure - skip emails");
    return Response.json({ success: true });
  }

  const resend = new Resend(process.env.RESEND_API_KEY);

  try {
    await Promise.all([
      resend.emails.send({
        from: "bonjour@sparkana.fr",
        to: process.env.EMAIL_TO ?? "kamal@sparkana.fr",
        subject: `[GCC] Nouvelle inscription \u2014 ${prenom} ${nom} \u2014 ${plan}`,
        html: `<h2 style="color:#dc2626">GARD COMBAT CLUB</h2>
          <p>Nouveau membre :</p>
          <ul>
            <li><strong>Nom :</strong> ${prenom} ${nom}</li>
            <li><strong>Email :</strong> ${email}</li>
            <li><strong>T\u00e9l\u00e9phone :</strong> ${tel}</li>
            <li><strong>Formule :</strong> ${plan}</li>
          </ul>`,
      }),
      resend.emails.send({
        from: "bonjour@sparkana.fr",
        to: email,
        subject: `BIENVENUE AU GARD COMBAT CLUB, ${prenom.toUpperCase()} !`,
        html: `
          <div style="font-family:sans-serif;background:#0a0a0a;color:#f5f5f5;padding:40px;max-width:600px;margin:0 auto">
            <div style="border-top:4px solid #dc2626;padding-top:24px;margin-bottom:32px">
              <h1 style="color:#dc2626;font-size:2.5rem;text-transform:uppercase;letter-spacing:0.1em;margin:0">
                BIENVENUE,<br>${prenom.toUpperCase()} !
              </h1>
            </div>
            <p style="color:#e6bdb8">Tu fais maintenant partie du Gard Combat Club.</p>
            <div style="background:#141414;padding:20px;margin:24px 0;border-left:4px solid #dc2626">
              <p style="margin:4px 0;color:#f5f5f5"><strong>Formule :</strong> ${plan.toUpperCase()}</p>
              <p style="margin:4px 0;color:#f5f5f5"><strong>Adresse :</strong> Route de N\u00eemes, 30700 Uz\u00e8s</p>
              <p style="margin:4px 0;color:#f5f5f5"><strong>Contact :</strong> contact@gardcombatclub.fr</p>
            </div>
            <p style="color:#737373;font-size:11px;text-transform:uppercase;letter-spacing:0.2em;margin-top:40px;border-top:1px solid #2a2a2a;padding-top:20px">
              GARD COMBAT CLUB \u00b7 MMA \u00b7 BOXE \u00b7 GRAPPLING \u00b7 MUAY THA\u00cf
            </p>
          </div>`,
      }),
    ]);
    return Response.json({ success: true });
  } catch (err) {
    console.error(err);
    return Response.json({ error: "Erreur email" }, { status: 500 });
  }
}
