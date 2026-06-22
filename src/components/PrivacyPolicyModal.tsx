"use client";

interface PrivacyPolicyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function PrivacyPolicyModal({
  isOpen,
  onClose,
}: PrivacyPolicyModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center p-4">
      <div className="bg-white text-black w-full max-w-5xl max-h-[90vh] overflow-y-auto rounded-xl shadow-xl">
        <div className="sticky top-0 bg-white border-b p-4 flex justify-between items-center">
          <h2 className="text-2xl font-bold">Privacy Policy</h2>

          <button
            onClick={onClose}
            className="text-xl font-bold hover:text-red-500"
          >
            ✕
          </button>
        </div>

        <div className="p-6 space-y-6">
          <p>
            <strong>Last Updated:</strong> [LAST_UPDATED_DATE]
          </p>

          <p>
            Welcome to [BRAND_NAME] ("Company", "we", "our", or "us"). This
            Privacy Policy explains how we collect, use, process, store, share,
            and protect information when you access or use our website, mobile
            application, products, or services available through [WEBSITE_URL].
          </p>

          <section>
            <h3 className="text-xl font-semibold mb-2">
              1. Company Information
            </h3>
            <p>
              The Platform is owned and operated by [BUSINESS_NAME], legally
              registered as [LEGAL_NAME], having its registered office at
              [REGISTERED_ADDRESS].
            </p>
          </section>

          <section>
            <h3 className="text-xl font-semibold mb-2">
              2. Information We Collect
            </h3>
            <p>
              We may collect personal, transactional, technical, and operational
              information including name, email address, mobile number,
              addresses, account credentials, order history, payment status,
              invoices, support interactions, analytics data, and related
              information required to provide our services.
            </p>
          </section>

          <section>
            <h3 className="text-xl font-semibold mb-2">
              3. How Information Is Collected
            </h3>
            <p>
              Information may be collected when you create an account, place
              orders, subscribe to newsletters, communicate with support, use
              our applications, or interact with the Platform.
            </p>
          </section>

          <section>
            <h3 className="text-xl font-semibold mb-2">
              4. Purpose of Collection and Use
            </h3>
            <p>
              Information is used to process orders, facilitate payments,
              provide support, improve services, perform analytics, prevent
              fraud, comply with legal obligations, and maintain business
              records.
            </p>
          </section>

          <section>
            <h3 className="text-xl font-semibold mb-2">
              5. Payment Processing
            </h3>
            <p>
              Payments may be processed by authorized third-party payment
              providers. We do not store complete card details, banking
              credentials, or UPI PINs.
            </p>
          </section>

          <section>
            <h3 className="text-xl font-semibold mb-2">
              6. Shipping and Order Fulfilment
            </h3>
            <p>
              We may share customer information with logistics and shipping
              providers for order fulfilment and delivery purposes.
            </p>
          </section>

          <section>
            <h3 className="text-xl font-semibold mb-2">
              7. Marketing Communications
            </h3>
            <p>
              We may send service notifications, promotional messages, emails,
              SMS, WhatsApp communications, and updates regarding products and
              services.
            </p>
          </section>

          <section>
            <h3 className="text-xl font-semibold mb-2">
              8. Cookies and Tracking Technologies
            </h3>
            <p>
              The Platform uses cookies and tracking technologies for analytics,
              authentication, personalization, security, and advertising
              purposes.
            </p>
          </section>

          <section>
            <h3 className="text-xl font-semibold mb-2">
              9. Third-Party Service Providers
            </h3>
            <p>
              We may engage third-party providers for hosting, payments,
              logistics, analytics, marketing, customer support, and security
              services.
            </p>
          </section>

          <section>
            <h3 className="text-xl font-semibold mb-2">
              10. Data Storage and Security
            </h3>
            <p>
              We implement reasonable technical and organizational safeguards to
              protect personal information.
            </p>
          </section>

          <section>
            <h3 className="text-xl font-semibold mb-2">
              11. Data Retention
            </h3>
            <p>
              Personal information is retained as long as reasonably necessary
              for legal, operational, and business purposes.
            </p>
          </section>

          <section>
            <h3 className="text-xl font-semibold mb-2">
              12. User Rights and Requests
            </h3>
            <p>
              Users may request access, correction, deletion, or modification of
              their personal information by contacting us.
            </p>
          </section>

          <section>
            <h3 className="text-xl font-semibold mb-2">
              13. Children's Privacy
            </h3>
            <p>
              The Platform is intended for users meeting the minimum age
              requirement specified by applicable law.
            </p>
          </section>

          <section>
            <h3 className="text-xl font-semibold mb-2">
              14. Legal Compliance
            </h3>
            <p>
              This policy is intended to comply with applicable Indian laws,
              including the Digital Personal Data Protection Act, 2023.
            </p>
          </section>

          <section>
            <h3 className="text-xl font-semibold mb-2">
              15. Cross-Border Data Transfers
            </h3>
            <p>
              Information may be processed or stored outside India where
              necessary to provide services.
            </p>
          </section>

          <section>
            <h3 className="text-xl font-semibold mb-2">
              16. Grievance Officer
            </h3>
            <p>
              Grievance Officer: [GRIEVANCE_OFFICER_NAME]
              <br />
              Email: [GRIEVANCE_OFFICER_EMAIL]
              <br />
              Phone: [GRIEVANCE_OFFICER_PHONE]
            </p>
          </section>

          <section>
            <h3 className="text-xl font-semibold mb-2">
              17. Changes to this Privacy Policy
            </h3>
            <p>
              We may update this Privacy Policy from time to time. Changes
              become effective upon publication.
            </p>
          </section>

          <section>
            <h3 className="text-xl font-semibold mb-2">18. Contact Us</h3>
            <p>
              [BUSINESS_NAME]
              <br />
              Email: [SUPPORT_EMAIL]
              <br />
              Phone: [SUPPORT_PHONE]
              <br />
              Website: [WEBSITE_URL]
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
