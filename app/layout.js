import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { Geist, Geist_Mono } from "next/font/google";
import Navigation from "./component/navigation";
import { Prompt } from 'next/font/google';
import Footer from "./component/footer";

const prompt = Prompt({
  subsets: ['thai', 'latin'], // รองรับภาษาไทย
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
});

export const metadata = {
  title: "'เว็บไซต์ของคุณ",
  description: "เว็บไซต์ที่ใช้ฟอนต์ Prompt",
};
import Link from 'next/link';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={prompt.className}>
        <Navigation></Navigation>
        {children}
        <Footer/>
      </body>
    </html>
  );
}