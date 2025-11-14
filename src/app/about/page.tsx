import { AboutHeader } from '@/src/components/sections/about-header';
import { AboutContent } from '@/src/components/sections/about-content';
import { siteConfig } from '@/src/config/site.config';

export const metadata = {
  title: `About | ${siteConfig.siteName}`,
  description: siteConfig.about,
};

export default function AboutPage() {
  return (
    <div className="min-h-screen py-16">
      <div className="mx-auto max-w-4xl px-6 mt-16 md:mt-24">
        <AboutHeader />
        <AboutContent />
      </div>
    </div>
  );
}
