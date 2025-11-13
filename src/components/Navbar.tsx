import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-gold/20">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <h1 className="font-playfair text-3xl font-bold liquid-glass-text">
              VITALIN PLATINUM
            </h1>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-8">
            <Link to="/" className="text-foreground hover:text-gold transition-smooth">
              Home
            </Link>
            <Link to="/about" className="text-foreground hover:text-gold transition-smooth">
              Tentang Kami
            </Link>
            <Link to="/products" className="text-foreground hover:text-gold transition-smooth">
              Produk
            </Link>
            
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center gap-1 text-foreground hover:text-gold transition-smooth">
                Blog <ChevronDown className="w-4 h-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-card border-gold/20">
                <DropdownMenuItem asChild>
                  <Link to="/blog" className="cursor-pointer">Semua Artikel</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/blog/detail" className="cursor-pointer">Detail Artikel</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <Link to="/contact" className="text-foreground hover:text-gold transition-smooth">
              Kontak
            </Link>
            
            <div className="flex items-center gap-3">
              <Button variant="outline" className="border-gold text-gold hover:bg-gold hover:text-gold-foreground">
                Login
              </Button>
              <Button className="bg-gradient-to-r from-gold-dark to-accent shine-effect">
                Daftar
              </Button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-foreground"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden py-4 space-y-4 animate-fade-in">
            <Link to="/" className="block text-foreground hover:text-gold transition-smooth">
              Home
            </Link>
            <Link to="/about" className="block text-foreground hover:text-gold transition-smooth">
              Tentang Kami
            </Link>
            <Link to="/products" className="block text-foreground hover:text-gold transition-smooth">
              Produk
            </Link>
            <Link to="/blog" className="block text-foreground hover:text-gold transition-smooth">
              Blog
            </Link>
            <Link to="/contact" className="block text-foreground hover:text-gold transition-smooth">
              Kontak
            </Link>
            <div className="flex flex-col gap-2 pt-4">
              <Button variant="outline" className="border-gold text-gold w-full">
                Login
              </Button>
              <Button className="bg-gradient-to-r from-gold-dark to-accent w-full">
                Daftar
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
