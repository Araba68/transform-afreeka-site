'use client';

export default function DonateSection() {
  return (
    <section
      id="donate"
      className="py-20 bg-brandBlack text-white"
      aria-labelledby="donate-heading"
    >
      <div className="max-w-3xl mx-auto px-6 text-center">
        <h2
          id="donate-heading"
          className="text-3xl font-bold text-brandYellow mb-4"
        >
          Support Our Work
        </h2>
        <p className="text-lg text-white mb-8">
          Your donation helps us reach more adolescents and teen mothers in
          need of mentorship, health education, and emotional support.
        </p>

        <div
          className="bg-white text-brandBlack rounded-xl p-6 shadow-md text-left"
          aria-label="Donate via Bank Transfer"
        >
          <h3 className="text-xl font-semibold mb-4">Bank Transfer Details</h3>
          <p className="mb-2 text-sm">
            You can support Transform Afreeka Foundation through a direct bank deposit using the account below:
          </p>
          <ul className="text-sm leading-relaxed space-y-2">
            <li>
              <strong>Bank:</strong> Absa Bank
            </li>
            <li>
              <strong>Account Number:</strong> 2044028339
            </li>
            <li>
              <strong>Account Name:</strong> Transform Afreeka Foundation
            </li>
            <li>
              <strong>Donation Type:</strong> Cash or In-Kind (shared with children’s homes)
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
