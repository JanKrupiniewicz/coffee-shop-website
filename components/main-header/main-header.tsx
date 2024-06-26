import HeaderPhotoGallery from './header-photo-gallery';
import NavLink from './nav-link';

export default function MainHeader() {
  return (
    <header>
        <HeaderPhotoGallery />
        <nav>
            <ul className='flex flex-col justify-between items-center m-5 sm:flex-row'>
                <li>
                    <NavLink href="">Home</NavLink>
                </li>
                <li>
                    <NavLink href="coffeeTea">Coffee & Tea</NavLink>
                </li>
                <li>
                    <NavLink href="locations">Locations</NavLink>
                </li>
                <li>
                    <NavLink href="contact">Contact</NavLink>
                </li>
                <li>
                    <NavLink href="catering">Catering</NavLink>
                </li>
            </ul>
        </nav>
    </header>
  );
}