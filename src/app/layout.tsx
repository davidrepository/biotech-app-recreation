import "@fortawesome/fontawesome-svg-core";
import { config } from "@fortawesome/fontawesome-svg-core";
import { TopBar, Header, Footer } from "@/components";
import { DataProvider, ThemeProvider } from "@/providers";
import {
  TOPBAR_DATA_URL,
  HEADER_DATA_URL,
  HERO_SECTION_DATA_URL,
  OFFER_SECTION_DATA_URL,
  PRODUCT_SECTION_DATA_URL,
  SERVICE_SECTION_DATA_URL,
  BLOG_SECTION_DATA_URL,
  GROUP_SECTION_DATA_URL,
  FOOTER_DATA_URL,
} from "@/constants";
import {
  getTopBarData,
  getHeaderData,
  getHeroSectionData,
  getOfferSectionData,
  getProductSectionData,
  getServiceSectionData,
  getBlogSectionData,
  getGroupSectionData,
  getFooterData,
} from "@/lib";

config.autoAddCss = false;

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [
    topBarData,
    headerData,
    heroSectionData,
    offerSectionData,
    productSectionData,
    serviceSectionData,
    blogSectionData,
    groupSectionData,
    footerData,
  ] = await Promise.all([
    getTopBarData(),
    getHeaderData(),
    getHeroSectionData(),
    getFooterData(),
    getOfferSectionData(),
    getProductSectionData(),
    getServiceSectionData(),
    getBlogSectionData(),
    getGroupSectionData(),
  ]);

  return (
    <html lang="en">
      <body>
        <DataProvider
          fallback={{
            [TOPBAR_DATA_URL]: topBarData,
            [HEADER_DATA_URL]: headerData,
            [HERO_SECTION_DATA_URL]: heroSectionData,
            [OFFER_SECTION_DATA_URL]: offerSectionData,
            [PRODUCT_SECTION_DATA_URL]: productSectionData,
            [SERVICE_SECTION_DATA_URL]: serviceSectionData,
            [BLOG_SECTION_DATA_URL]: blogSectionData,
            [GROUP_SECTION_DATA_URL]: groupSectionData,
            [FOOTER_DATA_URL]: footerData,
          }}
        >
          <ThemeProvider>
            <TopBar />
            <Header />
            {children}
            <Footer />
          </ThemeProvider>
        </DataProvider>
      </body>
    </html>
  );
}
