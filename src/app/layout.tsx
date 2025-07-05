import { DataProvider, ThemeProvider } from "@/providers";
import { Header } from "@/components";
import { getHeaderData } from "@/lib";
import { HEADER_DATA_URL } from "@/constants";

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const headerData = await getHeaderData();

  return (
    <html lang="en">
      <body>
        <DataProvider fallback={{ [HEADER_DATA_URL]: headerData }}>
          <ThemeProvider>
            <Header />
            {children}
          </ThemeProvider>
        </DataProvider>
      </body>
    </html>
  );
}
