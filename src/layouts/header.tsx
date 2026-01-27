import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";

const navLinks = [
  { href: "/#informe-se", label: "Informe-se" },
  { href: "/#como-ajudar", label: "Como ajudar" },
  { href: "/#noticias", label: "Notícias e histórias" },
  { href: "/#sobre-nos", label: "Sobre nós" },
];

const navigationMenuItems = [
  { title: "Home", href: "#" },
  { title: "Blog", href: "#blog" },
  { title: "Docs", href: "#docs" },
];

export function Header() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem key={"aln"}>
          <NavigationMenuLink asChild>aln</NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}
