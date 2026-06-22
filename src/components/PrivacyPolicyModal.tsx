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
            <p>For customer support, you may contact us at [SUPPORT_EMAIL] or [SUPPORT_PHONE]. Our GST Registration Number is [GST_NUMBER].
</p>
            <p>For all privacy-related requests, corrections, complaints, or data deletion requests, users may contact us at [PRIVACY_CONTACT_EMAIL].</p>
          </section>

          <section>
            <h3 className="text-xl font-semibold mb-2">
              2. Information We Collect
            </h3>
            <p>
              In order to provide our services efficiently, we may collect certain personal, transactional, technical, and operational information from users. This may include your name, email address, mobile number, billing address, shipping address, company name, GST details, account credentials, authentication records, order history, payment status, invoice details, customer service interactions, and communication preferences.
We may also collect technical information such as IP address, browser type, operating system, device identifiers, session information, website activity, approximate location information, and other analytics-related data generated through your interaction with the Platform.
Where permitted by law and user consent, we may collect marketing-related information to understand preferences, improve customer experience, and communicate relevant offers and updates

            </p>
          </section>

          <section>
            <h3 className="text-xl font-semibold mb-2">
              3. How Information Is Collected
            </h3>
            <p>
              nformation may be collected when you create an account, place an order, subscribe to newsletters, submit enquiries, communicate with customer support, participate in promotional campaigns, use our mobile application, interact with advertisements, or browse our Platform.
Certain information may also be collected automatically through cookies, tracking technologies, analytics platforms, advertising networks, and authorized third-party integrations used to operate and improve the Platform.

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
              Where permitted by applicable laws, we may also use information for marketing, promotional campaigns, customer engagement, product recommendations, and service improvement initiatives.
            </p>
          </section>

          <section>
            <h3 className="text-xl font-semibold mb-2">
              5. Payment Processing
            </h3>
            <p>
              Payments may be processed by authorized third-party payment
              providers. We do not store complete card details, banking
              credentials, or UPI PINs, or other sensitive payment authentication information on our servers.

              Payment transactions are handled directly by payment service providers that maintain their own privacy, security, and compliance standards. Users are encouraged to review the privacy policies of such providers before completing any transaction.

            </p>
          </section>

          <section>
            <h3 className="text-xl font-semibold mb-2">
              6. Shipping and Order Fulfilment
            </h3>
            <p>
             To facilitate order processing and delivery, we may share relevant customer information with logistics and shipping service providers, including [SHIPPING_PARTNER_NAME].
Such information may include the customer's name, contact number, delivery address, order details, and shipment-related information necessary to complete order fulfilment, provide shipment tracking, manage returns, and deliver customer support services.
            </p>
          </section>

          <section>
            <h3 className="text-xl font-semibold mb-2">
              7. Marketing Communications
            </h3>
            <p>
             From time to time, we may send transactional messages, service notifications, order updates, promotional emails, SMS communications, WhatsApp messages, push notifications, and marketing content relating to our products and services.
Users may opt out of promotional communications at any time by following the unsubscribe instructions provided in such communications or by contacting us through [SUPPORT_EMAIL]. However, transactional communications relating to orders, payments, security, and account management may continue to be sent where necessary.

            </p>
          </section>

          <section>
            <h3 className="text-xl font-semibold mb-2">
              8. Cookies and Tracking Technologies
            </h3>
            <p>
             The Platform uses cookies and similar technologies to enhance functionality, improve user experience, understand visitor behavior, measure advertising effectiveness, and support security operations.
These technologies may be used for authentication, cart management, analytics, performance monitoring, personalization, advertising, remarketing, and audience measurement purposes. We may also use services provided by third-party analytics and advertising platforms, including Google Analytics, Google Ads, Meta advertising services, and other authorized technology partners.
Users may modify browser settings to manage or disable cookies. However, certain Platform features may not function properly if cookies are disabled.

            </p>
          </section>

          <section>
            <h3 className="text-xl font-semibold mb-2">
              9. Third-Party Service Providers
            </h3>
            <p>
              We may engage third-party service providers to assist with website hosting, cloud infrastructure, payment processing, shipping and logistics, analytics, marketing automation, customer support, communication services, security monitoring, and other operational activities.
Such service providers may access information only to the extent necessary to perform services on our behalf and are expected to maintain appropriate confidentiality and security standards.

            </p>
          </section>

          <section>
            <h3 className="text-xl font-semibold mb-2">
              10. Data Storage and Security
            </h3>
            <p>
            We implement reasonable technical, organizational, and administrative measures to safeguard personal information against unauthorized access, disclosure, alteration, loss, misuse, or destruction.
Information may be stored on cloud-based infrastructure, managed hosting environments, third-party business systems, or other authorized storage facilities located within or outside India. While we strive to maintain appropriate security measures, no method of electronic transmission or storage can be guaranteed to be completely secure.

            </p>
          </section>

          <section>
            <h3 className="text-xl font-semibold mb-2">
              11. Data Retention
            </h3>
            <p>
             Personal information will be retained for as long as reasonably necessary to provide services, maintain business records, comply with legal requirements, resolve disputes, prevent fraud, enforce agreements, and protect legitimate business interests.
Where required by law, certain information may continue to be retained even after a user account has been closed or deleted.

            </p>
          </section>

          <section>
            <h3 className="text-xl font-semibold mb-2">
              12. User Rights and Requests
            </h3>
            <p>
             Users who wish to access, correct, update, delete, or otherwise manage their personal information may submit a request to [PRIVACY_CONTACT_EMAIL].
We may require reasonable identity verification before processing such requests. Requests will be reviewed and addressed in accordance with applicable laws and operational requirements.

            </p>
          </section>

          <section>
            <h3 className="text-xl font-semibold mb-2">
              13. Children's Privacy
            </h3>
            <p>
              The Platform is intended for individuals who meet the minimum age requirement of [MINIMUM_AGE_REQUIREMENT] years.
If we become aware that personal information has been collected from a child without appropriate authorization or legal basis, we may take reasonable steps to delete such information. Parents or legal guardians who believe that a child has provided information through the Platform may contact us for assistance.

            </p>
          </section>

          <section>
            <h3 className="text-xl font-semibold mb-2">
              14. Legal Compliance
            </h3>
            <p>
              This Privacy Policy is intended to comply with applicable Indian laws and regulations, including the Digital Personal Data Protection Act, 2023, the Information Technology Act, 2000, relevant rules framed thereunder, and applicable consumer protection and eCommerce regulations.
            </p>
          </section>

          <section>
            <h3 className="text-xl font-semibold mb-2">
              15. Cross-Border Data Transfers
            </h3>
            <p>
             Certain technology providers, infrastructure partners, or service providers engaged by us may process or store information on servers located outside India. By using the Platform, users acknowledge and consent to such processing where necessary for providing services, subject to reasonable safeguards and applicable legal requirements.

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
              <br />
              Address: [GRIEVANCE_OFFICER_ADDRESS]

            </p>
          </section>

          <section>
            <h3 className="text-xl font-semibold mb-2">
              17. Changes to this Privacy Policy
            </h3>
            <p>
             We reserve the right to update, amend, or modify this Privacy Policy from time to time. Any changes will become effective upon publication of the revised version on the Platform. Users are encouraged to review this Privacy Policy periodically to remain informed about how information is handled.
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
              <br />
              Address: [REGISTERED_ADDRESS]
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
