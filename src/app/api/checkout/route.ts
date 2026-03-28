import Stripe from "stripe";

export const dynamic = "force-dynamic";

const PLANS: Record<
  string,
  { nom: string; montant: number; mode: "payment" | "subscription" }
> = {
  decouverte: { nom: "S\u00e9ance D\u00e9couverte", montant: 1500, mode: "payment" },
  mensuel: { nom: "Abonnement Mensuel", montant: 6500, mode: "subscription" },
  annuel: { nom: "Abonnement Annuel", montant: 39900, mode: "payment" },
};

export async function POST(req: Request) {
  try {
    const { plan, membre } = await req.json();
    const config = PLANS[plan] ?? PLANS.mensuel;

    if (
      !process.env.STRIPE_SECRET_KEY ||
      process.env.STRIPE_SECRET_KEY === "sk_test_a_remplir"
    ) {
      console.warn("Stripe non configure - redirect /merci");
      return Response.json({ redirect: `/merci?plan=${plan}` });
    }

    const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
      apiVersion: "2024-06-20" as Stripe.LatestApiVersion,
    });

    const priceData: Stripe.Checkout.SessionCreateParams.LineItem.PriceData = {
      currency: "eur",
      product_data: {
        name: `Gard Combat Club \u2014 ${config.nom}`,
        description: "MMA \u00b7 Boxe \u00b7 Grappling \u00b7 Muay Tha\u00ef \u00b7 Uz\u00e8s, Gard",
      },
      unit_amount: config.montant,
    };

    if (config.mode === "subscription") {
      priceData.recurring = { interval: "month" };
    }

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      mode: config.mode,
      line_items: [{ price_data: priceData, quantity: 1 }],
      customer_email: membre?.email,
      success_url: `${process.env.NEXT_PUBLIC_URL}/merci?plan=${plan}`,
      cancel_url: `${process.env.NEXT_PUBLIC_URL}/inscription`,
      metadata: {
        nom: membre?.nom ?? "",
        prenom: membre?.prenom ?? "",
        tel: membre?.tel ?? "",
        plan,
      },
      billing_address_collection: "auto",
    });

    return Response.json({ url: session.url });
  } catch (err) {
    console.error("Stripe error:", err);
    return Response.json({ error: "Erreur paiement" }, { status: 500 });
  }
}
