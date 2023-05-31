import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faTiktok } from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  return (
    <footer className="absolute w-full border-t border-gray-200 bg-white py-5 text-center">
      <div className="flex justify-center space-x-4">
        <a href="https://www.instagram.com/jovenova_org/" target="_blank" rel="noreferrer">
          <FontAwesomeIcon icon={faInstagram} size="2x" />
        </a>
        <a href="https://www.tiktok.com/@jovenova" target="_blank" rel="noreferrer" className="mr-4">
          <FontAwesomeIcon icon={faTiktok} size="2x" />
        </a>
      </div>
      <p className="mt-2 text-gray-500">jovenova.org</p>
    </footer>
  );
}
