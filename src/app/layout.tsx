import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "../components/layout/header";
import { Box, ChakraProvider, VStack } from "@chakra-ui/react";
import { Providers } from "./providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <Box
            maxWidth="100%"
            marginX="auto"
            paddingX='4'
            display="flex"
            flexDirection="column"
            alignItems="center"
          >
            <Header />
            {children}
          </Box>
        </Providers>
      </body>
    </html>
  );
}
