const RefundPolicy = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-lg mt-8">
      <h1 className="text-3xl font-bold mb-6">Refund Policy</h1>

      <section>
        <h2 className="text-2xl font-semibold mb-4">1. No Refunds</h2>
        <p>
          All purchases are final. We do not offer refunds for any services or
          products provided. By making a purchase, you acknowledge and agree
          that no refunds will be granted, regardless of any circumstances or
          conditions. Please review our offerings and policies carefully before
          making a purchase to ensure that they meet your expectations.
        </p>
      </section>

      <section className="mt-6">
        <h2 className="text-2xl font-semibold mb-4">2. Contact Us</h2>
        <p>
          If you have any questions or concerns regarding our Refund Policy,
          please contact us at{" "}
          <a
            href="mailto:info@shivshaktiinstitute.com"
            className="text-blue-600 hover:underline"
          >
            info@shivshaktiinstitute.com
          </a>
          . We are here to help with any inquiries you may have, but please note
          that we cannot process refunds.
        </p>
      </section>
    </div>
  );
};
export default RefundPolicy;
