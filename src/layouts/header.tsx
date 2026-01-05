import { Link } from "react-router-dom";
import LogoRua from "/assets/logo-rua-completo.png";

const navLinks = [
  { href: "/#informe-se", label: "Informe-se" },
  { href: "/#como-ajudar", label: "Como ajudar" },
  { href: "/#noticias", label: "Notícias e histórias" },
  { href: "/#sobre-nos", label: "Sobre nós" },
];

export function Header() {
  return (
    <header className="bg-primary-900 shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0">
            <Link to="/">
              <img className="h-12 w-auto" src={LogoRua} alt="Logo RUA BR" />
            </Link>
          </div>
          <div className="hidden md:block">
            {navLinks.map((link) => link.label)}
          </div>
        </div>
      </div>
    </header>
  );
}
