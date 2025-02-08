export default function Footer() {
  return (
    <div className="bg-gray-800 text-white py-4 w-full text-center ">
      <p>&copy; 2023 Caffeine Recipes. All rights reserved.sadfasfasf</p>
      <nav className="mt-4">
        <ul className="flex justify-center space-x-4">
          <li>
            <a href="/about" className="hover:underline">
              About Us
            </a>
          </li>
          <li>
            <a href="/contact" className="hover:underline">
              Contact
            </a>
          </li>
          <li>
            <a href="/privacy" className="hover:underline">
              Privacy Policy
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
