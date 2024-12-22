import "./globals.css";

export default function Head() {
    return (
        <div className="flex items-center justify-center space-x-36 h-16 text-2xl opacity-90 border-b border-b-black bg-[#d5d1de]">
            <a href="#Home">
                Acceuil
            </a>
            <a href="#About">
                à propos
            </a>
            <a href="#Synthèse">
                Tableau de synthèse
            </a>
            <a href="#Compétences">
                Compétences
            </a>
            <a href="">
                Projets
            </a>
            <a href="">
                Expériences
            </a>
            <a href="">
                Veille
            </a>
            <a href="#Contact">
                Contact
            </a>
        </div>
    );
}
