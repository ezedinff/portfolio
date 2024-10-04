// components/CertificationBadgesSection.tsx
import React from 'react';
import Image from 'next/image';

interface CertificationBadge {
  name: string;
  imageUrl: string;
  alt: string;
}

const certifications: CertificationBadge[] = [
  {
    name: "AWS Certified Solutions Architect",
    imageUrl: "https://d1.awsstatic.com/training-and-certification/certification-badges/AWS-Certified-Solutions-Architect-Associate_badge.3419559c682629072f1eb968d59dea0741772c0f.png",
    alt: "AWS Certified Solutions Architect Badge"
  },
  {
    name: "Microsoft Certified: Azure Developer Associate",
    imageUrl: "https://learn.microsoft.com/en-us/media/learn/certification/badges/microsoft-certified-associate-badge.svg",
    alt: "Microsoft Certified: Azure Developer Associate Badge"
  },
  {
    name: "Google Cloud Certified - Professional Cloud Architect",
    imageUrl: "https://images.credly.com/size/680x680/images/71c579e0-51fd-4247-b493-d2fa8167157a/image.png",
    alt: "Google Cloud Certified - Professional Cloud Architect Badge"
  },
  {
    name: "Certified Information Systems Security Professional (CISSP)",
    imageUrl: "https://images.credly.com/images/6eeb0a98-33cb-4f72-bfc3-f89d65a3286c/image.png",
    alt: "CISSP Badge"
  },
  {
    name: "Certified Kubernetes Administrator (CKA)",
    imageUrl: "https://images.credly.com/images/8b8ed108-e77d-4396-ac59-2504583b9d54/cka_from_cncfsite__281_29.png",
    alt: "Certified Kubernetes Administrator Badge"
  },
  {
    name: "Cisco Certified Network Professional (CCNP)",
    imageUrl: "https://images.credly.com/images/07f70c56-f067-458e-bbe5-736f055f0cce/CCNP_Enterprise_large.png",
    alt: "Cisco Certified Network Professional Badge"
  }
];

const CertificationBadgesSection: React.FC = () => {
  return (
    <section className="bg-white py-28">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Certifications</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {certifications.map((cert, index) => (
            <div key={index} className="flex flex-col items-center">
              <Image
                src={cert.imageUrl}
                alt={cert.alt}
                width={120}
                height={120}
                className="mb-2"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificationBadgesSection;