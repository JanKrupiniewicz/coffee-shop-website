import { getTranslations } from "@/lib/translation";
import HeaderPhotoGallery from "./header-photo-gallery";
import NavLink from "./nav-link";
import { Translations } from "../../lib/translation";

export default async function MainHeader({ t }: { t: Translations }) {
  return (
    <header>
      <HeaderPhotoGallery />
      <nav>
        <ul className="flex flex-col justify-between items-center m-5 sm:flex-row">
          <li>
            <NavLink href="">{t.home}</NavLink>
          </li>
          <li>
            <NavLink href="coffeeTea">{t.coffeeTea}</NavLink>
          </li>
          <li>
            <NavLink href="locations">{t.locations}</NavLink>
          </li>
          <li>
            <NavLink href="contact">{t.contact}</NavLink>
          </li>
          <li>
            <NavLink href="catering">{t.catering}</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
